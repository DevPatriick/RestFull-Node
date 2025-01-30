
// desestruturando e puxando o body
const { body, validationResult} = require('express-validator');
// const {  } = require('express-validator');

// neste array valido se o campo name esta vazio e se estiver exibe a mensagem no withMessage
// caso o email seja invalido aparece outra mensagem
// module.exports = [
//     body('name').notEmpty().withMessage('O nome é obrigatório'),
//     body('email').isEmail().withMessage('O e-mail está inválido')
// ]
    

module.exports = {
    user: (app)=>(
      [
      body('name').notEmpty().withMessage('O nome é obrigatório'),
      body('email').isEmail().withMessage('O e-mail está inválido'),
      
      (req, res, next)=>{

       // valida se tem erro na requisição
     const result = validationResult(req);

     // isEmpty verifica se o objeto esta vazio
     // 
     // Se não houver erros de validação, isEmpty() retorna true
     // err se retornar true troca para false e não executa a função
     // 
     // Se houver erros de validação, isEmpty() retorna false.
     // err se retornas false ele troca para true e executa a função

     // Por que usar ! aqui?
     // O código deseja verificar se há erros. Quando !err.isEmpty() é verdadeiro, 
     // significa que existem erros, e então o código entra na condição if, executando 
     // o bloco que envia o erro ao cliente.

    if(!result.isEmpty()){ // por padrão é true
      const { errors } = result
     return app.utils.error.send(errors, req, res);
    } 
    next();
  }])
    }

// res.status(400).json({ errors: errors.array() })




