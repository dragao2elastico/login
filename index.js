const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

var login = 'admin';
var password = '123'

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

    if (req.body.password == password && req.body.login == login) {
        //Logado com sucesso!
        req.session.login = login;
        
        res.render('logado');
        console.log(`O meu usuário logado é: ${req.session.login}`);
    } else if (req.body.password == password && !req.body.login == login) {
        res.render('index')
        res.send('Nome incorreto!');
    } else if (!req.body.password == password && req.body.login == login) {
        res.render('index')
        res.send('Senha incorreta!');
    } else {
        
        res.render('index')
    }

    console.log(req.body.login);
    
})

app.get('/', (req, res) => {

    if (req.session.login) {
        res.render('logado')
    } else {
        res.render('index')
    }

})

app.listen(port, () => {
    console.log('Servidor Listado em: http://localhost:'+port)
})