import { useState, useEffect } from 'react';

export default function Historico() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Busca os livros reais do seu JSON-Server ao abrir a página
  useEffect(() => {
    const carregarHistorico = async () => {
      try {
        const response = await fetch('http://localhost:3000/livros');
        const data = await response.json();
        setLivros(data);
      } catch (error) {
        console.error('Erro ao buscar o histórico do banco de dados:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarHistorico();
  }, []);

  // 2. Deleta o livro no JSON-Server e atualiza a tela
  const handleExcluir = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta leitura?')) return;

    try {
      await fetch(`http://localhost:3000/livros/${id}`, {
        method: 'DELETE',
      });
      
      // Atualiza a tela filtrando o livro que acabou de ser apagado
      setLivros(livros.filter((livro) => livro.id !== id));
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      alert('Não foi possível excluir o livro do servidor.');
    }
  };

  return (
    <section className="container-historico">
      <h2>Histórico de Leituras</h2>
      
      {loading ? (
        <p className="loading-text">Carregando seu histórico...</p>
      ) : livros.length > 0 ? (
        <div className="grid-historico">
          {livros.map((livro) => (
            <article key={livro.id} className="card-historico">
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>

              <div className="acoes-card">
                <span>{livro.status}</span>
                <button onClick={() => handleExcluir(livro.id)} className="btn-remover">
                  Excluir
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="mensagem-vazia">Você ainda não tem livros cadastrados no seu histórico.</p>
      )}
    </section>
  );
}