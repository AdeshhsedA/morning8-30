const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongo = require('mongodb')
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://naveen:naveen123@cluster0.q67bz.mongodb.net/practice11?retryWrites=true&w=majority';
const client = new MongoClient(connectionString);

const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

// function ab(){
// }
// const ab = () => {
// }
// http://localhost:1000/

app.get('/', (req,res) => {
	var alpha = 'Raj Kumar';
	// console.log('Welcome to Home, our intro');
	// res.sendFile(__dirname + '/index.html');
	res.render('home.ejs', {Name:alpha});
})

app.post('/formsubmit', (req,res) => {
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	console.log(name+email+password);
	res.redirect('/');
})



// app.get('/Home', (req,res) => {
// 	console.log('Welcome to Home, our intro');
// })

// app.post('/Home', (req,res) => {
// 	console.log('Welcome to Home, our intro');
// })

app.get('/About', (req,res) => {
	// console.log('Welcome to About, we are a family');
	// res.sendFile(__dirname + '/about.html');
	res.render('about.ejs',{});
})

app.get('/Contact', (req,res) => {
	// console.log('Welcome to Contact');
	// res.sendFile(__dirname + '/contact.html');
})

app.listen(1000, () => {
	console.log('server started');
})