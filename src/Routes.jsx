// Routes.jsx
import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import App from './App.jsx';
import QuemSouEu from './pages/QuemSouEu.jsx';

function Routes() {
  console.log('Routes component called'); // Adicione esta linha para depuração
  return (
    <ReactRoutes>
      <Route path="/" element={<App />} />
      <Route path="/quem-sou-eu" element={<QuemSouEu />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </ReactRoutes>
  );
}

export default Routes;
