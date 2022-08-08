import "./style.css";

var prevScrollpos = window.pageYOffset;

console.log(prevScrollpos);
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);

  const title = document.getElementsByClassName("main_title");
  console.log(title);
  const navbar = document.getElementsByClassName("navbar");
  //const main = document.getElementsByClassName("navbar");

  if (currentScrollPos > prevScrollpos) {
    title[0].classList.add("hidden");
    navbar[0].classList.add("hidden");
  } else {
    title[0].classList.remove("hidden");
    navbar[0].classList.remove("hidden");
  }
  prevScrollpos = currentScrollPos;
};
