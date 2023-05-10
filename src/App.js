import './App.css';
import PaginaBusca from './components/PaginaBusca';
import Resultado from './components/Resultado'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

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
