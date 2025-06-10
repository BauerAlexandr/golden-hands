import React, { useState } from 'react';

const WatchForm = ({ addWatch, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Название обязательно';
    if (!formData.description.trim()) newErrors.description = 'Описание обязательно';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Цена должна быть больше 0';
    if (!formData.category) newErrors.category = 'Выберите категорию';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    addWatch({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: categories.find(cat => cat.id === parseInt(formData.category)).name,
      image: formData.image || 'https://avatars.mds.yandex.net/i?id=fd3c7652c1d537c88f8efa009ba519ca_l-4548378-images-thumbs&n=13',
    });
    setFormData({ title: '', description: '', price: '', category: '', image: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="watch-form">
      <h2>Добавить часы</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <small className="error-message">{errors.title}</small>}
        </div>
        <div className="form-group">
          <label>Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? 'error' : ''}
          ></textarea>
          {errors.description && <small className="error-message">{errors.description}</small>}
        </div>
        <div className="form-group">
          <label>Цена (₽)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={errors.price ? 'error' : ''}
          />
          {errors.price && <small className="error-message">{errors.price}</small>}
        </div>
        <div className="form-group">
          <label>Категория</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Выберите категорию</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          {errors.category && <small className="error-message">{errors.category}</small>}
        </div>
        <div className="form-group">
          <label>URL изображения (опционально)</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">Добавить</button>
      </form>
    </div>
  );
};

export default WatchForm;