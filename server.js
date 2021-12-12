// Import frameworku i modułu
import express from 'express';
import fetch from 'node-fetch';

// Stałe - port, data uruchomienia serwera i autor
const PORT = 8080;
const DATE = new Date().toLocaleDateString('pl-PL');
const AUTHOR = 'Klaudia Jedzura';

// Pobranie daty i czasu na podstawie IP 
async function getTimeFromIp(ip) {
  try {
    // Pobranie danych z API na podstawie IP
    var response = await fetch(`http://ip-api.com/json/${ip}`);
    var data = await response.json();

    // Przygotowanie do zwrócenia odpowiedniej daty i czasu na podstawie strefy czasowej otrzymanej z API
    var timeZone = data['timezone'];
    if (timeZone == undefined) {
      timeZone = "Europe/Warsaw";
    }
    var localDate = new Date().toLocaleString('pl-PL', {timeZone: timeZone});

    // Zwrócenie daty i czasu
    return `${localDate}`;
    // Ewentualny błąd podczas pobierania danych z API
  } catch (e) {
    console.log(e);
    return 'Pobieranie danych z API nie powiodlo sie.';
  }
}

const app = express();

// Logi - port, data uruchomienia serwera i autor
console.log(`Data uruchomienia: ${DATE}`);
console.log(`Autor: ${AUTHOR}`);
console.log(`Port: ${PORT}`);

app.set('trust proxy', true)
app.use(async (req, res) => {
  // Pobranie daty i czasu do wyświetlenia na stronie
  var localDate = await getTimeFromIp(req.ip);
  // Wyświetlenie IP, daty i czasu na stronie
  res.send(`<p>IP: ${req.ip}</p><p>Data, czas:  ${localDate}</p>`);
  
});

// Ustawienie nasłuchiwania serwera
app.listen(PORT, '0.0.0.0');