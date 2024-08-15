const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
app.get('/', (request, response) => {
    response.send('Estoy aqui');
})

/*
{
    numero1: 1,
    numero2: 3
}
*/
app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado);
})

app.get('/noticias', (request, response) => {
    const noticia = {
        id: 1,
        texto: "atividades culturais no centro de seara",
        autor: "globo reporter"
    }
    response.send(noticia);
})

app.get('/noticias/seara', (request, response) => {
    response.send('<html><body><b>pagina de notícias de seara</b></body></html>');
})


app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})
