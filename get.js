const http = require("htpp")
const porta = 3000 ;

const server = http.creatServer((req,res)=>{
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá Mundo\n');
})
server.listen(porta,() => {
    console.log('Servidor rodando em http://localhost:S{porta}/');
})
