const express = require('express');

const messages = require('./messages');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - OK' 
  });
});

router.use('/messages', messages);

module.exports = router;
