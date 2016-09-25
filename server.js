var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one':{
    title:' Article one|Piyush kant maav',
    heading:'Article one',
    date:'5 sep 2016',
    content:`
     <p>
        This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
    </p>
    <p>
        This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
    </p>
    <p>
        This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
    </p>
    `
},
'article-two':{
    title:' Article two|Piyush kant maav',
    heading:'Article two',
    date:'10 sep 2016',
    content:`
     <p>
        This is my first article. This is my second article.
        </p>`
   
},
'article-three':{
    title:' Article three|Piyush kant maav',
    heading:'Article three',
    date:'15 sep 2016',
    content:`
     <p>
        This is my first article. This is my three article.
        </p>`
        }
};
function createtemplate(data){
    var title= data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate=
    `
    <html>
<head>
    <title>${title}</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
 <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
     <div class="container">
    <div>
        <a href="/">Home</a>

    <div>
<hr/>
<h3>${heading}</h3>
<div>${date}</div>
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
var counter = 0;
app.get('/counter',function (req,res){
counter = counter +1;
res.send(counter.toString());
});
app.get('/:articleName',function(req, res){
    //articleName== article-one
   var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
}
);


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  
});
var names=[];
app.get('/submit-name/:name',function(req,res){
    var name = req.params.name;
    name.push(name);
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
