const express = require('express');
const router = express.Router();
const SentimentAnalysisController = require('../controllers/SentimentAnalysisController');

const sentimentController = new SentimentAnalysisController();

router.post('/sentiment', sentimentController.analyzeSentiment.bind(sentimentController));

module.exports = router;
