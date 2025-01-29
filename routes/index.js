// esta função exporta a função que recebe o app como parametro e agora ao inves de ter
// o routes eu passo o app.get 
// com isso eu perco a função de deixar uma rota padrão no meu index.js

module.exports = (app)=>{
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
};