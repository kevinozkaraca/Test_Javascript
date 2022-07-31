"use strict";

let lettersNameH1 = document.querySelectorAll(".letter");
let IMGlinks = document.querySelectorAll(".IMGlink");
let hrefLinks = document.querySelectorAll(".hrefLink");
let presentation = document.getElementById("presentation");
let ball1 = document.getElementById("ball1");
let ball2 = document.getElementById("ball2");

// Effect wedbite on desktop 'mouseover'

IMGlinks.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    e.preventDefault();
    const lettersChangeColor1 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor2 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor3 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor4 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor5 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor6 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor7 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    const lettersChangeColor8 = lettersNameH1[Math.floor(Math.random() * lettersNameH1.length)];
    lettersChangeColor1.style.color = "#17cfbc";
    lettersChangeColor2.style.color = "#cfc217";
    lettersChangeColor3.style.color = "white";
    lettersChangeColor4.style.color = "white";
    lettersChangeColor5.style.color = "white";
    lettersChangeColor6.style.color = "#cf1717";
    lettersChangeColor7.style.color = "##17cfbc";
    lettersChangeColor8.style.color = "white";

    if (e.path[0].alt == "Icone stackoverflow de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "95%";
      ball2.style.top = "15%";
      ball2.style.left = "95%";
    } else if (e.path[0].alt == "Icone Gmail de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "90%";
      ball2.style.top = "15%";
      ball2.style.left = "90%";
    } else if (e.path[0].alt == "Icone Youtube de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "85%";
      ball2.style.top = "15%";
      ball2.style.left = "85%";
    } else if (e.path[0].alt == "Icone Linkedin de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "80%";
      ball2.style.top = "15%";
      ball2.style.left = "80%";
    } else if (e.path[0].alt == "Icone Instagram de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "75%";
      ball2.style.top = "15%";
      ball2.style.left = "75%";
    } else if (e.path[0].alt == "Icone Twitter de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "70%";
      ball2.style.top = "15%";
      ball2.style.left = "70%";
    } else if (e.path[0].alt == "Icone Pinterest de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "65%";
      ball2.style.top = "15%";
      ball2.style.left = "65%";
    } else if (e.path[0].alt == "Icone Facebook de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "60%";
      ball2.style.top = "15%";
      ball2.style.left = "60%";
    } else if (e.path[0].alt == "Icone Github de Kevin Özkaraca") {
      ball1.style.top = "15%";
      ball1.style.left = "55%";
      ball2.style.top = "15%";
      ball2.style.left = "55%";
    }
  });
});

presentation.addEventListener("mouseover", () => {
  ball1.style.top = "50%";
  ball1.style.left = "50%";
  ball2.style.top = "50%";
  ball2.style.left = "50%";
});
// Effect for all on click
hrefLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
