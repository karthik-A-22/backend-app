const { SentimentIntensityAnalyzer } = require('vader-sentiment');

class SentimentAnalysisModel {
    constructor() {
        this.analyzer = new SentimentIntensityAnalyzer();
    }

    analyzeSentiment(text) {
        const sentimentScore = this.analyzer.polarity_scores(text);
        let sentiment;
        if (sentimentScore.compound >= 0.05) {
            sentiment = 'positive';
        } else if (sentimentScore.compound <= -0.05) {
            sentiment = 'negative';
        } else {
            sentiment = 'neutral';
        }
        return sentiment;
    }
}

module.exports = SentimentAnalysisModel;
