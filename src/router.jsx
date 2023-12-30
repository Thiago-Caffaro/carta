// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carta from './pages/carta.jsx';
import Cards from './pages/cards.jsx';
import Canvas from './pages/canvas.jsx';

const AppRouter = () => {
  return (
    <Router basename="/carta">
      <Routes>
        <Route path="/" element={<Carta />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
