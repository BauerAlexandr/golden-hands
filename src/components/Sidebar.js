import React from 'react';

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="sidebar">
      <h3>Категории</h3>
      <ul className="category-list">
        <li className={!selectedCategory ? 'selected' : ''}>
          <span onClick={() => setSelectedCategory(0)}>Все категории</span>
        </li>
        {categories.map(category => (
          <li key={category.id} className={selectedCategory === category.id ? 'selected' : ''}>
            <span onClick={() => setSelectedCategory(category.id)}>{category.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;