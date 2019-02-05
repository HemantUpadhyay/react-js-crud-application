require('dotenv').config();
// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
// const config = require('./DB.js');
const businessRoute = require('./business.route');

const MongoDB_URI='mongodb://dbuser:welcome1234@ds143293.mlab.com:43293/reactproject_db';
mongoose.connect(MongoDB_URI, { useNewUrlParser: true }, function(err, client){
  if(err)
  {
     console.log('error occurred while connecting atlas....\n');
  }
  console.log('connected...');
  // console.log(client);
  //const db = client.db('NewsOnTap');
  //global.db = db;
});
mongoose.Promise = global.Promise;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});