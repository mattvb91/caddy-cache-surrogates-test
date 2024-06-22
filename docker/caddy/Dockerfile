# 1. Stage: Build
FROM caddy:2.8.4-builder-alpine as builder

RUN xcaddy build --with github.com/caddyserver/cache-handler

# 2. Stage: Runtime
FROM alpine

COPY --from=builder /usr/bin/caddy /usr/bin/caddy

RUN apk --no-cache --update add mailcap #mimetype support

# See https://caddyserver.com/docs/conventions#file-locations for details
ENV XDG_CONFIG_HOME /config
ENV XDG_DATA_HOME /data

VOLUME /config
VOLUME /data

EXPOSE 80
EXPOSE 443
EXPOSE 2019

WORKDIR /srv