const typedTextSpan = document.querySelector("#title-name");
const cursorSpan = document.querySelector(".input-cursor");

const textArray = ["Hello, i am Muhammad Assidiq Fattah", "I am a Full Stack Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// var o = $(".cd-timeline-content");
// $(".cd-timeline-block").on("mousemove", function (t) {
//   var e = -($(window).innerWidth() / 2 - t.pageX) / 90,
//     n = ($(window).innerHeight() / 2 - t.pageY) / 45;
//   o.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
// })

const scrollElements = document.querySelectorAll(".js-scroll");
const scrollHome = document.querySelectorAll(".space");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);    
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
const handleScrollNavbar = () => {
  scrollHome.forEach((el) => {
    if (elementInView(el, 1.25)) {
      $('.nav-top').addClass('fixed');
    } else if (elementOutofView(el)) {
      $('.nav-top').removeClass('fixed');
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
  handleScrollNavbar();
});

var makeWinHeight = function () {
  var vh = $(window).height();
  var projects = vh / 2;
  $('#scene, .layer.main').height(vh);
  $('#scene .col a, #scene .col').height(projects);
}
$(document).ready(function () {
  makeWinHeight();

});
$(window).resize(function () {
  makeWinHeight();
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene);