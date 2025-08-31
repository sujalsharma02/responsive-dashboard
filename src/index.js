import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice '.client' here
import App from './App';

// 1. Get the root DOM element
const rootElement = document.getElementById('root');

// 2. Create a root.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);