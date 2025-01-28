// carreguei o modulo do expres 
const express = require('express');

// app recebe o express
const app = express();

// agora eu não preciso criar o servidor o express mesmo cria
// quando o navegador acessar a rota localhost:3000 vai fazer um get da informação
app.get('/',(req, res)=>{
      // aqui estou definindo status caso caia aqui 200 'ok'
      res.statusCode = 200
      // aqui estou informando qual tipo de conteudo o navegador vai receber
      // text/html diz que ele vai receber uma pagina htmpl
      res.setHeader('Content-Type', 'text/html')
      // aqui é o corpo da resposta que o navegador vai receber
      res.end('<h1>Olá</h1>')
});


// quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
app.get('/users', (req, res)=>{
      // aqui estou definindo status caso caia aqui 200 'ok'
      res.statusCode = 200
      // aqui estou dizendo que o tipo do conteudo recebi vai ser um json
      res.setHeader('Content-Type', 'application/json');
      // aqui estou recebendo meu json
      // com o express ao inves de usar o JSONstringify posso deixar res.json 
      // users é um array com as informações do meu usuário (id, name, email)
      res.json({
          users: [{
              id: 1,
              name: "Patrick",
              email: "andrade.patrickreis@gmail.com"
          }]
      })
});
   

// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
// coloquei dentro de variaveis para caso eu preciso trocar fica de maneira mais agil
// criei uma mensagem também para quando servidor rodar exibir no console

const port = 3000;
const adressIp = '127.0.0.1';

let mesage = `Servidor rodando na porta: ${port} no ip: ${adressIp}`

// listen recebe a posta e o endereço ip, depois executa uma função.
app.listen(port, adressIp, ()=>{
     console.log(mesage)
})