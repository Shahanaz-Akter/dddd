import React from 'react';
import { render } from 'react-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';


document.addEventListener('DOMContentLoaded', () => {

  const appElement = document.getElementById('app');
  if (appElement) {
    render(<Navbar />, appElement);

  } else {
    console.error('Target container not found');
  }

});
