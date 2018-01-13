var myImage = document.getElementById("mainImage");
var imageArray = ["images/instawatch-portfolio.jpg", "images/richard-brown.jpg", "images/business-school.jpg"];			 
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

 var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	 showDivs(slideIndex += n);
	}

	function currentDiv(n) {
	 showDivs(slideIndex = n);
	}

	function showDivs(n) {
	 var i;
	 var x = document.getElementsByClassName("mySlides");
	 var dots = document.getElementsByClassName("move");
	 if (n > x.length) {slideIndex = 1}    
	 if (n < 1) {slideIndex = x.length}
	 for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";  
	 }
	 for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" white", "");
	 }
	 x[slideIndex-1].style.display = "block";  
	 dots[slideIndex-1].className += " white";
	}