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

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* ===========================
   CLOSE MENU WHEN A LINK IS CLICKED
=========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

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