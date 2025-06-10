import React from 'react';

const WatchCard = ({ watch }) => {
  return (
    <div className="watch-card" key={watch.id}>
      {watch.image && (
        <div className="watch-image-container">
          <img src={watch.image} alt={watch.title} className="watch-image" />
        </div>
      )}
      <h3>{watch.title}</h3>
      <p className="watch-description">{watch.description.slice(0, 100)}...</p>
      <p className="watch-category">Категория: {watch.category}</p>
      <p className="watch-price">{watch.price} ₽</p>
    </div>
  );
};

export default WatchCard;