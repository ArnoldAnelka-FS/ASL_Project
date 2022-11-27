const express = require('express')
const app = express()

// GET / HTTP/1.1
app.get('/', (request, response) => {
    response.send('Home Page!')
});

// GET /products/8719-small-red HTTP/1.1

app.get('/products/:productId-:productName', (request, response) => {
    response.send('GET Products:' + request.params.productId + request.params.productName)
})

// GET /products/8719 HTTP/1.1

app.get('/products/:productId', (request, response) => {
    response.send('GET Products:' + request.params.productId)
})

// GET /products/all HTTP/1.1
app.get('/products/:all', (request, response) => {
    response.send('GET Products: ' + request.params.all)
})

app.listen(3000)