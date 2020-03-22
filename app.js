const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/Question', function(req, res){
    res.send("Reponse du serveur " + req.body.question);
});

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green('3000')}`);
});