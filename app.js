var express = require('express');
var chalk = require('chalk');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000, function(){
    console.log(`listening on port ${chalk.green('3000')}`);
});