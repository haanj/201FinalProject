var profileArray = [{name:'john'}, {name:'sally'}, {name:'michael'}];

var form = document.getElementById('formstruct');

//Profile constructor with applicable key, value pairs for recording what the user has voted on
//and what the user has posted themselves or commented on. Also a way to store thier avatar image
function Profile (name){
	this.name = name;
	this.itemsVoted = [];
	this.itemsCreated = [];
	this.comments = [];
	this.avatar;
}

function initialize(){
	if(localStorage){
		profileArray = JSON.parse(localStorage["profileArray"]);
	}
}

//When our user signs in we want to load the page based on their "settings"
function loadUser(profile){
	console.log(profile);
	toggleSubmitButton();
	//destroy input field

}

function checkUserExistence(event){
	var inputExists = $('inputID').
	
	event.preventDefault();
	profileArray.forEach(function(profile){
		//disallow camelCase
		if(profile['name'].toLowerCase() === event.target.userInput.value.toLowerCase()){
			//alert('Sorry that name is taken. Please try a different name.');
			console.log(profile);
			console.log('I think this sent a profile object????')
			var profileForLoad = profile;
			loadUser(profileForLoad);
			document.getElementById("inputID").value = '';
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
		if(userName.length < 2){
			console.log('User names must be at least two letters long');

		}
		else{
			console.log('do you bruh');
			console.log(userName);
			var newProfile = new Profile(userName);
			console.log(newProfile);
			profileArray.push(newProfile);
			localStorage["profileArray"] = JSON.stringify(profileArray);
			loadUser();
		}

}

function setAvatar(image){

}

function logout(){
	toggleSubmitButton();
}

//change button value based on our users login status
function toggleSubmitButton(){
	var checkButtonValue = $('#submitUserName').text();
	if(checkButtonValue === 'Submit'){
	$('#submitUserName').text('Logout');
	$('#inputID').toggle();
	}
	else{
		$('#submitUserName').text('Submit');
		$('#inputID').toggle();
	}

}

form.addEventListener('submit', checkUserExistence);

//here is where we update our users profile every time they make a vote, or create something new
// toreflect the changes
function updateProfile(key, value){

}

initialize();