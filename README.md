# api-node-graphql
Criando uma API simples Node em JS com o GraphQL.  
  
## baixando e criando a imagem do mongodb utilizando o Docker
1) Para instalação do docker: https://www.docker.com/  
2) Verifica a versão do Docker instalado na máquina:  
    Help: docker --help  
    Mostrar só a versão: docker --version  
    Mostra todos os detalhes: docker version  
3) docker pull mongo  
    docker pull: comando utilizado para baixar a imagem do mongodb
4) docker rum --name mongodb -p 27017:27017 -d mongo  
    --name: Será o nome do container dentro do meu sistema  
    -p:  Será a porta para redirecionamento  
    27017:27017: É um exemplo de redirecionamento das portas. Toda vez que acessar a porta 27017 da ninha máquina, ele 
    redirecionará para a porta 27017 do mongodb que está instalado dentro desse container.  
    -d: mongo: Preciso informar qual imagem vou utilizar para criar esse container. Utilizamos a imagem que baixamos no 
    passo 3, mongo.  
5) Listar as imagens que estão ativas no momento: docker ps
    Comando utilizado para listar as imagens do docker e todos os detakhes da mesma.
6) Para testar o funcionamento do mongodb:
    6.1- Abre o navegador e digita: localhost: 27017
    6.2- Se tudo estiver bem, retornará algo do tipo: Its looks like you are trying to access MongoDB over HTTP on the native
    driver port.
7) Quando precisar reiniciar a máquina será necessário levantar o Docker novamente:
    7.1- Listar todas as imagens: docker ps -a
    7.2- docker start noma_da_imagem

## Robo 3T  
É um visualizador para dados do MongDB
Link: https://robomongo.org/download e escolhe a opção Robo 3T (formerly Robomongo)
Cadastrando um banco:
1) Clica em MongoDB Connections, em seguida em Create
    Em Type: Direct COnnection
    Em Name: O nome que você quizer (Coloquei MongoDB-Docker)
    Em Address: Localhost
    Em porta: 27017 (é a default, que utilizamos na criação do container)
2) Clica em Test pra testar a conexão
3) Clica em Save
4) De volta à janela do MongoDB Connections, escolhe a conesão criada e depois clica em Connect 
5) Observe que ainda não temos tabelas criadas, pois nossa API Node irá criá-las.
