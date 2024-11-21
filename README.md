# Backend projet 7 - Mon Vieux Grimoire

Mon Vieux Grimoire est une site de référencement et de notation de livres.

## Installer le projet

1. Le projet étant en 2 parties, backend et frontend, il faut cloner la partie frontend : https://github.com/San5u/Mon-vieux-grimoire-Frontend.git

2. Installer les dépendances : npm install

3. Créez un fichier .env puis rajouter les données suivantes :

Le lien pour se connecter à la base de données MongoDB:

```MONGO_URL=<Mongo url>
MONGO_USER=<Mongo user name>
MONGO_PASSWORD=<Mongo password>
MONGO_DB=<Mongo DB name>

```
Le token: JWT_TOKEN=

## Utilisation
Lancer le code de la partie frontend et backend séparément avec : npm start

La partie frontend sera à l'adresse http://localhost:3000 et la partie backend sera à l'adresse http://localhost:4000