import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/products/products';
import { Profile } from './components/profile/profile';
import PrivateRoute from './hoc/PrivateRoute';

function App() {
  const isAuth = true;
  
  return (
   <>
    <Routes>
        <Route path='/laptops' element={<Products />} />
        <Route path='/profile' element={<PrivateRoute isAllowed={isAuth}> <Profile /> </PrivateRoute>} />
    </Routes>
   </>
  );
}

export default App;
