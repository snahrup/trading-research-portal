import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Dummy search function - replace with actual API call
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Simulate finding a crypto - in a real app, you'd validate against API results
      setSelectedCrypto(searchTerm.trim().toUpperCase());
    } else {
      setSelectedCrypto(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <main className="p-4 sm:p-6 lg:p-8">
        {selectedCrypto ? (
          <Dashboard cryptoSymbol={selectedCrypto} />
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-150px)]">
            <p className="text-xl text-gray-500">
              Please search for a cryptocurrency to view details. (e.g., BTC, ETH)
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
