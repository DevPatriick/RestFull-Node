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
    res.end('ok');
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