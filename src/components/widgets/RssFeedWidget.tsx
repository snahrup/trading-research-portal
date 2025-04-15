import React from 'react';
import { Rss } from 'lucide-react';

interface RssFeedWidgetProps {
  cryptoSymbol: string;
}

// Dummy data - replace with actual RSS feed fetching and parsing
const getFeedItems = (symbol: string) => {
  return [
    { id: 1, source: 'CoinDesk', title: `${symbol} Price Analysis: Potential Breakout Ahead?`, link: '#', timestamp: '2 hours ago' },
    { id: 2, source: 'Twitter @CryptoGuru', title: `Watching ${symbol} closely, volume picking up. #crypto #${symbol}`, link: '#', timestamp: '3 hours ago' },
    { id: 3, source: 'Reddit r/CryptoMarkets', title: `Discussion: What's your short-term prediction for ${symbol}?`, link: '#', timestamp: '5 hours ago' },
    { id: 4, source: 'CryptoNews', title: `Regulatory news impacting ${symbol} and other altcoins.`, link: '#', timestamp: '8 hours ago' },
    { id: 5, source: 'TradingView Blog', title: `Technical Setup for ${symbol}: Key Levels to Watch`, link: '#', timestamp: '1 day ago' },
  ];
};

const RssFeedWidget: React.FC<RssFeedWidgetProps> = ({ cryptoSymbol }) => {
  const feedItems = getFeedItems(cryptoSymbol);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Live Feed (News, Social)</h3>
        <Rss className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {feedItems.map((item) => (
          <div key={item.id} className="border-b border-gray-100 pb-3 last:border-b-0">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm font-medium">
              {item.title}
            </a>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">Source: {item.source}</span>
              <span className="text-xs text-gray-400">{item.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RssFeedWidget;
