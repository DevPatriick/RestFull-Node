// carreguei o modulo do http 
const http = require('http');

// Criei o servidor
// server é a variavel que recebe a criação do meu servidor
// http.createServer criado meu servidor, como parametro eu recebo a 
// requisição que estou fazendo e o response a resposta do servidor
// nos consoles vejo a url que fiz a requisição e o motodo usado ( post, put, delete or get)
let server = http.createServer((req, res)=>{
    console.log('url:', req.url)
    console.log('url:', req.method)
    
    // neste switch estou analisando a url que foi acessada no navegador
    // caso seja apenas localhost:3000
    // aparece na tela o ola mundo
    switch (req.url){
        case '/':
            // aqui estou definindo status caso caia aqui 200 'ok'
            res.statusCode = 200
            // aqui estou informando qual tipo de conteudo o navegador vai receber
            // text/html diz que ele vai receber uma pagina htmpl
            res.setHeader('Content-Type', 'text/html')
            // aqui é o corpo da resposta que o navegador vai receber
            res.end('<h1>Olá</h1>')
            break;
        // neste caso se foi acessado localhost:3000/users vai receber o json 
        case '/users':
            // aqui estou definindo status caso caia aqui 200 'ok'
            res.statusCode = 200
            // aqui estou dizendo que o tipo do conteudo recebi vai ser um json
            res.setHeader('Content-Type', 'application/json');
            // aqui estou recebendo meu json
            // JSON.stringify converte o objeto em uma string no formato JSON
            // users é um array com as informações do meu usuário (id, name, email)
            res.end(JSON.stringify({
                users: [{
                    id: 1,
                    name: "Patrick",
                    email: "andrade.patrickreis@gmail.com"
                }]
            }))
            break;
    }
})

// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
// coloquei dentro de variaveis para caso eu preciso trocar fica de maneira mais agil
// criei uma mensagem também para quando servidor rodar exibir no console

const port = 3000;
const adressIp = '127.0.0.1';

let mesage = `Servidor rodando na porta: ${port} no ip: ${adressIp}`

// listen recebe a posta e o endereço ip, depois executa uma função.
server.listen(port, adressIp, ()=>{
     console.log(mesage)
})