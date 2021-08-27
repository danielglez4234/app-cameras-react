// Dockerfile


FROM node:16.8-alpine
WORKDIR /app-cameras-react
ENV PATH="./node-modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
