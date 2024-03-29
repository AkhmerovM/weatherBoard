import ReactDom from 'react-dom/client';
import React from 'react';
import { App } from './App.tsx';
const root = document.getElementById('root');

if (!root) {
    throw new Error('root element not found');
}
const rootRender = ReactDom.createRoot(root);
rootRender.render(
    <App />
);
