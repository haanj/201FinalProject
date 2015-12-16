

var bodyParser = require('body-parser');

var express = require('express');
var app = express();
app.use(bodyParser.json());

/*
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
*/

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

  ],
  profileArray: [
        {
          name:'joshua'
        },
        {
          name:'justin'
        },
        {
          name:'michael'
        },
        {
          name:'phil'
        }

  ]
};

app.get("/reviews", function (req, res){
  res.json(db.reviews);
})

app.get("/profiles", function (req, res) {
  res.json(db.profileArray);
})

app.post("/reviews", function (req, res) {
  console.log("new post bitch");
  var newReview = req.body;
  var submitter = newReview[0];
  var img = newReview[1];
  var name = newReview[2];

  db.reviews.push({id: db.reviews.length, img: img, usr: submitter, name: name, uvotes: 1, dvotes: 0, comments: []});
  console.log(db.reviews);
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
  })
  res.json({msg: "Upload successful!"});
})

app.post("/profiles", function (req, res){
  var newProfile = req.body;
  console.log(newProfile);
  db.profileArray = newProfile;
  console.log('array added');
})

app.listen(3000, function(){
  console.log("Wubba Lubba Dub Dub");
});
