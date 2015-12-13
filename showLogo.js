var delay=3500 //set delay in miliseconds
var curindex=0

var randomimages = new Array()


//for loop start
//randomimages[i] = "album/logo" + i  +
//".jpg"
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
$('#lad').html('<img name="leftimage" class="adClass" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')
$('#rad').html('<img name="rightimage" class="adClass" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')

function rotateimage()
{
  console.log('rotate image called')
  if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
    curindex=curindex==0? 1 : curindex-1
  }
  else {
    curindex=tempindex
  }
  console.log(document.images)
  document.images.leftimage.src=randomimages[curindex]
  document.images.rightimage.src=randomimages[(curindex + 1) % document.images.length]
}

setInterval("rotateimage()",delay)

////////////////////////

$('#rbu').click(function(){
	alert('Refresh, if you want Ads back');
	$('#rad').hide();
	$('#lad').hide();

	})

	




