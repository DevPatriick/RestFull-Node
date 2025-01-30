module.exports = {
    send: (err, req, res, code = 400)=>{
        console.log(`error: ${err}`);
        res.status(code).json({err})
    }
}

// criei esta função para tratar o erro 