import { useState } from 'react';

export default function Historico() {
  const [meusLivros] = useState([
    { id: 1, titulo: 'Clean Architecture', autor: 'Robert C. Martin', status: 'Lido' },
    { id: 2, titulo: 'O Programador Pragmático', autor: 'Andrew Hunt', status: 'Lendo' },
    { id: 3, titulo: 'Design Patterns', autor: 'Erich Gamma', status: 'Na Fila' }
  ]);

  return (
    <>
      <h1>Histórico de Leituras</h1>
      <section className="lista-historico">
        {meusLivros.length === 0 ? (
          <p className="mensagem-vazia">Nenhum livro cadastrado ainda.</p>
        ) : (
          <ul className="grid-historico">
            {meusLivros.map((livro) => (
              <li key={livro.id} className="card-historico">
                <article>
                  <h3>{livro.titulo}</h3>
                  <p>{livro.autor}</p>
                  <span>{livro.status}</span>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}