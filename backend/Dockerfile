FROM node:22-alpine AS base
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

FROM base AS build
COPY . .
RUN npm run build

FROM node:22-alpine AS release
WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist

RUN npm ci --omit=dev

RUN apk add --no-cache curl

USER node

EXPOSE 3000
CMD ["node", "dist/server.js"]
