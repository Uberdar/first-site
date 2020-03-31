function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

function changeListNames() {
	var w = window.outerWidth;
	if (w <= 1000) {
		document.getElementById("rockchange").innerHTML = "Rocker";
		document.getElementById("corpchange").innerHTML = "Corp";
		document.getElementById("netchange").innerHTML = "Net";
	}
	if (w > 1000) { 
		document.getElementById("rockchange").innerHTML = "Rockerboys";
		document.getElementById("corpchange").innerHTML = "Corporates";
		document.getElementById("netchange").innerHTML = "Netrunners";
	}
}