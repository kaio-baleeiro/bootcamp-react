import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './assets/css/reset.css'
import './assets/css/style.css'
import HomePage from './components/HomePage';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
