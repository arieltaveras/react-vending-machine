import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import NavBar from './NavBar';
import Soda from './Soda';

import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<VendingMachine/>} />
        <Route path="/soda" element={<Soda/>} />
        <Route path="/chips" element={<Chips/>} />
        <Route path="/sardines" element={<FreshSardines/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
