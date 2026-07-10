// =========================================
// AXPEX WEBSITE
// MAIN JAVASCRIPT
// =========================================

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(4,7,15,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background = "rgba(5,8,20,.70)";
        header.style.boxShadow = "none";

    }

});


// Active Navigation

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// Fade Hero

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

});


// Service Card Hover Glow

const cards = document.querySelectorAll(".service-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;

        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(45,124,255,.18),
        rgba(255,255,255,.03))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.03)";

    });

});


// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});


// Smooth Button Animation

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});


// Console

console.log("AXPEX Website Loaded Successfully.");
<button id="scrollTopBtn"> <i class="fa-solid fa-arrow-up"></i> </button>
//=========================================
// FLOATING PARTICLES
//=========================================

const particles = document.getElementById("particles");

for(let i=0;i<80;i++){

    const p = document.createElement("span");

    p.classList.add("particle");

    p.style.left=Math.random()*100+"%";

    p.style.bottom="-20px";

    p.style.width=(Math.random()*4+2)+"px";

    p.style.height=p.style.width;

    p.style.animationDuration=(Math.random()*12+8)+"s";

    p.style.animationDelay=(Math.random()*10)+"s";

    particles.appendChild(p);

}
//=========================================
// MOUSE GLOW
//=========================================

const glow = document.getElementById("mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
//=========================================
// COUNTER ANIMATION
//=========================================

const counters = document.querySelectorAll(".counter");

const speed = 40;

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target/speed);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCounter,40);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
//=========================================
// HERO PARALLAX
//=========================================

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    hero.style.backgroundPosition=`${x}px ${y}px`;

});
//=========================================
// MOBILE MENU
//=========================================

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});
//=========================================
// PRELOADER
//=========================================

window.addEventListener("load",()=>{

    const loader=document.getElementById("preloader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },700);

});
//=========================================
// HERO ENTRANCE
//=========================================

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero");

    hero.style.opacity="0";

    hero.style.transform="translateY(30px)";

    setTimeout(()=>{

        hero.style.transition="1s";

        hero.style.opacity="1";

        hero.style.transform="translateY(0)";

    },200);

});