const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id })
  }
}