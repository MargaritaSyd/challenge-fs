const express = require ('express');
const users = require ('./src/data/users');
const app = express();
const jwt = require('jsonwebtoken');
const indexRoutes = require('./src/routes/indexRoutes');
const session = require('express-session');
const path = require ('path');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine' , 'ejs');

app.use(session({
	secret: "It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(express.static(path.resolve(__dirname , './public')));

app.listen (3000 , () => console.log('Your app listening on port 3000'));
app.use('/' , indexRoutes);