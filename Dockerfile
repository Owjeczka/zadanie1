# Wybór obrazu bazowego
FROM node:alpine

# Autor
LABEL author="Klaudia Jedzura"

# Folder roboczy
WORKDIR /usr/src/app

# Kopiowanie package.json i package-lock.json na obraz
COPY package*.json ./

# Instalacja potrzebnego frameworku i modułu
RUN npm install

# Kopiowanie pozostałych plików aplikacji na obraz
COPY . .

# Ustawienie portu i uruchomienie serwera
EXPOSE 8080
CMD [ "node", "server.js" ]