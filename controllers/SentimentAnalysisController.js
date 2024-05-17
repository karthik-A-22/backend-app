const SentimentAnalysisModel = require('../models/SentimentAnalysisModel');

class SentimentAnalysisController {
    constructor() {
        this.model = new SentimentAnalysisModel();
    }

    analyzeSentiment(req, res) {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text input is required' });
        }

        const sentiment = this.model.analyzeSentiment(text);
        res.json({ sentiment });
    }
}

module.exports = SentimentAnalysisController;
