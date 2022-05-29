const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path');
const app = express();

app.use(session({secret: 'o8wc4fyn589ow3ny478f56w34g78'}))
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.post('/', (req, res) => {
    console.log(req.body.login);
    res.render('index');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('Servidor Listado em: http://localhost:'+port)
})