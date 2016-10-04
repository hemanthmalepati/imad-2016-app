var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' : {
    title: 'Article one | Hemanth Malepati', 
    heading: 'Article one',
    date: 'sep 5, 2016',
    content: ` 
        <p>
            This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.
        </p>
        <p>
            This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.
        </p>
        <p>
            This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.This is the cotent for my first article.
        </p>`
},
      'article-two' : {
        title: 'Article two | Hemanth Malepati', 
        heading: 'Article two',
        date: 'sep 10, 2016',
        content: ` 
            <p>
                This is the cotent for my second article.
            </p>`
},
    'article-three' : {
        title: 'Article three | Hemanth Malepati', 
        heading: 'Article three',
        date: 'sep 15, 2016',
        content: ` 
            <p>
                This is the cotent for my third article.
            </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" cotent="width=device-width, intial scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                 </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    //articleName ==  article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
