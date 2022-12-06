import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import { TmdbApiContextProvider } from './contexts/TmdbApiContext';

import './firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TmdbApiContextProvider>
      <Router />
    </TmdbApiContextProvider>
  </React.StrictMode>
);
