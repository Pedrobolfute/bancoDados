# BANCO DE DADOS COM JAVA SCRIPT

Teste de integração do nodejs com mysql.

Primeiro criei um banco de dados sql com o DBeaver, e pensei em integrar JavaScript nele.
Então achei um [post](https://www.luiztools.com.br/post/como-usar-nodejs-mysql/) de integração, nodeJs com Mysql.

## PŔE-REQUISITOS

Node e NPM

- Baixar node, de preferência a versão mais atual.
  - https://nodejs.org/en/download

- Verificar se o Node foi instalado, junto com o NPM.
  - > node -v
  - > npm -v

- Instalar o mysql usando o próprio npm.
  - > npm install mysql2

Criar um banco de dados (eu usei o DBeaver)

- Baixar Dbeaver
  - https://dbeaver.io/download/
- Configurar DBeaver
  1. Criar uma nova conexão
  2. Conexão do tipo Mysql
  3. Baixar dependências da conexão, se pedir

![Dbeaver](./img/conex%C3%A3oDBeaver.gif)

Criando tabela e inserindo pelo proprio sql na tabela.

- > USE bancoDeDadosCriado;
- > CREATE TABLE familia(nome VARCHAR(50), tipo varchar(25))
- > INSERT INTO familia VALUES('pedro', salomé)
- > SELECT * FROM TABLE familia

## JavaScript

- Funções para Conectar ao banco; Ver e Inserir na tabela, arquivo: [db.js](./db.js)

- Insirir, dinamicamente por Js: [index.js](./index.js)