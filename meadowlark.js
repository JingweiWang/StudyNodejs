var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
});
app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune });
    // res.type('text/plain');
    // res.send('About Meadowlark Travel');
});

app.use((req, res) => {
    res.status(404);
    res.render('404');
    // res.type('text/plain');
    // res.send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
    // res.type('text/plain');
    // res.send('500 - Sever Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://127.0.0.1:' + app.get('port'));
});