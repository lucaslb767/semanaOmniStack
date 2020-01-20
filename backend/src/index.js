const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://lucas:$inDestroyer89@cluster0-y4eiw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
//métodos http: get , post , put, delete

//tipos de parametros:
//query params: request.query (filtros, ordenacao, paginacao, ...)
//route params: request.params (Identificar um recurso na alteracao ou na remocao)
//body params: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.use(routes)
app.listen(3333);