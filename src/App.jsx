import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Historico from './pages/Historico';

function App() {
  return (
    <BrowserRouter>
      {/* Cabeçalho Semântico com Navegação Acessível */}
      <header>
        <nav aria-label="Navegação principal">
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: '1rem', background: '#f0f0f0' }}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
            <li><Link to="/historico">Histórico</Link></li>
          </ul>
        </nav>
      </header>

      {/* Área onde as páginas serão renderizadas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;