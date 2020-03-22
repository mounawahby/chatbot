const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');
const actors = require('./src/routes/actors');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/Question', function(req, res){
    const actorName = req.body.question;
    const actor = actors.find(item => item.Name == actorName);
    console.info(actor);
    const movies = actor.Movies;
    res.send("Reponse du serveur " + movies[0]);
});

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green('3000')}`);
});