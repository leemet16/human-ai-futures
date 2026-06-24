import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HumancodePage } from './components/HumancodePage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Minimal path-based routing (no router dependency).
const path = window.location.pathname.replace(/\/+$/, '');
const Root = path === '/humancode' ? HumancodePage : App;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
