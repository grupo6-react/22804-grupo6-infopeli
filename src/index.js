import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router';
import { TmdbApiContextProvider } from './contexts/TmdbApiContext';

import './firebaseConfig';

import { UserProvider } from './UserProvider';
import {FavcontextProvider} from './contexts/favContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <FavcontextProvider>
    <TmdbApiContextProvider>
      <Router />
    </TmdbApiContextProvider>
    </FavcontextProvider>
    </UserProvider>
  </React.StrictMode>
);
