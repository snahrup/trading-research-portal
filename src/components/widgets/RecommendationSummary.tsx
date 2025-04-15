import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface RecommendationSummaryProps {
  cryptoSymbol: string;
}

// Dummy data - replace with actual analysis
const getRecommendation = (symbol: string) => {
  // Simple logic based on symbol for demo purposes
  const hash = symbol.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const recommendationType = hash % 3; // 0: Buy, 1: Sell, 2: Hold/Neutral

  switch (recommendationType) {
    case 0:
      return {
        signal: 'Strong Buy',
        confidence: 'High',
        rationale: `Positive sentiment and strong technical indicators suggest potential short-term upside for ${symbol}. Consider entry points on minor dips.`,
        icon: <TrendingUp className="h-8 w-8 text-green-500" />,
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        borderColor: 'border-green-200',
      };
    case 1:
      return {
        signal: 'Consider Sell',
        confidence: 'Medium',
        rationale: `Market volatility and recent downward trends for ${symbol} indicate potential risk. Consider taking profits or tightening stop-losses.`,
        icon: <TrendingDown className="h-8 w-8 text-red-500" />,
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
        borderColor: 'border-red-200',
      };
    default:
      return {
        signal: 'Neutral / Hold',
        confidence: 'Medium',
        rationale: `Current market conditions for ${symbol} appear mixed. Monitor closely for breakouts or breakdowns before committing to high-leverage trades.`,
        icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-700',
        borderColor: 'border-yellow-200',
      };
  }
};

const RecommendationSummary: React.FC<RecommendationSummaryProps> = ({ cryptoSymbol }) => {
  const recommendation = getRecommendation(cryptoSymbol);

  return (
    <div className={`border-l-4 ${recommendation.borderColor} ${recommendation.bgColor} p-4 rounded-md shadow-sm`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {recommendation.icon}
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${recommendation.textColor}`}>
            Trading Recommendation: {recommendation.signal} (Confidence: {recommendation.confidence})
          </h3>
          <p className="text-sm text-gray-600 mt-1">{recommendation.rationale}</p>
          <p className="text-xs text-gray-500 mt-2">
            Note: This is a simulated recommendation for high-leverage, short-term trading. Always conduct your own research and manage risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSummary;
