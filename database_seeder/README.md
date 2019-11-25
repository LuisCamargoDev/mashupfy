# Configuraçao o Seeder

### Configurar a conexao com o banco de dados MYSQL
        1) Acesse, em cada pasta(Companies, Products, Users), os devidos arquivos *.js
        2) Configure, de acordo com suas informaçoes locais, a conexao com o banco de dados:
            -   host, port, user, password, database(o nome precisa ser mashupfy)

### Executar o seeder

        1) As pastas << Companies, Products >> voce nao devera editar, basta executar os comandos na seguinte ordem:
            yarn companies
            yarn products

    	2) Antes de executar o comando para alimentar a tabela usuarios, voce deve acessar ao arquivo  
            << users_data.json >>
        e configurar as informaçoes de login que voce irá usar para acessar ao sistema. Somente após realizar isso, voce pode executar no terminal na pasta raiz 
            << database_seeder >> o seguinte comando: yarn users
             

## Observaçoes
    - Deve estar instalado o 'yarn'[https://yarnpkg.com/lang/en/docs/install/#mac-stable] de forma global
    - Deve estar instalado o mysql2
    - Deve ser criado o banco antes de executar qualquer instruçao deste documento.