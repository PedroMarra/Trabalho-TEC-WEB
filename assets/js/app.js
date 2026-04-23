let estadoLivros = JSON.parse(localStorage.getItem('biblioteca_db')) || [];

const formLivro = document.getElementById('form-livro');
const msgStatus = document.getElementById('msg-status');
const gridLivros = document.getElementById('grid-livros');

// 1. LÓGICA DE CADASTRO E VALIDAÇÃO
if (formLivro) {
    formLivro.addEventListener('submit', (event) => {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value.trim();
        const autor = document.getElementById('autor').value.trim();
        const ano = document.getElementById('ano').value.trim();

        // Validação rigorosa
        if (!titulo || !autor || !ano) {
            exibirMensagem('Erro: Preencha todos os campos obrigatórios.', 'erro');
            return;
        }

        if (ano.length !== 4 || isNaN(ano) || Number(ano) < 1000 || Number(ano) > 2026) {
            exibirMensagem('Erro: Informe um ano válido com 4 dígitos.', 'erro');
            return;
        }

        // Lógica de salvamento (LocalStorage) 
        const novoLivro = {
            id: Date.now(),
            titulo,
            autor,
            ano
        };

        estadoLivros.push(novoLivro);
        localStorage.setItem('biblioteca_db', JSON.stringify(estadoLivros));

        exibirMensagem('Sucesso: Obra adicionada ao acervo!', 'sucesso');
        formLivro.reset();
        
        // Se estivermos na página de listagem, atualiza na hora
        if (gridLivros) {
            renderizar();
        }
    });
}

// 2. LÓGICA DE RENDERIZAÇÃO DA LISTA (HISTÓRICO)
const renderizar = () => {
    gridLivros.innerHTML = '';

    if (estadoLivros.length === 0) {
        gridLivros.innerHTML = '<li class="mensagem-vazia">Nenhum livro no acervo.</li>';
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

// Só chama o renderizar se o gridLivros existir na página atual 
if (gridLivros) {
    renderizar();
}

// 3. FUNÇÃO AUXILIAR DE MENSAGENS
function exibirMensagem(texto, classe) {
    if (!msgStatus) return; // Proteção extra
    
    msgStatus.textContent = texto;
    msgStatus.className = classe;
    setTimeout(() => { 
        msgStatus.textContent = ""; 
        msgStatus.className = "";
    }, 3000);
}