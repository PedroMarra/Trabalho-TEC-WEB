import { useState } from 'react';

export default function Historico() {
  const [meusLivros, setMeusLivros] = useState([
    { id: 1, titulo: 'Clean Architecture', autor: 'Robert C. Martin', status: 'Lido' },
    { id: 2, titulo: 'O Programador Pragmático', autor: 'Andrew Hunt', status: 'Lendo' },
    { id: 3, titulo: 'Design Patterns', autor: 'Erich Gamma', status: 'Na Fila' }
  ]);

  const removerLivro = (id) => {
    // Filtra o array retornando apenas os livros que tem o ID diferente do clicado
    const novaLista = meusLivros.filter(livro => livro.id !== id);
    setMeusLivros(novaLista);
  };

  return (
    <>
      <h1>Histórico de Leituras</h1>
      <section className="lista-historico">
        {meusLivros.length === 0 ? (
          <p className="mensagem-vazia">Nenhum livro no histórico.</p>
        ) : (
          <ul className="grid-historico">
            {meusLivros.map((livro) => (
              <li key={livro.id} className="card-historico">
                <article>
                  <h3>{livro.titulo}</h3>
                  <p>{livro.autor}</p>
                  <section className="acoes-card">
                    <span>{livro.status}</span>
                    <button 
                      onClick={() => removerLivro(livro.id)}
                      className="btn-remover"
                      aria-label={`Excluir livro ${livro.titulo}`}
                    >
                      Excluir
                    </button>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}