FROM node:20-slim AS base

ENV NODE_ENV production
ENV ORIGIN https://beta.oilios.sk

WORKDIR /usr/src/app

COPY node_modules ./node_modules
COPY dist ./dist
COPY server ./server
COPY public ./public
 
# Expose the port that the application listens on.
EXPOSE 4000
 
# Run the application.
CMD node server/entry.express