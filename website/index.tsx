import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HumancodePage } from './components/HumancodePage';
import { TokenHustlePage } from './components/TokenHustlePage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Minimal path-based routing (no router dependency).
const path = window.location.pathname.replace(/\/+$/, '');
const routes: Record<string, React.FC> = {
  '/humancode': HumancodePage,
  '/token-hustle': TokenHustlePage,
};
const Root = routes[path] ?? App;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
