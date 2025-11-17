const express = require('express');
const healthRoutes = require('./routes/healthRoutes');

const app = express();
app.use('/api', healthRoutes);

// Global error handler (Task 5)
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;