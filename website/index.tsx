import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HumancodePage } from './components/HumancodePage';
import { ComicPage } from './components/ComicPage';
import { COMICS } from './data/comics';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Minimal path-based routing (no router dependency).
const path = window.location.pathname.replace(/\/+$/, '');

const comic = COMICS.find((c) => `/${c.slug}` === path);
const Root: React.FC = comic
  ? () => <ComicPage comic={comic} />
  : path === '/humancode'
    ? HumancodePage
    : App;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
