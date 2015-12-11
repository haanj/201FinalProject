$submit = $('#subm');

$submit.html("Testytest");

var reviews = [];

// GET request to pull current reviews
function getReviews() {
    $.get('http://localhost:3000/reviews', function(data) {
      reviews = data;
      console.log(reviews);
      printReviews();
      });
}

// POST reviews to server
function postReviews() {
    $.ajax({
      url: 'http://localhost:3000/reviews',
      type: "POST",
      data: JSON.stringify(reviews),
      processData: false,
      contentType: "application/json; charset=UTF-8",
      complete: function() {
        console.log('done');
        getReviews();
      }
    });
}

// prints all the reviews on the page
function printReviews() {
  var allReviews ='';

  // loops through and prints all reviews from array
  reviews.forEach(function (review){
    var id = review.id
    var img = review.img;
    var name = review.name;
    var usr = review.usr;
    var score = review.uvotes - review.dvotes;
    var comments = review.comments;
    var post = '';
    post = post.concat('<div class="reviewPost" id="post' + id + '">');
    post = post.concat('<img src="'+ img +'">');
    post = post.concat('<h3>' + name +'</h3>');
    post = post.concat('<p>Submitted by ' + usr + '</p>');
    post = post.concat('</div>');
    allReviews = allReviews.concat(post);

    // calls function to add comments
    allReviews += stringComments(review);
  });

  $submit.html(allReviews);

  // adds event listener to add comments
  $newComment = $('.newComment');
  $newComment.submit(function (event){
    event.preventDefault();
    console.log(event.target.userName.value + ": " + event.target.commentField.value);
    console.log(event.target.name);

    // Gets necessary information from fields to add new comment
    var newName = event.target.userName.value;
    var newComment = event.target.commentField.value;
    var newId = Number(event.target.name.slice(10)); //ID of the corresponding product comment thread

    //calls function to add new comment
    addComment(newId, newName, newComment);
  })
}

function refreshPage(){

}

function addComment(id, newName, newComment){
  // checks for product that comment belongs to
  reviews.forEach(function (review) {
    if (review.id === id){
      review.comments.push({
        id: review.comments.length,
        usr: newName,
        msg: newComment
      });
    }
    console.log(review);
  })

  postReviews();
}

// creates html string for user comments
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

  post += '<form action class="newComment" name="newComment' + id + '">';
  post +=   '<input type="text" name="userName" value="test">';
  post +=   '<input type="text" name="commentField">';
  post +=   '<input type="submit" value="Comment">';
  post += '</form>';
  return post;
}


function startUp() {
  getReviews();
}

$(document).ready(startUp);
