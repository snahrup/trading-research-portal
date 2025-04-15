import React from 'react';
import { MessageSquare, Twitter, Rss } from 'lucide-react'; // Using Rss for blogs

interface SentimentWidgetProps {
  cryptoSymbol: string;
}

// Dummy data - replace with actual API calls
const getSentimentData = (symbol: string) => {
  const hash = symbol.length; // Simple deterministic "randomness"
  return {
    overall: hash % 5 === 0 ? 'Negative' : (hash % 3 === 0 ? 'Positive' : 'Neutral'),
    redditScore: Math.floor(Math.random() * 100),
    twitterScore: Math.floor(Math.random() * 100),
    blogScore: Math.floor(Math.random() * 100),
  };
};

const SentimentWidget: React.FC<SentimentWidgetProps> = ({ cryptoSymbol }) => {
  const sentiment = getSentimentData(cryptoSymbol);

  const getScoreColor = (score: number) => {
    if (score > 70) return 'text-green-600';
    if (score < 40) return 'text-red-600';
    return 'text-yellow-600';
  };

  const getOverallColor = (overall: string) => {
    if (overall === 'Positive') return 'text-green-600 bg-green-100';
    if (overall === 'Negative') return 'text-red-600 bg-red-100';
    return 'text-yellow-600 bg-yellow-100';
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Market Sentiment</h3>
        <MessageSquare className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        <div className="text-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getOverallColor(sentiment.overall)}`}>
            Overall: {sentiment.overall}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor"> {/* Reddit Icon */}
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.874 14.194c-.44-.44-.99-.684-1.587-.684-.598 0-1.147.244-1.587.684-.44.44-.684.99-.684 1.587 0 .598.244 1.147.684 1.587.44.44.99.684 1.587.684.598 0 1.147-.244 1.587-.684.44-.44.684-.99.684-1.587 0-.598-.244-1.147-.684-1.587zm-10.29 0c-.44-.44-.99-.684-1.587-.684-.598 0-1.147.244-1.587.684-.44.44-.684.99-.684 1.587 0 .598.244 1.147.684 1.587.44.44.99.684 1.587.684.598 0 1.147-.244 1.587-.684.44-.44.684-.99.684-1.587 0-.598-.244-1.147-.684-1.587zm5.146-5.146c-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92 1.92-.86 1.92-1.92-.86-1.92-1.92-1.92zm-6.874 3.194c.44-.44.99-.684 1.587-.684h6.586c.598 0 1.147.244 1.587.684.44.44.684.99.684 1.587 0 .598-.244 1.147-.684 1.587-.44.44-.99.684-1.587.684h-6.586c-.598 0-1.147-.244-1.587-.684-.44-.44-.684-.99-.684-1.587 0-.598.244-1.147.684-1.587z"/>
            </svg>
            <span className="text-gray-600">Reddit Score:</span>
          </div>
          <span className={`font-semibold ${getScoreColor(sentiment.redditScore)}`}>{sentiment.redditScore}/100</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Twitter className="h-5 w-5 text-blue-400" />
            <span className="text-gray-600">Twitter Score:</span>
          </div>
          <span className={`font-semibold ${getScoreColor(sentiment.twitterScore)}`}>{sentiment.twitterScore}/100</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rss className="h-5 w-5 text-yellow-500" /> {/* Using Rss for Blogs */}
            <span className="text-gray-600">News/Blogs Score:</span>
          </div>
          <span className={`font-semibold ${getScoreColor(sentiment.blogScore)}`}>{sentiment.blogScore}/100</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentWidget;
