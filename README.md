<div align="center">
  <h1>📚 MyBooks</h1>
  <p><em>Gestor de Leituras Pessoais com Arquitetura SPA e API REST Simulada</em></p>

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JSON_Server-323330?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server" />
</div>

<br>

## 📖 Sobre o Projeto

Projeto desenvolvido como requisito prático-avaliativo para o **6º semestre do curso de Ciência da Computação no Centro Universitário IESB**. 

O **MyBooks** é uma *Single Page Application (SPA)* focada no rastreamento e gestão de hábitos de leitura. A aplicação se destaca por adotar rigorosos padrões de desenvolvimento da indústria, como HTML 100% semântico, *Frontend Validation* em formulários controlados e persistência de dados local simulando um ambiente real de backend.

## ✨ Principais Funcionalidades

* 📊 **Dashboard Dinâmico (Início):** Painel de controle minimalista que cruza os dados do banco local em tempo real para exibir estatísticas globais (Total, Lendo, Lido, Na Fila).
* 📝 **Cadastro Controlado:** Formulário estruturado com semântica rigorosa (`<fieldset>`, `<legend>`, `<label>`). Inclui validação de dados via React antes do envio (POST).
* 🗂️ **Histórico Interativo:** Listagem dinâmica gerada a partir de requisições `GET` à API. Permite a exclusão de registros (DELETE) com confirmação de segurança nativa.
* 🎨 **UI/UX Premium:** Interface projetada em *Dark Mode*, priorizando uma estética *Quiet Luxury* e minimalista. Tipografia sofisticada (Montserrat) e design totalmente responsivo.

## 🛠️ Tecnologias e Arquitetura

* **Front-end:** React.js (inicializado via Vite para maior performance de *build*).
* **Estilização:** CSS3 puro, utilizando CSS Grid e Flexbox para layouts complexos.
* **Backend / Banco de Dados:** `json-server` (Simulação de API REST atuando na porta local 3000).
* **Fluxo de Trabalho:** Metodologia Ágil simulada via Git e GitHub, com fluxo de *branches* organizado (`main`, `develop`, `feature/*`, `fix/*`) e resolução de *Issues*.

---

## ⚙️ Como executar o projeto na sua máquina

> ⚠️ **Atenção Avaliador:** Como o projeto utiliza o `json-server` para persistir os dados fisicamente em um arquivo `db.json`, **é estritamente necessário executar dois terminais em paralelo** (um para a API e outro para a Interface).

Siga o passo a passo abaixo:

### 1. Clonar o repositório e instalar dependências
Abra o terminal na pasta desejada e execute:
```bash
git clone [https://github.com/PedroMarra/Trabalho-TEC-WEB.git)
cd Trabalho-TEC-WEB
npm install
npm run server --> Subir o backend falso
Abra outro terminal 
npm run dev --> Frontend
A aplicação estará disponível no navegador em http://localhost:5173

Equipe de Desenvolvimento:

Projeto construído em equipe, com divisão clara de responsabilidades e revisão de código via Pull Requests:

Pedro Luiz Braga — Liderança Técnica, Revisão de Arquitetura UI/UX e Integrações Finais.

Leonardo Lustosa — Configuração do JSON-Server, Formulários Controlados e Validação de Dados.

Eduardo — Estruturação Base, Roteamento e Componentização Inicial da Lista.