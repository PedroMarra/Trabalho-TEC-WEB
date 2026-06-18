import { useState } from 'react';

export default function Cadastro() {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    status: 'Na Fila'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede a página de recarregar (Comportamento de SPA)

    try {
      await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: crypto.randomUUID(), // Gera um ID único automático
          ...livro
        })
      });

      // Limpa o formulário e avisa que deu certo
      setLivro({ titulo: '', autor: '', status: 'Na Fila' });
      alert('Livro salvo com sucesso no banco de dados!');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <section className="container-cadastro">
      <h2>Cadastrar Novo Livro</h2>
      <form onSubmit={handleSubmit} className="form-cadastro">
        <fieldset>
          <legend>Informações da Leitura</legend>

          <label htmlFor="titulo">Título do Livro:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
            placeholder="Ex: Clean Code"
            required
          />

          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
            placeholder="Ex: Robert C. Martin"
            required
          />

          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={livro.status}
            onChange={handleChange}
          >
            <option value="Na Fila">Na Fila</option>
            <option value="Lendo">Lendo</option>
            <option value="Lido">Lido</option>
          </select>
        </fieldset>

        <button type="submit" className="btn-salvar">Salvar no Histórico</button>
      </form>
    </section>
  );
}