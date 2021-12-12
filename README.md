## Zadanie 3.

a. Zbudowanie opracowanego obrazu kontenera: `docker build . -t time-app`

b. Uruchomienie kontenera na podstawie zbudowanego obrazu: `docker run -p 5000:8080 -d --name time-app-container time-app`

c. Uzyskanie informacji, które wygenerował serwer w trakcie uruchamiana kontenera: `docker logs time-app-container`

d. Sprawdzenie, ile warstw posiada zbudowany obraz: `docker history time-app`

## Zadanie 4.

Zbudowanie obrazu wykorzystując bezpośredni link do Dockerfile umieszczonego na GitHub: `docker build (UrlDoRepozytoriumNaGitHub)`

Przeniesienie stworzonego obrazu na swoje konto na DockerHub: `docker tag (NazwaObrazu):(NazwaTagu) (NazwaRepozytorium):(NazwaTagu) i docker push (NazwaRepozytorium):(NazwaTagu)`
