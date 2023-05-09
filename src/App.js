import './App.css';
import React from 'react';
import PaginaBusca from './components/PaginaBusca';
import Resultado from './components/Resultado'
import Div100vh from 'react-div-100vh'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PaginaBusca />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

export default App;
