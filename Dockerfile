FROM oven/bun:1-alpine AS deps
WORKDIR /app

COPY package.json ./

RUN bun install

FROM oven/bun:1-alpine AS build
WORKDIR /app

ARG VITE_BASE_PATH=/campeonatos/
ENV VITE_BASE_PATH=${VITE_BASE_PATH}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

FROM nginx:alpine AS runner

RUN mkdir -p /usr/share/nginx/html/campeonatos

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/campeonatos

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
