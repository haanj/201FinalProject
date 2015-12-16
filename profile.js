var profileArray = [];

//var form = document.getElementById('formstruct');

//Profile constructor with applicable key, value pairs for recording what the user has voted on
//and what the user has submitted or commented on. Also a way to store thier avatar image
function Profile (name){
	this.name = name;
	this.itemsVoted = [];
	this.itemsCreated = [];
	this.comments = [];
	this.avatar;
}

function initialize(){
		//get profile list from database
		$.get('http://localhost:3000/profiles', function(data){
			profileArray = data;
			console.log('got profileArray from server!');
		});
	
}

//When our user signs in we want to load the page based on their "settings"
function loadUser(profileObject){
	console.log('profile loaded');
	var accountName = (profileObject['name']);
	localStorage['userName'] = JSON.stringify(accountName);
	destroyLoginAddLogout(accountName);
	//destroy input field

}

function checkUserExistence(event){
	profileArray.forEach(function(profile){
		//disallow camelCase
		if(profile['name'].toLowerCase() === event.target.userInput.value.toLowerCase()){
			//alert('Sorry that name is taken. Please try a different name.');
			console.log(profile);
			console.log('Sent a pre-existing profile')
			var profileForLoad = profile;
			loadUser(profileForLoad);
			
		}
		});
		if (event.target.userInput.value.length > 0) {
			var userName = event.target.userInput.value;
			createProfile(userName);
		}
	
}

//this is our function to create a first time user
function createProfile(userName) {
		//users must input a name that is at least 2 letters long
		if(userName.length < 4){
			console.log('User names must be at least two letters long');

		}
		else{
			console.log('Login accepted');
			console.log(userName);
			var newProfile = new Profile(userName);
			console.log(newProfile);
			profileArray.push(newProfile);
			//post new profile to db
			$.ajax({
      				url: 'http://localhost:3000/profiles',
				    type: "POST",
				    data: JSON.stringify(profileArray),
				    processData: false,
				    contentType: "application/json; charset=UTF-8",
				    complete: function() {
				    console.log('profile saved to server');
				    }
    		});
			loadUser(newProfile);
		}

}

function setAvatar(image){
	
}

function destroyLoginAddLogout(name){
	$('.profileButton').text('Logout');
	$('#inputID').val('');
	$('#inputID').hide();
	console.log('Button changed to Logout');
	$('#userToggle').text('Welcome, ' + name);
}

function destroyLogoutAddLogin(){
	console.log('Button changed to Login');
	localStorage.clear();
	$('.profileButton').text('Login');
	$('#inputID').show();
	$('#userToggle').text('Username:')


}
//here is where we update our users profile every time they make a vote, or create something new
// to reflect the changes
function updateProfile(key, value){

}

//listener for our login button
$('#formstruct').submit(function(event){
	console.log('You clicked the button')
	var checkButtonStatus = $('.profileButton').html();
	console.log('html value: ' + checkButtonStatus);
	if(checkButtonStatus === 'Login'){
		event.preventDefault();
		console.log('the html value matched "Login" ');
		checkUserExistence(event);
	}
	else if(checkButtonStatus === 'Logout'){
		event.preventDefault();
		console.log('the html value matched "Logout"');
		destroyLogoutAddLogin();
	}
	else{
		console.log('the html value did not match');
	}
});

//listeners for our menu display 
$('#menu').click(function() {
    	$('#menu').show({width: 'toggle'});
	});

$('#m1').click(function() {
    	$('#menu').hide({width: 'toggle'});
	});

initialize();