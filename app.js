const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyParser = require('body-parser');
const Fuse = require('fuse.js');
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
    
    if (actor != null){
        console.info(actor);
        const movies = actor.Movies;
        res.send(movies);
    }else
    {
        const options = {
            keys: ['Name']
          };
        const fuse = new Fuse(actors, options);
        const searchResult = fuse.search(actorName);
        if(searchResult.length > 0){
            console.log(searchResult);
            const firstResult = searchResult[0].item;
            console.log(firstResult);
            console.log(firstResult.Name);
            result = "Avez-vous voulu dire " + firstResult.Name + "?";
        }
    }
    res.send("Je n'ai pas compris votre question");
   

});

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green('3000')}`);
});