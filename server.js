express = require('express');
hbs = require('hbs');
fs = require('fs');

app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
/*
app.use((req, res, next), function(){
	var now = new Date().toString();
	var log = '${now}: ${req.method}....${req.url}';
	console.log(log);
	fs.appendFile('server.log', log + '\n');
	next();
	});
*/
app.get('/about', function(req,res){
	res.render('about.hbs', {
		pageTitle:'about page',
		homeTitle:'home page',
		currentYear:new Date().getFullYear()
		});
});
app.get('/', function(req,res){
	res.render('home.hbs', {
		homeTitle:'home page',
		currentYear:new Date().getFullYear()
		});
});
/*
app.get('/about', function(req,res){
	res.render('about.hbs');
	});
*/
app.listen(3000, function(){
	console.log('listening on port 3000...');
	});

