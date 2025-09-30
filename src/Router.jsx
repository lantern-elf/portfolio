import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/home';
import Artworks from './pages/artworks';
import NotFound from './pages/NotFound';

const RouterPage = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RouterPage;