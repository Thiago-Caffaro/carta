import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Carta from './pages/carta.jsx';
import Cards from './pages/cards.jsx';
import Canvas from './pages/canvas.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cartinha" element={<Carta />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
