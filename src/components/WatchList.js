import React, { useState } from 'react';
import WatchCard from './WatchCard';

const WatchList = ({ watches, setWatches, selectedCategory, categories }) => {
  const [sortOption, setSortOption] = useState('title');

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    const sortedWatches = [...watches].sort((a, b) => {
      if (sortValue === 'title') return a.title.localeCompare(b.title);
      if (sortValue === '-title') return b.title.localeCompare(a.title);
      if (sortValue === 'price') return a.price - b.price;
      if (sortValue === '-price') return b.price - a.price;
      return 0;
    });
    setWatches(sortedWatches);
  };

  const filteredWatches = selectedCategory
    ? watches.filter(watch => watch.category === categories.find(cat => cat.id === selectedCategory)?.name)
    : watches;

  return (
    <div className="watch-list">
      <div className="filter-form">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="title">По названию (А-Я)</option>
          <option value="-title">По названию (Я-А)</option>
          <option value="price">По цене (возрастание)</option>
          <option value="-price">По цене (убывание)</option>
        </select>
      </div>
      <div className="watches-grid">
        {filteredWatches.length > 0 ? (
          filteredWatches.map(watch => (
            <WatchCard key={watch.id} watch={watch} />
          ))
        ) : (
          <p className="empty-message">Часы не найдены.</p>
        )}
      </div>
    </div>
  );
};

export default WatchList;