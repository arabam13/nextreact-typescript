import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './chore/styles/index.css';
import './chore/styles/prose.css';

const root = document.getElementById('root') as HTMLDivElement;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
