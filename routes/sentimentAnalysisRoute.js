const express = require('express');
const router = express.Router();
const SentimentAnalysisController = require('../controllers/SentimentAnalysisController');
const { authenticateJWT } = require('../middleware/authMiddleware');

router.post('/analyze', authenticateJWT, SentimentAnalysisController.analyzeSentiment);

module.exports = router;
