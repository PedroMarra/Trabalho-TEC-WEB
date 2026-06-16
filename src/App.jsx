import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Historico from './pages/Historico';

import './assets/css/style.css'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;