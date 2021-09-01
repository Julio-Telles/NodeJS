const express = require('express')
const app = express()

var path = require('path')
app.set('views', path.join(__dirname, '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res)=>{
    res.render('index');
    })

app.get('/pagina2', (req, res)=>{
    res.render('pagina2');
    })

app.listen(3000, console.log('servidor rodando em localhost:3000'))
app.use(express.static('public'))