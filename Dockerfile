FROM node:lts AS setup
WORKDIR /usr/src/hnnazm
# RUN npm install -g \
# @vue/cli
# any other global dependencies
COPY package.json package-lock.json ./

FROM setup AS dev
RUN npm install \
&& npm cache clean --force
CMD ["npm", "run", "start"]

FROM setup AS prod
RUN npm install --production
COPY src ./src
CMD ["node", "/app/src/index.js"]
