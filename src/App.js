import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WatchList from './components/WatchList';
import WatchForm from './components/WatchForm';
import './styles.css';
import watch1 from './assets/images/watch1.jpg'
import watch2 from './assets/images/AB0162121C1S1.jpg'


const initialWatches = [
  {
    id: 1,
    title: 'Classic Gold Watch',
    description: 'Элегантные золотые часы с кожаным ремешком.',
    price: 15000,
    category: 'Классические',
    image: watch1,
  },
  {
    id: 2,
    title: 'Sport Chrono',
    description: 'Прочные спортивные часы с хронографом.',
    price: 20000,
    category: 'Спортивные',
    image: watch2,
  },
];

const categories = [
  { id: 1, name: 'Классические' },
  { id: 2, name: 'Спортивные' },
  { id: 3, name: 'Смарт-часы' },
];

const App = () => {
  const [watches, setWatches] = useState(initialWatches);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const addWatch = (watch) => {
    setWatches([...watches, watch]);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <main className="main-content">
          <WatchForm addWatch={addWatch} categories={categories} />
          <WatchList
            watches={watches}
            setWatches={setWatches}
            selectedCategory={selectedCategory}
            categories={categories}
          />
        </main>
      </div>
      <footer className="footer">
        <p>© 2025 GoldenHands. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default App;