import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { YMaps } from '@pbe/react-yandex-maps';

const YANDEX_MAPS_API_KEY = import.meta.env.VITE_YANDEX_MAPS_API_KEY || "0bccd4da-a4b4-4855-b246-316c5f545fca";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <YMaps query={{ apikey: YANDEX_MAPS_API_KEY }}>
      <App />
    </YMaps>
  </React.StrictMode>
);
