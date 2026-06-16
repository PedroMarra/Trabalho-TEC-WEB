import { useState, useEffect } from 'react';

export default function Home() {
  const [destaques, setDestaques] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestaques = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=tecnologia+programação&maxResults=4');
        const data = await response.json();
        setDestaques(data.items || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestaques();
  }, []);

  return (
    <>
      <h1>Destaques</h1>
      {loading ? (
        <p className="loading-text">Buscando livros...</p>
      ) : (
        <section className="grid-destaques">
          {destaques.map((livro) => {
            const info = livro.volumeInfo;
            return (
              <article key={livro.id} className="card-livro">
                <img 
                  src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=Sem+Capa'} 
                  alt={info.title} 
                />
                <section className="info-livro">
                  <h3>{info.title}</h3>
                  <p>{info.authors ? info.authors.join(', ') : 'Autor desconhecido'}</p>
                </section>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
}