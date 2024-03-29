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

**Criando banco no container do mongo**  
1) Entrando no container: **docker exec -it id_do_container bash**  
    * Para não precisar digitar todo o ID, é possível digitar apenas os 4 primeiros dígitos do ID.  
2) Observe que o terminal mudará para **#**  
3) Entrando no shell do mongo: **mongo**  
	3.1- Observe que o cursor mudará para: **>**  
	3.2- Mostrar os bancos existentes: **show dbs**  
	3.2.1- Resultado:  
	```	
        > show dbs  
			admin  0.000GB  
			config 0.000GB  
			local  0.000GB  
		>  
    ```
	3.3- Para criar o banco de dados: **use NOME_DO BANCO**  
		Ex.: **use mongo-teste** ou **use cursoMongoDb** ou **teste**, etc...  
	3.4- Para identificar em qual banco de dados está trabalhando: **db**  
	3.5- Limpando os códigos digitados: **cls**  
	3.6- Para sair do shell do mongo: **exit**  
4) Saindo do shell do container: **exit**  

## Robo 3T  
É um visualizador para dados do MongDB  
**Instalação**  
1) Link: https://robomongo.org/download e escolhe a opção **Robo 3T: the hobbyist GUI**  
2) Depois de fazer o download, descompacte o pacote e mova a pasta para o local que preferir  
3) Abra a pasta, por exemplo: **cd home/user/Downloads/robo3t-1.3.1-linux-x86_64-7419c406/bin**  
4) Executa o **robo3t**  
  
**Conectando o Robo 3T ao Mongo**  
1) Abra o **Robo 3T**  
2) Clique em clica em **File**, depois em **Connect...** ou Clique em **MongoDB Connections**, em seguida em **Create**  
    2.1- Em Type: **Direct Connection**  
    2.2- Em Name: O nome que você quizer, Ex.: **MongoDB-Docker**  
    2.3- Em Address: **Localhost**  
    1.4- Em porta: **27017** (é a default, que utilizamos na criação do container)  
3) Clique em **Test** pra testar a conexão  
4) Clique em **Save**  
5) De volta à janela do **MongoDB Connections**, escolha a conexão criada e depois clique em **Connect** 
6) Observe que ainda não temos tabelas criadas, pois nossa **API GraphQL** e irá criá-las.  
