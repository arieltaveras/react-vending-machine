import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
