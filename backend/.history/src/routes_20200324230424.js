const express = require('express');
const crypyo = require('crypto');

const routes = express.Router();

routes.post('/ongs', (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;




  return response.json()
})

module.exports = routes;