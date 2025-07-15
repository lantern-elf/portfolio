import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './router';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <RouterPage /> 
    </BrowserRouter>
  );
};

export default App;
