import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Illustration from './pages/Illustration';
import NotFound from './pages/NotFound';
import ConceptArt from './pages/ConceptArt';

const RouterPage = () => {
  return (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<ConceptArt />} />
        <Route path="/concept-art" element={<ConceptArt />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RouterPage;