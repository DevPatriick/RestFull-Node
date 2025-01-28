// Chamando o express
const express = require('express');
// routes recebe o express.Router() para as rotas
const routes = express.Router();


// quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
// agora ao inves de ter o app eu uso o routes
routes.get('/users', (req, res)=>{
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
            email: "andrade.patrickreis@gmail.com",
            admin: "Não"
        }]
    })
});

// definindo uma rota para usuarios admin
routes.get('/admin', (req, res)=>{
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
            name: "Patrick Admin",
            email: "andrade.admin@gmail.com",
            admin: "Sim"
        }]
    })
})

module.exports = routes;