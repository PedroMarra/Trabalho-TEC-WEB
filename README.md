# MyBooks — Projeto TECWEB
O MyBooks é a sua biblioteca virtual pessoal. É uma aplicação web rápida e simples onde você pode cadastrar, listar, buscar e remover seus livros favoritos.

O maior diferencial do projeto é que ele funciona 100% offline. Todos os seus livros ficam salvos diretamente na memória do seu navegador (LocalStorage), sem precisar de internet, criação de contas ou banco de dados!

Aplicação web de acervo literário desenvolvida com HTML, CSS e JavaScript puro, sem frameworks. Os dados são persistidos no localStorage do navegador.

---

## Como rodar

**Pré-requisito:** Node.js instalado.

```bash
# 1. Acesse a pasta da aplicação
cd mybooks

# 2. Instale as dependências (apenas o Vite, usado como servidor local)
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

Acesse no navegador: http://localhost:5173

/index.html Págna inicial com apresentação do projeto e chamada para ação

/cadastro.html	Formulário para registrar novos livros no acervo

/historico.html Listagem de livros salvos com filtro dinâmico e opção de exclusão


**Arquitetura:**

mybooks/
├── index.html          # Página Início
├── cadastro.html       # Página Cadastro
├── historico.html      # Página Meu Histórico
└── assets/
    ├── css/
    │   └── style.css   # Estilização global, variáveis e layout responsivo
    └── js/
        └── app.js      # Validação, renderização, filtro, remoção e localStorage

        Não há backend. Todo o estado da aplicação vive no localStorage do navegador sob a chave biblioteca_db, estruturado como um array de objetos JSON:


**Funcionalidades**

Arquitetura 100% semântica (projeto desenvolvido com zero uso da tag <div>).

Navegação fluida entre três páginas via menu de cabeçalho.

Formulário com validação rigorosa (campos vazios e verificação de ano com 4 dígitos).

Mensagens de feedback (sucesso/erro) temporárias na tela de cadastro.

Listagem dinâmica baseada em grid responsivo.

Filtro de busca em tempo real por título ou autor.

Remoção individual de livros do acervo.

Dados persistidos no navegador — sobrevivem a refresh (F5) e fechamento de aba.