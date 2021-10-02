const express = require ('express');
const users = require ('./src/data/users.js');
const app = express();
const jwt = require('jsonwebtoken');
const indexRoutes = require('./src/routes/indexRoutes');

app.listen (3000 , () => console.log('Your app listening on port 3000'));

app.set('view engine' , 'ejs');



app.use('/' , indexRoutes);