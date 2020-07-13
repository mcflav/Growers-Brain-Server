const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const greenhouse = require('./Controllers/greenhouse.js');
const products = require('./Controllers/products.js');


//const db = knex({
//  client: 'pg',
//  connection: {
//    connectionString : process.env.DATABASE_URL,
//    ssl:{
//      rejectUnauthorized: false
//    }
//  }
//});

const app = express();
app.use(bodyParser.json());
app.use(cors());
//How to create an Array in node.js (array of database users)


app.post('/greenhouse', (req, res) => {greenhouse.storeGreenhouse(req, res, db, bcrypt)})

app.post('/products', (req, res) => {products.storeProducts(req, res, db, bcrypt)})

app.post('/users', (req, res) => {users.storeUsers(req, res, db, bcrypt)})

app.listen(process.env.PORT || 3001, () =>{
    console.log(`app is running on port ${process.env.PORT}`);
})

