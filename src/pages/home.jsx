import { useState, useEffect } from 'react';

export default function Home() {
  const [destaques, setDestaques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLivrosGoogle = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=desenvolvimento+web&maxResults=4');
        const data = await response.json();
        
        setDestaques(data.items || []);
      } catch (error) {
        console.error('Erro ao conectar com a API do Google:', error);
        setDestaques([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLivrosGoogle();
  }, []);

  return (
    <section className="container-inicio">
      <h2>Destaques</h2>
      {loading ? (
        <p>Buscando livros...</p>
      ) : destaques.length > 0 ? (
        <div className="grid-destaques">
          {destaques.map((livro) => (
            <article key={livro.id} className="card-livro">
              {livro.volumeInfo?.imageLinks?.thumbnail && (
                <img src={livro.volumeInfo.imageLinks.thumbnail} alt={`Capa do livro ${livro.volumeInfo.title}`} />
              )}
              <h3>{livro.volumeInfo?.title}</h3>
              <p>{livro.volumeInfo?.authors?.join(', ') || 'Autor desconhecido'}</p>
            </article>
          ))}
        </div>
      ) : (
        <p>Nenhum destaque encontrado no momento.</p>
      )}
    </section>
  );
}