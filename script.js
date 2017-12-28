var myImage = document.getElementById("mainImage");
var imageArray = ["images/richard-brown.jpg", "images/dariusbrowne.jpg", "images/business-school.jpg"];			 
var imageIndex = 0;
function changeImage() {
myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
} }
var intervalHandle = setInterval(changeImage,3000);
 myImage.onclick =  function() {
	clearInterval(intervalHandle);
}
