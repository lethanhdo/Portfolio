//scroll top
window.onscroll = function() {scrollFunction()}
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "60px";
      document.getElementById("logo").style.fontSize = "35px";
      document.getElementById("navbar").style.background = "black";
      document.getElementById("navbar").style.boxShadow = "0px 6px 9px 0px rgba(0, 0, 0, 0.06)";
	
		mybutton.style.display = "block";
    } else {
      document.getElementById("navbar").style.background = "none";
      document.getElementById("navbar").style.height = "85px";
	  document.getElementById("logo").style.fontSize = "35px";
	  mybutton.style.display = "none";
    }
  }


// typing writer
const words = ["Web Developer", "Web Designer", "Frontend Developer"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting,400);
	};
	loopDeleting();
};
typingEffect();


//btn-scroll-top
var mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//slick
function slickFunction(){
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		centerMode: true,
		centerPadding: 0
	  });
}
slickFunction();



