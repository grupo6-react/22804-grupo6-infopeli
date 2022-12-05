import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router';

import './firebaseConfig'

import { UserProvider } from './UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <Router />
    </UserProvider>
  </React.StrictMode>
);


