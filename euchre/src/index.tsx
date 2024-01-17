import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import GameComponent from './components/GameComponent';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GameComponent />
  </React.StrictMode>
);
