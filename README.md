# Keskin CoC

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4. 
The design makes use of Clarity’s designs system. Clarity is an open-source, enterprise-focused design system (https://clarity.design/).

## Install modules
Run `npm install` to include all modules.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `ng build --prod --base-href /coc/` to make build ready for subfolder `/coc/` in production.

## Run in Docker

Change `keskin-coc` in the file `Dockerfile` in root of this project to own repository-name. Run `docker build --rm -t keskin-coc:latest .` (change `keskin-coc` in command to own repository name). The app will be copied to Docker.
Run `docker run --rm -d -p 90:80/tcp keskin-coc:latest` to launch the app. Navigate to `http://localhost:90/` to see the app.

## Retrieve data from .Net C# API
Download .Net C# API from https://github.com/hayrikeskin/CocAPI and run project.
Uncomment line to use data from .Net C# API.
Uncomment lines to retrieve data from Backend API in `/src/app/clan-detail/clan-detail-component.ts` and restart the app.

## Run Elastic in Docker

Run `docker pull docker.elastic.co/elasticsearch/elasticsearch:7.11.1` to install Elastic in Docker.
Run `docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.11.1` to launch Elastic in Docker.
Navigate to `http://localhost:9200/` to see Elastic.

## Retrieve data from Elastic

Enable CORS in Elastic by adding lines in `C:\ProgramData\Elastic\Elasticsearch\config\elasticsearch.yml` (or other installed folder)
http.cors.enabled : true http.cors.allow-origin : "http://localhost:4200" http.cors.allow-methods : GET
Restart Elasticsearch-service.
Uncomment lines to retrieve data from Elastic in `/src/app/clan-detail/clan-detail-component.ts` and restart the app.

Perform next manual steps to create an index and add data in Elastic:
curl --location --request GET 'https://api.clashofclans.com/v1/clans/%238L000CQ8' \
--header 'Authorization: Bearer [Bearer-value from CoC]'

curl --location --request POST 'localhost:9200/coc/clans/1/' \
--data-raw '[Response of previous command]'