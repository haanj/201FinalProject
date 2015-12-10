var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
 next()
});

var counter = 3;

var db = {
  reviews: [
    {
      id: 0,
      img: 'mainimg/logo1.png',
      name: "Awesome cat scratcher!",
      usr: "catLady420",
      uvotes: 5,
      dvotes: 2,
      comments: [
        {
          id: 0,
          usr: "catscats!",
          msg: "This rocks! A++"
        },
        {
          id: 1,
          usr: "dogsdogs!",
          msg: "get a dog!"
        }
      ]
    },
    {
      id: 1,
      img: 'mainimg/logo1.png',
      name: "Dog food!",
      usr: "dogsRule",
      uvotes: 3,
      dvotes: 1,
      comments: [
        {
          id: 0,
          usr: "catscats!",
          msg: "This rocks! A++"
        },
        {
          id: 1,
          usr: "dogsdogs!",
          msg: "get a dog!"
        }
      ]
    },
    {
      id: 2,
      img: 'mainimg/logo1.png',
      name: "Holy water",
      usr: "Blah",
      uvotes: 10,
      dvotes: 1,
      comments: [
        {
          id: 0,
          usr: "catscats!",
          msg: "This rocks! A++"
        },
        {
          id: 1,
          usr: "dogsdogs!",
          msg: "get a dog!"
        }
      ]
    }

  ]
};

app.get("/reviews", function (req, res){
  res.json(db.reviews);
})

app.post("/reviews", function (req, res) {
  var newReviews = req.body;
  console.log(newReviews);
  db.reviews = newReviews;
  res.json({msg: "Upload successful!"});
})

app.post("/comments", function (req, res) {
  var thread = req.body[0];
  var user = req.body[1];
  var comment = req.body[2];

  //searches for thread with id = thread
  db.reviews.forEach(function (review){
    if (review.id === Number(thread)){
      review.comments.push({id: review.comments.length, usr: user, msg: comment});
      //console.log(review.comments);
    }
    console.log(db.reviews.comments);
  })
  res.json({msg: "Upload successful!"});
  console.log(user + " says: " + comment);
})

app.listen(3000, function(){
  console.log("Wubba Lubba Dub Dub");
});
