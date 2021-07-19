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

var db;
var register;


// client.db('practice11').collection('register').insertOne
// client.db('practice11').collection('register').find
// client.db('practice11').collection('register').updateOne
// client.db('practice11').collection('register').deleteOne

MongoClient.connect(connectionString, {useUnifiedTopology: true}).then(client => {
	console.log('Connected to Database');
	db = client.db('practice11')
	register = db.collection('register')
})





// function ab(){
// }
// const ab = () => {
// }
// http://localhost:1000/

app.get('/', (req,res) => {

	register.find().toArray().then(function(succ){
		if (succ != null) 
		{
			res.render('home.ejs', {data:succ});
			console.log(succ)
			console.log('yes')			
		}else{
			console.log('Wrong');
		}
	}).catch(function(err){
		console.log('no');
	})


})

app.post('/formsubmit', (req,res) => {
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;

	register.insertOne({
		name:name,
		email:email,
		password:password
	}).then(function(succ){
		res.redirect('/');
		console.log('yes');
	}).catch(function(err){
		console.log('No');
	})

})

// app.get('/fetch', (req,res) => {
// 	// register.find().toArray().then(function(succ){
// 	// 	console.log(succ)
// 	// })

// 	register.findOne({
// 		email:'naveen@gmail.com',
// 		password:'12345'
// 	}).then(function(succ){
// 		if (succ != null) 
// 		{
// 			console.log(succ)
// 			console.log('yes')			
// 		}else{
// 			console.log('Wrong');
// 		}
// 	}).catch(function(err){
// 		console.log('no');
// 	})

// })




app.post('/edit', (req,res) => {
	var idd = new mongo.ObjectID(req.body.id);
	register.findOne({_id:idd}).then(function(succ){
		if (succ != null) 
		{
			res.render('edit.ejs', {data:succ});
		}
	}).catch(function(err){
		console.log('no');
	})
})
app.post('/update', (req,res) => {
	// 60ee61ab5389088b7b4bba77
	var idd = new mongo.ObjectID(req.body.id);
	register.updateOne({
		_id:idd
	},{
		$set: {
			name:req.body.name,
			email:req.body.email,
			password:req.body.password
		}
	}).then(function(suc){
		if (suc != null) {
			console.log(suc)
			res.redirect('/');
		}else{
			console.log('Wrong');
		}
	})
})



app.post('/delete', (req,res) => {
	var idd = new mongo.ObjectID(req.body.id);
	register.deleteOne({
		_id:idd
	}).then(function(succ){
		res.redirect('/');
		// console.log('yes');
	})
})



// app.get('/insert', (req,res) => {
// })


// app.get('/Home', (req,res) => {
// 	console.log('Welcome to Home, our intro');
// })

// app.post('/Home', (req,res) => {
// 	console.log('Welcome to Home, our intro');
// })

// app.get('/About', (req,res) => {
// 	// console.log('Welcome to About, we are a family');
// 	// res.sendFile(__dirname + '/about.html');
// 	res.render('about.ejs',{});
// })

// app.get('/Contact', (req,res) => {
// 	// console.log('Welcome to Contact');
// 	// res.sendFile(__dirname + '/contact.html');
// })

app.listen(1000, () => {
	console.log('server started');
})