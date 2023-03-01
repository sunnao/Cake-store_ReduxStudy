import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Admin from "./pages/Admin/Admin"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/order/:menu" element={<Order />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
