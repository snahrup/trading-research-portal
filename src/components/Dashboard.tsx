import React from 'react';
import RecommendationSummary from './widgets/RecommendationSummary';
import ChartWidget from './widgets/ChartWidget';
import SentimentWidget from './widgets/SentimentWidget';
import RssFeedWidget from './widgets/RssFeedWidget';

interface DashboardProps {
  cryptoSymbol: string;
}

const Dashboard: React.FC<DashboardProps> = ({ cryptoSymbol }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{cryptoSymbol} Dashboard</h1>

      {/* Recommendation Summary - Placed prominently */}
      <RecommendationSummary cryptoSymbol={cryptoSymbol} />

      {/* Main Grid for Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Widget - Spanning 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ChartWidget cryptoSymbol={cryptoSymbol} />
        </div>

        {/* Sentiment Widget */}
        <div className="lg:col-span-1">
          <SentimentWidget cryptoSymbol={cryptoSymbol} />
        </div>

        {/* RSS Feed Widget - Spanning full width below */}
        <div className="lg:col-span-3">
          <RssFeedWidget cryptoSymbol={cryptoSymbol} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
