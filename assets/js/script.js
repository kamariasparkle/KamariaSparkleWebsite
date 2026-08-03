/* ===========================================================
   KAMARIA SPARKLE EVENTS
   Version 2.0
   script.js
=========================================================== */
/* ===========================
   MOBILE MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    }else{
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

/* Close menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

/* Close menu when scrolling */

window.addEventListener("scroll",()=>{

    if(navLinks.classList.contains("active")){

        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});
/* ===========================
   STICKY HEADER ON SCROLL
=========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.97)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

    } else {

        header.style.background = "rgba(0,0,0,.88)";
        header.style.boxShadow = "none";

    }

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================
   CURRENT YEAR IN FOOTER
=========================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Kamaria Sparkle Events. All Rights Reserved.`;

}

console.log("✅ Kamaria Sparkle Events Version 2.0 Loaded Successfully");
/*=========================================
SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    const trigger = window.innerHeight * 0.88;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

/* ==========================================================
   PREMIUM PORTFOLIO LIGHTBOX v1.2
========================================================== */

const portfolioItems = document.querySelectorAll(".portfolio-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

const currentImage = document.getElementById("current-image");
const totalImages = document.getElementById("total-images");

const images = [];

portfolioItems.forEach(item => {

    images.push(item.dataset.image);

});

totalImages.textContent = images.length;

let currentIndex = 0;

function showImage(index){

    currentIndex = index;

    lightboxImage.src = images[currentIndex];

    currentImage.textContent = currentIndex + 1;

}

portfolioItems.forEach((item,index)=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        showImage(index);

        lightbox.classList.add("active");

    });

});

nextButton.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage(currentIndex);

});

prevButton.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextButton.click();

    }

    if(e.key==="ArrowLeft"){

        prevButton.click();

    }

});
