$submit = $('#subm');

$submit.html("Testytest");

var reviews = [];

// GET request to pull current reviews
function getReviews() {
    $.get('http://localhost:3000/reviews', function(data) {
      reviews = data;
      printReviews();
      });
}

// prints all the reviews on the page
function printReviews() {
  var i = 0;
  var allReviews ='';
  console.log(reviews);

  reviews.forEach(function (review){
    console.log(review.name);
    console.log(review);

    var img = review.img;
    var name = review.name;
    var usr = review.usr;
    var score = review.uvotes - review.dvotes;
    var comments = review.comments;
    var post = '';
    post = post.concat('<div id="post' + i++ + '">');
    post = post.concat('<img src="'+ img +'">');
    post = post.concat('<h3>' + name +'</h3>');
    post = post.concat('<p>Submitted by ' + usr + '</p>');
    post = post.concat('</div>');
    console.log(post);
    allReviews = allReviews.concat(post);

  });

  $submit.html(allReviews);

}

function startUp() {
  getReviews();
}

$(document).ready(startUp);
