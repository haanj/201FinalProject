var delay=3500 //set delay in miliseconds
var curindex=0

var randomimages = new Array()

	randomimages[0]="album/logo0.jpg"
	randomimages[1]="album/logo1.jpg"
	randomimages[2]="album/logo2.jpg"
	randomimages[3]="album/logo3.jpg"
	randomimages[4]="album/logo4.jpg"
	randomimages[5]="album/logo5.jpg"
	randomimages[6]="album/logo6.jpg"
	randomimages[7]="album/logo7.jpg"
	randomimages[8]="album/logo8.jpg"
	randomimages[9]="album/logo9.jpg"
	randomimages[10]="album/logo10.jpg"
	randomimages[11]="album/logo11.jpg"
	randomimages[12]="album/logo12.jpg"
	randomimages[13]="album/logo13.jpg"
	randomimages[14]="album/logo14.jpg"
	randomimages[15]="album/logo15.jpg"
	randomimages[16]="album/logo16.jpg"
	randomimages[17]="album/logo17.jpg"

var preload = new Array()

for (n=0; n<randomimages.length; n++)
{
	preload[n]=new Image()
	preload[n].src=randomimages[n]
}

// document.write('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')
$('#lad').html('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')
$('#rad').html('<img name="defaultimage" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage()
{

if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex

	document.images.defaultimage.src=randomimages[curindex]
}

setInterval("rotateimage()",delay)

// $('#lad').html('<img src="'+ final1 +'">');
// $('#rad').html('<img src="'+ final2 +'">');




// var imageAlbum = [];

// function albumLogo(){

// 	var counter = 0;

// 	while (counter <=17) {
// 		file = 'album/logo' + Math.floor(Math.random() * 17)+'.jpg';
// 		imageAlbum.push(file);
// 		counter ++;
// 	};
// };

// function showLogo(){

// 	var seattle1 = Math.floor(Math.random() * 17);
// 	var seattle2 = Math.floor(Math.random() * 17);

// 	var final1 = imageAlbum[seattle1];
// 	var final2 = imageAlbum[seattle2];

// 	$('#lad').html('<img src="'+ final1 +'">');
// 	$('#rad').html('<img src="'+ final2 +'">');
// };

// albumLogo();
// showLogo();



// $submit =


// post = post.concact('<img=src"'+ logo + '".jpg>');

// $submit.html('$lad');
// $submit.html('$rad');


///////////////////////////////////////////////////////
// var handle;
// var timeValue = 0;
// var img = document.getElmentById('image');
// var para = document.getElmentById('para');

// function onTime() {

// 	timeValue++;
// 	para.innerHTML = timeValue;

// 	if (timeValue>=60) {
// 		img.src(final1)
// 	}

// }
////////////////////////////////////////////////////////
// <script language="JavaScript">
// var i = 0;
// var path = new Array();

// // LIST OF IMAGES
// path[0] = "logo0.jpg";
// path[1] = "logo1.jpg";
// path[2] = "logo2.jpg";
// path[3] = "logo3.jpg";
// path[4] = "logo4.jpg";
// path[5] = "logo5.jpg";
// path[6] = "logo6.jpg";
// path[7] = "logo7.jpg";
// path[8] = "logo8.jpg";
// path[9] = "logo9.jpg";
// path[10] = "logo10.jpg";
// path[11] = "logo11.jpg";
// path[12] = "logo12.jpg";
// path[13] = "logo13.jpg";
// path[14] = "logo14.jpg";
// path[15] = "logo15.jpg";
// path[16] = "logo16.jpg";
// path[17] = "logo17.jpg";


// function swapImage()
// {
//    document.slide.src = path[i];
//    if(i < path.length - 1) i++; else i = 0;
//    setTimeout("swapImage()",3000);
// }
// window.onload=swapImage;
// </script>
// <img height="200" name="slide" src="image_1.gif" width="400" />

