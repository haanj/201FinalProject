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

//When our user signs in we want to load the page based on their "settings"
function loadUser(){

	
}

//this is our function to create a first time user
//TODO: make this function check for duplicate users!!!!
function getUserName(event) {
	event.preventDefault();
	profileArray.forEach(function(profile){
	//console.log('for each says: ' + profile);
	//move this check to new method
		/*if(profile['name'] === event.target.userInput.value){
				console.log('sorry not sorry');
				return;
		}
		});
*/
		//users must input a name that is at least 2 letters long
		if(event.target.userInput.value.length < 2){
			console.log('too small bro');

		}
		else{
			console.log('do you bruh');
			var user = event.target.userInput.value;
			console.log(user);
			var newProfile = new Profile(user);
			console.log(newProfile);
			profileArray.push(newProfile);
		}
	


}

function setAvatar(image){

}


form.addEventListener('submit', getUserName);

//here is where we update our users profile every time they make a vote, or create something new to
//reflect the changes
function updateProfile(key, value){


}

