const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Lucas Silva'
  })
})

module.exports = routes;