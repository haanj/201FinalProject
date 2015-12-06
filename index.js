var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var counter = 0;

var db = {
  locations: [
    {
      id: counter++
      name: "Awesome cat scratcher!",
      usr: "catLady420",
      uvotes: 5,
      dvotes: 2
    }

  ]
}
