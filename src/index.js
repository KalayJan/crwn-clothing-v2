import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< Updated upstream
=======

import App from './App';

import { UserProvider } from './contexts/user.contexts';
import { ProductsProvider } from './contexts/product.context';
>>>>>>> Stashed changes
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< Updated upstream
    <App />
=======
    <UserProvider>
     <ProductsProvider>
      <App />  
     </ProductsProvider>
    </UserProvider>
>>>>>>> Stashed changes
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
