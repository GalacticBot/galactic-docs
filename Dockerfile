FROM node:14

WORKDIR /home/development/galactic-docs

RUN git clone https://github.com/GalacticBot/galactic-docs.git
RUN yarn install
RUN pwd

EXPOSE 3000

CMD ["yarn", "start"]
