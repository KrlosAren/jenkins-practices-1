const express = require('express');
const { apiRoutes } = require('../routes');

class Server {
  constructor() {
    this.app = express();

    this.config();
    this.middlewares();
    this.routes();
  }

  config() {
    this.port = process.env.PORT || 3000;
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    apiRoutes(this.app);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started at ${this.port}`);
    });
  }
}

module.exports = {
  Server,
};
