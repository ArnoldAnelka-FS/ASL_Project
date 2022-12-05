const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require('./routes/Products');
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')

app.get('/', (req, res) => {
    res.render("home", {name: 'Anelka World', 'users': [
        { name: 'Anelka Arnold', email: 'aaarnold100@gmail.com'},
        { name: 'Ashelsa Arnold', email: 'aixa116@gmail.com'},
        { name: 'Ernesto Arnold', email: 'eaj234@gmail.com'}
    ]})
})
 
app.use("/products", productRouter)

app.listen(3000)
