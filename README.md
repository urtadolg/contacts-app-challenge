<h1 align="center">
    VExpenses Contacts Challenge
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/urtadolg/contacts-app-challenge?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/urtadolg/contacts-app-challenge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/urtadolg/contacts-app-challenge">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

---

### :rocket: Sobre o projeto

Trata-se de uma agenda de contatos (aplicativo web) para armazenamento de dados como nome, email, telefones e endereços. App desenvolvido na etapa de desafio técnico do processo seletivo para Desenvolvimento Front-end da VExpenses.

---

### :computer: Manual

#### Pré-requisitos

- É **necessário** possuir o **[Git][git]** instalado e configurado no computador
- Também é **preciso** ter um gerenciador de pacotes seja o **[NPM][npm]** ou **[Yarn][yarn]**.

#### Como executar

```bash
# Clone este repositório no local desejado:
$ git clone https://github.com/urtadolg/contacts-app-challenge

# Acesse a pasta do projeto no seu terminal/cmd:
$ cd contacts-app-challenge

# Instale as dependências:
$ yarn
# ou
$ npm install

# Inicie o servidor (json-server):
$ yarn server
# ou
$ npm run server

# Com o servidor em execução, abra outro terminal/cmd e inicie a aplicação:
$ yarn dev
# ou
$ npm run dev

# A aplicação será aberta na porta:5173 - acesse http://localhost:5173

```

---

### :space_invader: Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- <a href="https://vitejs.dev/">React (Vitejs)</a>
- <a href="https://www.typescriptlang.org/">Typescript</a>
- <a href="https://styled-components.com/">Styled-components</a>
- <a href="https://react-hook-form.com/">React-hook-form</a>
- <a href="https://github.com/jquense/yup">Yup</a>
- <a href="https://github.com/fkhadra/react-toastify#readme">React-toastify</a>
- <a href="https://github.com/reactjs/react-modal">React-modal</a>
- <a href="https://github.com/typicode/json-server">Json-server</a>

---

### :memo: Requisitos funcionais

 - [x] CRUD de contatos;
 - [x] Agrupamento dos contatos  (por categorias ou pelas iniciais do nome);
 - [x] Busca de contatos  (com filtros ou com autocomplete);
 - [x] Possibilidade de  registrar muitos endereços e telefones por contato;
 - [x] Feedbacks para o usuário  em ações realizadas, inclusive caso haja   erros no preenchimento;
 - [x] Responsividade  (agenda cabível tanto a desktop quanto a mobile).
 
 ---

[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/
