FROM node:alpine AS builder
COPY . ./keskin-coc
WORKDIR /keskin-coc
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /keskin-coc/dist/keskin-coc/ /usr/share/nginx/html