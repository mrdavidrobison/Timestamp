var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//create instance of express for app
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//GET call to return JSON real and unix dates
app.get('/dateValues/:dateVal', function(req, res, next){

//gets request date
var dateVal = req.params.dateVal;

//Date format options
var dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

if (isNaN(dateVal)){
  var naturalDate = new Date(dateVal);
  naturalDate = naturalDate.toLocaleDateString("en-US", dateFormat);
  var unixDate = new Date(dateVal).getTime()/1000;
} else {
  var unixDate = dateVal;
  var naturalDate = new Date(dateVal * 1000);
  naturalDate = naturalDate.toLocaleDateString("en-US", dateFormat);
}

res.json({unix: unixDate, natural: naturalDate});
});






app.listen(3000, function (){
  console.log('Working');
})