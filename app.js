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


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));


});

app.post('/Question', function (req, res) {
    const actorName = req.body.question;
    const actor = actors.find(item => item.Name == actorName);

    if (actor != null) {

        // 1er cas : il y a une correspondance
        console.info(actor);
        const movies = actor.Movies;
        var htmlList = 'Voici la filmographie de <span class=\'actorName\'>'+ actorName + '</span> :';
        htmlList +='<ul>';
        for (var i = 0; i < movies.length; i++) {

            htmlList += "<li> " + movies[i] + " </li>  ";
        }
        htmlList += '</ul>'
        res.send(htmlList);
    } else {
        // 2e cas : il y a une correspondance approchante
        const options = {
            keys: ['Name'],
            threshold: 0.3,
            length: 10
        };
        const fuse = new Fuse(actors, options);
        const searchResult = fuse.search(actorName);
        if (searchResult.length > 0) {
            console.log(searchResult);
            const firstResult = searchResult[0].item;
            res.send("Avez-vous voulu dire <span class='actorName'>" + firstResult.Name + "</span> ? <span class='choice oui badge badge-pill badge-success' data-actor='" + firstResult.Name + "'>oui</span> <span class='choice non badge badge-pill badge-light'>non</span>");
        }
       else if(actorName=="non") {

           // 3e cas : il n'y a aucune correspondance
           res.send("Je connais pas cet acteur!");
        }
         else {

            // 3e cas : il n'y a aucune correspondance
            res.send("Je n'ai pas compris votre question");
        }
    }
});

app.listen(3000, function () {
    console.log(`listening on port ${chalk.green('3000')}`);
});