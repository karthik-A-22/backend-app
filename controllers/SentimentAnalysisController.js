const SentimentAnalysisModel = require('../models/SentimentAnalysisModel');

exports.analyzeSentiment = (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }
        const sentiment = SentimentAnalysisModel.analyzeSentiment(text);
        return res.status(200).json({ sentiment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
