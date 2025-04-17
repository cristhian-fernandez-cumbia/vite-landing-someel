import './App.css'
import Agendar from './pages/Agendar';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendar" element={<Agendar />} />
    </Routes>
  )
}

export default App
