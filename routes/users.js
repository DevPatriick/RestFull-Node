// esta função exporta a função que recebe o app como parametro e agora ao inves de ter
// o routes eu passo o app.get 
// com isso eu perco a função de deixar uma rota padrão no meu index.js
// como por exemplo /users

module.exports = (app)=> {

    // como não vou ter mais uma url padrão crie uma variavel para iniciar a rota
    // depois disso ela é concatenada com o restante da rota
    const routesUsers = '/users';
    // quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
    // agora ao inves de ter o app eu uso o routes
    app.get(routesUsers, (req, res) => {
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
    app.post(routesUsers, (req, res) => {
       
        res.json(req.body);
       
    })
};