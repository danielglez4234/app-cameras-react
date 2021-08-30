FROM alpine:3.11
WORKDIR /app-cameras-react
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN sudo npm run build
CMD ["npm", "start"]
