import React from 'react';
import 'tailwindcss/tailwind.css';
import App from './App';
import { createRoot } from 'react-dom/client'; // Importe de 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o Router do React Router;

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolve seu aplicativo com o Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
