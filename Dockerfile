FROM node:18-alpine3.15 as builder

WORKDIR /app

COPY . .

RUN rm -rf node_modules && rm -rf build && yarn install
RUN yarn build

FROM cerc/webapp-base:local

COPY config.yml /config
RUN mkdir -p /data
COPY --from=builder /app/build /data
