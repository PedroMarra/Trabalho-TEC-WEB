import { useState, useEffect } from 'react';

export default function Home() {
  const [estatisticas, setEstatisticas] = useState({
    total: 0,
    lendo: 0,
    lido: 0,
    naFila: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const response = await fetch('http://localhost:3000/livros');
        const livros = await response.json();

        // Fazendo a matemática do Dashboard cruzando os dados do db.json
        const stats = {
          total: livros.length,
          lendo: livros.filter(livro => livro.status === 'Lendo').length,
          lido: livros.filter(livro => livro.status === 'Lido').length,
          naFila: livros.filter(livro => livro.status === 'Na Fila').length
        };

        setEstatisticas(stats);
      } catch (error) {
        console.error('Erro ao buscar dados do servidor:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  return (
    <section className="container-inicio">
      <h2>Meu Dashboard de Leituras</h2>

      {loading ? (
        <p className="loading-text">Carregando suas estatísticas...</p>
      ) : (
        <div className="grid-dashboard">
          <article className="card-estatistica total">
            <h3>Total de Livros</h3>
            <p>{estatisticas.total}</p>
          </article>

          <article className="card-estatistica lendo">
            <h3>Lendo Agora</h3>
            <p>{estatisticas.lendo}</p>
          </article>

          <article className="card-estatistica lido">
            <h3>Finalizados</h3>
            <p>{estatisticas.lido}</p>
          </article>

          <article className="card-estatistica na-fila">
            <h3>Na Fila</h3>
            <p>{estatisticas.naFila}</p>
          </article>
        </div>
      )}
    </section>
  );
}