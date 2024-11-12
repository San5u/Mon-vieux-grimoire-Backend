# Backend projet 7 - Mon Vieux Grimoire

Mon Vieux Grimoire est une site de référencement et de notation de livres.

## Installer le projet

1. Le projet étant en 2 parties, backend et frontend, il faut cloner la partie frontend : https://github.com/San5u/Mon-vieux-grimoire-Frontend.git
3. Installer les dépendances : npm install

4. Créez un fichier .env puis rajouter les données suivantes :

Le lien pour se connecter à la base de données MongoDB:

```MONGO_URL=<Mongo url>
MONGO_USER=<Mongo user name>
MONGO_PASSWORD=<Mongo password>
MONGO_DB=<Mongo DB name>
MONGO_OPTIONS=retryWrites=true&w=majority&appName=<Mongo DB app Name>
```
Le token: JWT_TOKEN=