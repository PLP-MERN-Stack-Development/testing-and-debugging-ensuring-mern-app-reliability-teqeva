const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json({ message: 'OK' });
});

test('GET /api/test returns OK', async () => {
  const res = await request(app).get('/api/test');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('OK');
});
