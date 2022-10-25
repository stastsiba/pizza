import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart.jsx';
import { Home } from './Pages/Home/Home';
import { increment, decrement } from './redux/slices/filterSlice';

export const searchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </searchContext.Provider>
    </div>
  );
}

export default App;
