import 'regenerator-runtime'; /* for async await transpile */
import '../styles/fonts.css';
import '../styles/main.css';

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("drawer");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
