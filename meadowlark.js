var express = require('express');
var fortune = require('./lib/fortune.js');
// var pageTestScript = require();

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.get('/', (req, res) => {
    res.render('home');
    // res.type('text/plain');
    // res.send('Meadowlark Travel');
});
app.get('/about', (req, res) => {
    res.render('about', {
        fortune: fortune.getFortune,
        pageTestScript: '/qa/tests-about.js'
    });
    // res.type('text/plain');
    // res.send('About Meadowlark Travel');
});
app.get('/tours/hood-river', (req, res) => {
    res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', (req, res) => {
    res.render('tours/request-group-rate');
});
app.get('/tours/oregon-coast', function(req, res){
	res.render('tours/oregon-coast');
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