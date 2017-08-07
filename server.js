var express = require('express'); //express required for handling webserver
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article_one = {
    title : 'Article-One',
    date : '01/08/2000',
    age : '17 yrs'
};

var article_two = {
    title : 'Article-Two',
    date : '14/06/1997',
    age : '20 yrs'
};

var article_three = {
    title : 'Article-One',
    date : '01/01/2001',
    age : '16 yrs'
};


function createTemplate(data){

var title = data.title;
var date = data.date;
var age = data.age;
var htmlTemplate = `

<html>
    <head>
        <title>${title}</title>
    </head>    
    <body>
        <h1>${tile}</h1>
        <p>
            This is ${title}
            Date: ${date}
        </p>
        <p>
            This is ${title}.
            Age : ${age}.
        </p>
    </body>
</html>
`;

return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res){
    res.send(createTemplate(article_one));
});

app.get('/article-two',function(req, res){
    res.send(createTemplate(article_two));
});

app.get('/article-three',function(req, res){
    res.send(createTemplate(article_three));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

/*

var express = require('express'); //express required for handling webserver
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
*/