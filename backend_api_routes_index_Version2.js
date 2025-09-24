const express = require('express');
const router = express.Router();

router.get('/crowd-prediction', (req, res) => {
  res.json({ prediction: 'Moderate', count: 1200, timestamp: Date.now() });
});

router.get('/queue-status', (req, res) => {
  res.json({ queueLength: 80, waitTime: '15 min' });
});

module.exports = router;