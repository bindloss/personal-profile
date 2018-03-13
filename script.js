// When the user scrolls down 70px from the top of the document, show the button
window.onscroll = scrollFunction;

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page
const $scrollButton = document.querySelector('.scroll'); // Reference to our scroll button

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 12.66);
}

// When the DOM is loaded, this click handler is added to our scroll button
$scrollButton.addEventListener('click', scrollToTop);

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