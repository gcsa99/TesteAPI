# TesteAPI

Este projeto contém exemplos e práticas de testes em API utilizando JavaScript, Node.js, Express, SQLite, Jest e Supertest.

## Ferramentas Utilizadas

- **JavaScript (JS)**
- **Node.js**
- **Express**
- **SQLite**
- **Jest**
- **Supertest**

## Estrutura do Projeto

├── src
│   ├── controllers
│   │   ├── autoresController.js
│   │   ├── editorasController.js
│   │   └── livrosController.js
│   ├── db
│   │   ├── dbconfig.js
│   │   └── livraria.sqlite
│   ├── models
│   │   ├── autor.js
│   │   ├── editora.js
│   │   └── livro.js
│   ├── routes
│   │   ├── autoresRoutes.js
│   │   ├── editorasRoutes.js
│   │   ├── index.js
│   │   └── livrosRoutes.js
├── test
│   ├── models
│   │   └── editora.test.js
│   ├── routes
│   │   └── editorasRoutes.test.js
└── app.js

## Instalação

1. Clone o repositório:

   git clone https://github.com/gcsa99/TesteAPI.git

2. Navegue até o diretório do projeto:

   cd TesteAPI

3. Instale as dependências:

   npm install


## Execução

### Iniciar a aplicação

npm run dev

### Executar os testes

npm run test
