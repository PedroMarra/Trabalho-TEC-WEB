let estadoLivros = JSON.parse(localStorage.getItem('biblioteca_db')) || [];

const formLivro = document.getElementById('form-livro');
const msgStatus = document.getElementById('msg-status');
const gridLivros = document.getElementById('grid-livros');

if (formLivro) {
    formLivro.addEventListener('submit', (event) => {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value.trim();
        const autor = document.getElementById('autor').value.trim();
        const ano = document.getElementById('ano').value;

        if (!titulo || !autor || !ano) {
            exibirMensagem("Erro: Preencha todos os campos!", "erro");
            return;
        }

        if (ano < 1000 || ano > 2026) {
            exibirMensagem("Erro: Ano de publicação inválido!", "erro");
            return;
        }

        const novoLivro = {
            id: Date.now(),
            titulo,
            autor,
            ano
        };

        estadoLivros.push(novoLivro);
        localStorage.setItem('biblioteca_db', JSON.stringify(estadoLivros));

        exibirMensagem("Livro adicionado com sucesso!", "sucesso");
        formLivro.reset();
    });
}

if (gridLivros) {
    const renderizar = () => {
        gridLivros.innerHTML = '';

        if (estadoLivros.length === 0) {
            gridLivros.innerHTML = "<li><p>Nenhum livro no acervo.</p></li>";
            return;
        }

        estadoLivros.forEach(livro => {
            const li = document.createElement('li');
            li.innerHTML = `
                <article class="card-livro">
                    <h3>${livro.titulo}</h3>
                    <p><strong>Autor:</strong> ${livro.autor}</p>
                    <p><strong>Ano:</strong> ${livro.ano}</p>
                </article>
            `;
            gridLivros.appendChild(li);
        });
    };
    renderizar();
}

function exibirMensagem(texto, classe) {
    msgStatus.textContent = texto;
    msgStatus.className = classe;
    setTimeout(() => { msgStatus.textContent = ""; }, 3000);
}