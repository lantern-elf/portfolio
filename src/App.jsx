import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './router';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
        <RouterPage />  
    </BrowserRouter>
  );
};

export default App;
