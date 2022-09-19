import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ProductsContext} from './context/ProductsContext';
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);

  const getLaptops = async () => {
    const { data: laptops } = await axios.get("http://localhost:3001/laptops");
    return laptops;
  };

    return (
<BrowserRouter>
  <ProductsContext.Provider value={{
    data,
    setData,
    getLaptops
  }}>
    <App />
  </ProductsContext.Provider>  
</BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);

