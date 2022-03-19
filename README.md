# api-node-graphql
Criando uma API simples Node em JS com o GraphQL e Mongo DB.  

## nodemon  
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade informando o local onde está o server, no caso está em **src**.
Criando o comando: **"dev": "nodemon src/server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script  

## mogoose  
**npm install mongoose**  
O mongoose é um ORM (Object Relacional Mapping) de bancos não relacionais.
O ORM vai encapsular a lógica das operações do banco de dados através do código. Sendo assim não será utilizada a linguagem do banco de dados e utilizará o JavaScript para realizar operações no banco.  
Ao executar a aplicação pela primeira vez ela vai criar o banco de dados que foi definido em **src/server.js** com o nome **graphqlnode** dado em:  
```
mongoose.connect("mongodb://localhost:27017/graphqlnode", {
    useNewUrlParser: true
});
```
  
## Baixando e criando a imagem do mongodb utilizando o Docker  
1) Para instalação do docker: https://www.docker.com/  
2) Verifica a versão do Docker instalado na máquina:  
    Help: **docker --help**  
    Mostrar só a versão: **docker --version**  
    Mostra todos os detalhes: **docker version**  
3) Baixando a imagem do MongoDB  
    Comando utilizado para baixar a imagem do mongo: **docker pull mongo**  
    Comando para ver a imagem baixada: **docker image ls**  
    *Observe que será listada uma com o nome: **mongo**  
    *Se der erro de permissão use: **sudo**  
4) Fazendo o redirecionamento da porta do mongo  
    Redirecionando para a porta específica: **docker run --name mongodb -p 27017:27017 -d mongo**  
    *Se der erro de permissão use: **sudo**  
    Explicando cada comando:  
    **--name:** Será o nome do container dentro do meu sistema  
    **-p:**  Será a porta para redirecionamento  
    **27017:27017:** É um exemplo de redirecionamento das portas. Toda vez que acessar a porta 27017 da ninha máquina, ele 
    redirecionará para a porta 27017 do mongodb que está instalado dentro desse container.  
    **-d mongo:** Preciso informar qual imagem vou utilizar para criar esse container. Utilizamos a imagem que baixamos no 
    passo 3, mongo.  
5) Listando os containers:
    5.1- Os que estão ativos no momento: **docker ps**  
    5.2- Todos os containers: **docker ps -a**  
7) Para testar o funcionamento do mongodb:  
    6.1- Abre o navegador e digita: **localhost:27017**  
    6.2- Se estiver tudo bem, será retornada uma mensagem de sucesso como esta, por exemplo: **Its looks like you are trying to access MongoDB over HTTP on the native driver port**  
8) Quando precisar reiniciar a máquina será necessário levantar o Docker novamente:  
    7.1- Listar todas as imagens: **docker ps -a**  
    7.2- **docker start mongo**  

## Robo 3T  
É um visualizador para dados do MongDB
**Instalação**
1) Link: https://robomongo.org/download e escolhe a opção Robo 3T (formerly Robomongo)
2) Depois de fazer o download acessa a pasta **/home/user/Downloads/robo3t-1.3.1-linux-x86_64-7419c406/bin**
3) Executa o **robo3t**

**Cadastrando um banco usando o Robo 3T**
1) Clica em MongoDB Connections, em seguida em Create
    Em Type: Direct Connection
    Em Name: O nome que você quizer (Coloquei MongoDB-Docker)
    Em Address: Localhost
    Em porta: 27017 (é a default, que utilizamos na criação do container)
2) Clica em Test pra testar a conexão
3) Clica em Save
4) De volta à janela do MongoDB Connections, escolhe a conesão criada e depois clica em Connect 
5) Observe que ainda não temos tabelas criadas, pois nossa API Node irá criá-las.
