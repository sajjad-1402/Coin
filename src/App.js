import React from "react";
import { Landing } from "./components/home/Landing";
import './style/Normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OneCoine } from './components/home/paje-2/one-coin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path=':coin' element={<OneCoine />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;