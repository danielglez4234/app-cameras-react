const { createProxyMiddleware  } = require("http-proxy-middleware");
const cors = require('cors');

module.exports = function(app){
  app.use(cors());
  app.use(
    createProxyMiddleware('/subscriptions', {
      target: "http://161.72.123.211:1026/v2/subscriptions",
      changeOrigin: true
    })
  );


  app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
  });
}
