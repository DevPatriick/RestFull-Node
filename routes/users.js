// esta função exporta a função que recebe o app como parametro e agora ao inves de ter
// o routes eu passo o app.get 
// com isso eu perco a função de deixar uma rota padrão no meu index.js
// como por exemplo /users

// chamando o nedb
let NeDB = require('nedb');

// criando o banco de dados
let db = new NeDB({
    filename: 'user.db',
    autoload: true
})

module.exports = (app)=> {

    // como não vou ter mais uma url padrão crie uma variavel para iniciar a rota
    // depois disso ela é concatenada com o restante da rota
    const routesUsers = '/users';
    // quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
    // agora ao inves de ter o app eu uso o routes
    app.get(routesUsers, (req, res) => {
        // usando o metodo find, passando um objeto vazio para ele listar todos os usuários
        // estou usando o trycatch par tratamento de erros, caso de certo o get
        // ele executa o try, buscando todos os usuários
        // se der erro ele me devolve um error
        db.find({}, (err, user)=>{
            try {
                res.status(200).json({user})
            } catch (error) {
                res.status(400).json(`Error: ${error}`)
            }
        })
       
    });

    // definindo uma rota para usuarios admin
    app.post(routesUsers, (req, res) => {

        // no meu db eu chamo o metodo insert para ele enviar os dados que estão vindo do body
        // faço também o tratamento dos erros, se err for true ele exibe o erro 
        // e o status 400 passando o json com o erro
        // caso o err for false ele da o status 200 'ok' e me mosta o user que foi incluido
        db.insert(req.body, (err, user)=>{
            if(err){
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                })
            } else {
                res.status(200).json(user)
            }
        })
       
    })
};