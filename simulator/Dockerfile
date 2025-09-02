# simulator/Dockerfile
FROM node:22-alpine AS base
WORKDIR /usr/src/simulator
COPY package*.json ./
RUN npm ci

FROM base AS build
COPY . .
RUN npm run build

FROM node:22-alpine AS release
WORKDIR /usr/src/simulator
ENV NODE_ENV=production

COPY --from=build /usr/src/simulator/package*.json ./
COPY --from=build /usr/src/simulator/dist ./dist
RUN npm ci --omit=dev

USER node

CMD ["node", "dist/client.js"]
