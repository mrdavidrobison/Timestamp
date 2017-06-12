var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//create instance of express for app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());








app.listen(3000, function (){
  console.log('Working');
})