const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAE',
        email: 'contato@apae.com.br',
        whatsapp: '31000000000',
        city: 'Betim',
        uf: 'MG'
      })

    console.log(response.body)
  })
})