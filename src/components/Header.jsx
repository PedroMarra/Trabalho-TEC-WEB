import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="cabecalho-principal">
      <nav aria-label="Navegação principal">
        <div className="logo">MY<strong>BOOKS</strong></div>
        <ul className="menu-navegacao">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cadastro">Cadastro</Link></li>
          <li><Link to="/historico">Histórico</Link></li>
        </ul>
      </nav>
    </header>
  );
}