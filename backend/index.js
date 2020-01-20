const express = require('express')

const app = express()

app.use(express.json())
//métodos http: get , post , put, delete

//tipos de parametros:
//query params: request.query (filtros, ordenacao, paginacao, ...)
//route params: request.params (Identificar um recurso na alteracao ou na remocao)
//body params: request.body (Dados para criação ou alteração de um registro)
app.post('/users', (request, response)=> {
    console.log(request.body)
    return response.json({message: 'Heya Jovens'})
})

app.listen(3333);