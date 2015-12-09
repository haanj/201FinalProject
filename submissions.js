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
  var allReviews ='';

  reviews.forEach(function (review){
    var id = review.id
    var img = review.img;
    var name = review.name;
    var usr = review.usr;
    var score = review.uvotes - review.dvotes;
    var comments = review.comments;
    var post = '';
    post = post.concat('<div id="post' + id + '">');
    post = post.concat('<img src="'+ img +'">');
    post = post.concat('<h3>' + name +'</h3>');
    post = post.concat('<p>Submitted by ' + usr + '</p>');
    post = post.concat('</div>');
    allReviews = allReviews.concat(post);

    allReviews += stringComments(review);
    console.log(allReviews);
  });

  $submit.html(allReviews);

}

function stringComments(review) {
  var post = '';
  var id = review.id;

  review.comments.forEach(function (comment){
    var usr = comment.usr;
    var msg = comment.msg;
    post += '<div class="comment">';
    post +=   '<h4>' + usr + ' says:</h4>';
    post +=   '<p>' + msg + '</p>';
    post += '</div>';
  })

  post += '<form action id="newComment' + id + '">';
  post +=   '<input type="text" name="userName" value="name">';
  post +=   '<input type="text" name="commentField">';
  post +=   '<input type="submit" value="Comment">';
  post += '</form>';
  return post;
}


function startUp() {
  getReviews();
}



$(document).ready(startUp);
