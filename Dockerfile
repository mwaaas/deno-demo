FROM hayd/alpine-deno:1.7.1

EXPOSE 80

WORKDIR /app

ENV APP_NAME="default"

COPY main.ts .

CMD ["run", "--allow-net", "--allow-env", "main.ts"]