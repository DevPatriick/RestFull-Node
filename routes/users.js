// esta função exporta a função que recebe o app como parametro e agora ao inves de ter
// o routes eu passo o app.get 
// com isso eu perco a função de deixar uma rota padrão no meu index.js
// como por exemplo /users

// chamando o nedb
let NeDB = require('nedb');

// chamando o express-validator
// const validatorUser = require('../middlewares/validationUsers');


// criando o banco de dados
let db = new NeDB({
    filename: 'user.db',
    autoload: true
})

module.exports = (app) => {

    // como não vou ter mais uma url padrão crie uma variavel para iniciar a rota
    const routesUsers = app.route('/users');
    // quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
    routesUsers.get((req, res) => {
        // usando o metodo find, passando um objeto vazio para ele listar todos os usuários
        // estou usando o trycatch par tratamento de erros, caso de certo o get
        // ele executa o try, buscando todos os usuários
        // se der erro ele me devolve um error
        db.find({}, (err, user) => {
            try {
                res.status(200).json({ user })
            } catch (error) {
                // dentro do app tem o utils dentro do utils eu acesso o error e dentro do error tem o send
                // criado para tratar o error
                app.utils.error.send(err, req, res)
            }
        })

    });

    // definindo uma rota para usuarios admin
    // passo o validatorUser para ver se os campos estão corretos
    routesUsers.post(app.middlewares.validationUsers.user(app), (req, res) => {
        // no meu db eu chamo o metodo insert para ele enviar os dados que estão vindo do body
        // faço também o tratamento dos erros, se err for true ele exibe o erro 
        // e o status 400 passando o json com o erro
        // caso o err for false ele da o status 200 'ok' e me mosta o user que foi incluido
        db.insert(req.body, (err, user) => {
            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json({ user })
            }
        })

    })


    // criando uma variavel para buscar apenas o user pelo id
    const routesUserId = app.route('/users/:id');

    // faço o get do routesUserId, usando agora o metodo findOne para listar apenas um usuário
    // agora eu digo para ele buscar na requisição o parametro id e passo ela para o _id
    // se der certo ele me retorna o usuario deste id
    routesUserId.get((req, res) => {

        db.findOne({ _id: req.params.id }, (err, user) => {
            try {
                res.status(200).json({ user })
            } catch (error) {
                app.utils.error.send(err, req, res)
            }
        })
    })


    // atualizando um usuário, recebo o id do user pela rota
    // o metodo agora é update
    // para no param o id e a requisição do body
    // para conseguir ver o json do id e dos dados do usuário
    // coloquei o object.assign para mesclar as informações
    routesUserId.put((req, res) => {
        if(!app.middlewares.validationUsers.user(app, req, res)) return false;
        db.update({ _id: req.params.id }, req.body, (err) => {
            try {
                res.status(200).json(Object.assign(req.params, req.body))
            } catch (error) {
                app.utils.error.send(err, req, res)
            }
        })
    })


    // removendo os usuários 
    routesUserId.delete((req, res)=>{
        db.remove({ _id: req.params.id }, err=>{
            try {
                res.status(200).json('Usuário Excluído com Sucesso')
            } catch (error) {
                app.utils.error.send(err, req, res)
            }
        })
    })
};