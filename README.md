# count-words
Desafio onde é consultado de uma api a ocorrência de palavras em um documento.

# BackEnd

Para inicializar o backend devemos primeiro baixar as dependências do projeto com o comando:
```
npm install
```

O back end pode ser inicializado, rodando o docker compose, através do comando:
```
docker-compose up ( utilize a flag -d, caso queira que o terminal rode em detached).
```

Esse comando deve iniciar o banco de dados mysql, assim como a api Node.

Para criar as tabelas do banco, execute o comando:

```
docker exec -it backend_netlex-test-app_1 npx sequelize db:migrate
```

Para popular a base com dados já padrão, execute o comando:

```
docker exec -it backend_netlex-test-app_1 npx sequelize db:seed:all
```

Depois de executar os comando vai ser possível acessar a api no endereço http://localhost:3086


# Front End

O front end foi desenvolvido em React.

Para executar, basta instalar as dependências utilizando o comando:
```
npm install
```

E inicializar o front através do comando:

```
npm start
```
