## Configuraçao de Ambiente

### 1 - Installing NodeJS and yarn

        1) Primeiro baixe o [node](https://nodejs.org/en/download/) e instale na sua maquina
        2) Em seguida, digite o seguinte comando no terminal, dentro da pasta raiz do projeto: brew install yarn

### 2 - Pre-config Enviroment
		1) Na raiz do projeto da pasta(backend) rode o seguinte comando: yarn
		obs: Tendo ele ja instalado

### 3 - Installing Sequelize

    	1) Na pasta raiz do projeto rode o comando:yarn add sequelize

### 4 - Installing Mysql

    	1) Na pasta raiz do projeto rode o comando: yarn add mysql2

### 5 - Creating Database Tabels

    	1) No arquivo src/config/database.js, configure a conexao com seu banco de dados (Mysql)
    	2) Em seguida, dentro da pasta raiz(backend) rode o seguinte comando: yarn sequelize db:migrate

## Steps to run the server

    	1) Na pasta da raiz do projeto(backend), digite o seguinte comando: yarn dev
