// carreguei o modulo do expres 
const express = require('express');

// carregando o modulo do consign
const consign = require('consign');

// carregando o modulo do body-parser
// const bodyParser = require('body-parser')

// carregando o modulo do express-validator
// const expressValidator = require('express-validator');

// app recebe o express
const app = express();

// Pelo o que eu pesquisei o body parse já está inbutido no express, então eu posso fazer diferente 
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// faz com que o express consiga interpretar os dados enviados 
// extended: false diz que ele só aceita objetos simples ( array não são permitidos )
// app.use(bodyParser.urlencoded({extended: false}))

// todos os dados que receber via post eu posso acessar como um objeto
// exemplo console.log(req.body.name);
// app.use(bodyParser.json())

// chamo o consign e incluo a pasta routes no app
consign().include('utils').include('middlewares').include('routes').into(app);


// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
// coloquei dentro de variaveis para caso eu preciso trocar fica de maneira mais agil
// criei uma mensagem também para quando servidor rodar exibir no console

const port = 3000;
const addressIp = '127.0.0.1';

// listen recebe a posta e o endereço ip, depois executa uma função.
app.listen(port, addressIp, ()=>{
     app.utils.mensager.mesage(port, addressIp)
});