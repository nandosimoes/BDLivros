# 📚 CRUD de Livros - Node.js + Express + MySQL

## 📖 Descrição

Este projeto é uma API REST de um CRUD (Create, Read, Update, Delete) de livros desenvolvida em JavaScript utilizando **Node.js**, **Express**, **Sequelize** e **MySQL**.

A aplicação permite:

* Criar livros
* Listar todos os livros
* Buscar um livro por ID
* Atualizar um livro
* Deletar um livro

O banco de dados é criado automaticamente através do Sequelize ao iniciar o servidor.

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* Dotenv
* Nodemon

## ⚙️ Instalação

1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-repo.git

2. Entre na pasta do projeto:
cd seu-repo

3. Instale as dependências:
npm install

## 🔐 Configuração do .env

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (assim como esrá no `.env.example`):

DB_HOST=localhost
DB_NAME=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
PORT=3000

## 🗄️ Banco de dados

* O Sequelize fará a conexão automaticamente.
* As tabelas serão criadas ao iniciar o servidor com:
 
sequelize.sync()
 
## ▶️ Como executar o projeto

npm start

O servidor será iniciado em:
http://localhost:3000
 
## 📡 Rotas da API

Base URL:
/api/books
 
### 📌 Criar livro

Exemplo:
POST /api/books
 
Body (JSON):

 {
    "title" : "Dom casmurro",
    "author" : "Machado de Assis",
    "year" : 1899,
    "genre" : "suspense",
    "cover": "https://imgs.search.brave.com/g6wO4x6JPuGAkoaiUnXSlW8g0Fl1dbVFn5FpFAFHv2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/ODQ4MjQtTUxVNzcy/MzM0MTcyOTBfMDcy/MDI0LU8ud2VicA",
    "rating" : 10
}

Cria um novo livro com as informações fornecidas

### 📌 Listar todos os livros

Exemplo:
GET /api/books

Retorna uma lista com todos os livros cadastrados no banco de dados.

### 📌 Buscar livro por ID

GET /api/books/:id

Exemplo:
GET /api/books/1

Retorna os dados do livro correspondente ao ID informado.

### 📌 Atualizar livro

PUT /api/books/:id

Exemplo:
PUT /api/books/1

Body (JSON):

{
  "title": "Dom Casmurro",
  "author": "Machado de Assis",
  "year": 1899,
  "genre": "Romance",
  "cover": "https://link-da-capa.com",
  "rating": 9
}

Atualiza os dados do livro correspondente ao ID informado.

### 📌 Deletar livro

DELETE /api/books/:id

Exemplo:
DELETE /api/books/1

Remove o livro correspondente ao ID informado do banco de dados.

## 🧪 Testando a API

As rotas podem ser testadas utilizando:

- Postman  
- Insomnia  

Utilize como base:

http://localhost:3000/api/books

Para requisições POST e PUT:
- Vá em **Body**
- Selecione **raw**
- Escolha **JSON**
- Envie o corpo da requisição

## 📦 Script disponível

npm start
Inicia o servidor utilizando o Nodemon.


Projeto desenvolvido para fins de estudo e prática de criação de APIs REST com Node.js, Express e Sequelize.

 
 
