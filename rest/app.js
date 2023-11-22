var express = require("express");
var app = express();
app.use(express.json({type: '*/*'}));//instrução necessária para ver o LOG do JSON que chega do frontend

const dadosDB = [
    {"id":1,"name":"Julio"},
    {"id":2,"name":"Miltin"},
    {"id":3,"name":"Igor"},
    {"id":4,"name":"Gabriel"},
    {"id":5,"name":"Noix"}
]

app.get("/url", (req, res, next) => {
    console.log("chegou no GET")
    res.set('Access-Control-Allow-Origin', '*');
    res.json(dadosDB)
})

app.put('/put/:id', (req, res) => {
    console.log("chegou no PUT", req);
    res.status(200).send('retorno do PUT');
})

app.post('/post', (req, res) => {
    console.log("chegou OBJETO no POST: ", req.body);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(["ENVIANDO UM JSON"])
})

app.delete('/delete/:id', (req, res) => {
    console.log("chegou no DELETE...");
    res.status(200).send('usando o DELETE para excluir...');
})

app.listen(9000, () => {
    console.log("Servidor rodando na porta 9000...")
})