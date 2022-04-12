# Best Gym Tracker
## Description
This is a retro tracker app that is not ready to use in development :)

## Configuration guide for my frontend baby :)
1. Download Docker Desktop and install it
2. Have Docker Desktop running in the background
3. Create .env.development file in the root directory, with the following content:
```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgre
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
RETRO_DB_USER=postgres
RETRO_DB_PASSWORD=postgres
RETRO_DB_NAME=retro
```
```
NOTE: You need to create retro database before next steps. If you don't know how or don't want to waste time on that, just use default database `postgre` in that case.
```
3. Go to ./database and run `docker-compose up` if everything is ok continue else contact your parents :)
4. Go to ./frontend and run `npm i && npm run dev`
5. Go to ./backend and run `npm i && npm run dev`
If everything is ok be happy :) and now you can thanks your colleague :)