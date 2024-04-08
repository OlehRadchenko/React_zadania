import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactForm from './ContactForm';
import Counter from './Counter';
import ProductList from './ProductList';
import TaskList from './TaskList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductList />
    <Counter/>
    <ContactForm/>
    <TaskList/>
  </React.StrictMode>
);