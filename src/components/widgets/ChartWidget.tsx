import React from 'react';
import { BarChart } from 'lucide-react';

interface ChartWidgetProps {
  cryptoSymbol: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ cryptoSymbol }) => {
  // Placeholder for actual charting library integration
  // Using an image as a placeholder
  const placeholderChartUrl = `https://via.placeholder.com/800x400.png?text=${cryptoSymbol}+Price+Chart+(Placeholder)`;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Price Chart</h3>
        <BarChart className="h-5 w-5 text-gray-400" />
      </div>
      <div className="flex items-center justify-center bg-gray-50 rounded">
        {/* In a real app, replace this img with a Chart component (e.g., from Chart.js, Recharts) */}
        <img
          src={placeholderChartUrl}
          alt={`${cryptoSymbol} Price Chart Placeholder`}
          className="w-full h-auto object-contain max-h-96"
         />
         {/* <p className="text-gray-500 p-10">Charting Library Integration Needed Here</p> */}
      </div>
       <div className="mt-4 flex space-x-2 text-xs">
         <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">1H</button>
         <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">4H</button>
         <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">1D</button>
         <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">1W</button>
       </div>
    </div>
  );
};

export default ChartWidget;
