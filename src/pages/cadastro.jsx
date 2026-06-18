import { useState } from 'react';

export default function Cadastro() {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    status: 'Na Fila'
  });
  
  // Novos estados para feedback na tela
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro({ ...livro, [name]: value });
    // Limpa os alertas ao começar a digitar novamente
    setMensagemErro('');
    setMensagemSucesso('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setMensagemErro('');
    setMensagemSucesso('');

    // --- VALIDAÇÃO CUSTOMIZADA DO REACT ---
    if (livro.titulo.trim().length < 3) {
      setMensagemErro('O título do livro deve ter pelo menos 3 caracteres.');
      return; // Para a execução aqui, não envia pro banco
    }

    if (livro.autor.trim().length < 3) {
      setMensagemErro('O nome do autor deve ter pelo menos 3 caracteres.');
      return;
    }
    // -------------------------------------

    try {
      await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: crypto.randomUUID(), 
          ...livro
        })
      });

      setLivro({ titulo: '', autor: '', status: 'Na Fila' });
      setMensagemSucesso('Livro adicionado ao seu histórico com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      setMensagemErro('Erro ao conectar com o servidor. Verifique o JSON-Server.');
    }
  };

  return (
    <section className="container-cadastro">
      <h2>Cadastrar Novo Livro</h2>
      
      {/* Exibição Semântica das Mensagens */}
      {mensagemErro && <p className="alerta-erro" role="alert">{mensagemErro}</p>}
      {mensagemSucesso && <p className="alerta-sucesso" role="status">{mensagemSucesso}</p>}

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