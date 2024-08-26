import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {QueryClient , QueryClientProvider} from "react-query";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

let queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider  client={queryClient}>
      <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>

);
reportWebVitals();
