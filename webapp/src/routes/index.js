const express = require('express');

const { sum } = require('../sum');

const router = express.Router();

function apiRoutes(app) {
  app.use('/api',router)

  app.post('/', (req, resp) => {
    const body = req.body;
    return resp.json({
      message: 'ok',
      total: sum(body.a, body.b)
    })
  })
}

module.exports = {
  apiRoutes
};
