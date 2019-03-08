const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './views')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('form');
})

app.post('/result', function(req, res) {
    info = req.body;
    res.render('result', {infor: info});
})

app.listen(port, function() {

})