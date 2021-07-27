# Smart Games Frontend

## Projeto para a loja de jogos Smart Games

### Linguagens e ferramentas utilizadas

* Linguagens e ferramentas utilizadas: NodeJS, Typescript
* Framework: Express
* ORM: Typeorm
* Banco de dados: MySql
* Express: Framework de construçãp da API
* Typeorm: ORM para o banco
* MySQL Workbench 8.0: IDE do MySQL ultilizada para criação do banco de dados

### Pré-requisitos necessários para rodar o projeto

```
- Instalar dependências do projeto -> $ yarn install

- Importar o Banco no MYSQL

- No arquivo ormconfig.json, altere os dados para o seu banco de dados local

- Type: (Caso o seu banco de dados não seja o Mysql, colocar o banco de dados que estiver utilizando)

- Criar o banco de dados no Workbench, executando o comando -> "create database smartgames;"

- Sincronizar o back com o banco criado as tabelas e relacionamentos $ yarn typeorm schema:sync

- Popular as tabelas do banco com os dados fornecidos pela arquivo sql -> imports\smartgames.sql
```

Após a instalação das depêndencias e a criação do banco de dados, basta iniciar a aplicação atraves da porta "3333" -> $ yarn dev

#### Rotas GET

* http://localhost:3333/games -> Listagem de Jogos
* http://localhost:3333/platforms -> Listagem de Plataformas
* http://localhost:3333/stores -> Listagem de Lojas
