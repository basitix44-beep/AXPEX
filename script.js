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

console.log("AXPEX Website Loaded Successfully.");

// =========================================
// NEW AI CHAT ASSISTANT WIDGET LOGIC
// =========================================
 
// Open chat when navbar assistant icon is clicked
if (openChatNav) {
    openChatNav.addEventListener("click", () => {
        chatWidget.classList.add("active");
        chatInput.focus();
    });
}

// Close chat window
if (closeChatBtn) {
    closeChatBtn.addEventListener("click", () => {
        chatWidget.classList.remove("active");
    });
}

// Function to handle sending message to Backend Server
async function handleSendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    // 1. Display the user's message on screen
    appendMessage(text, "user");
    chatInput.value = "";

    // 2. Display a loading placeholder for smooth UX
    const loadingId = "msg-" + Date.now();
    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("chat-message", "bot");
    loadingDiv.id = loadingId;
    loadingDiv.innerText = "...";
    chatBody.appendChild(loadingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
        // 3. Request the response from your local node secure backend server
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();
        
        // 4. Update placeholder text with the actual secure AI response
        document.getElementById(loadingId).innerText = data.reply || "Sorry, something went wrong.";
    } catch (error) {
        console.error("Connection error:", error);
        document.getElementById(loadingId).innerText = "Could not connect to the server right now.";
    }
    
    chatBody.scrollTop = chatBody.scrollHeight;
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", sender);
    msgDiv.innerText = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Event Listeners for Chat Submission
if (sendChatBtn) sendChatBtn.addEventListener("click", handleSendMessage);
if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSendMessage();
    });
}

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
// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    padding: 0 20px;
}

.faq-answer p {
    padding-bottom: 20px;
    line-height: 1.6;
}
});
console.log("FAQ Script Loaded");

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

    question.onclick = function(){

        const answer = this.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
            this.querySelector("span").innerHTML = "+";
        }
        else{
            answer.style.display = "block";
            this.querySelector("span").innerHTML = "-";
        }

    };

});
alert("JS is working");

document.querySelectorAll(".faq-question").forEach(function(button){

    button.addEventListener("click", function(){

        let answer = this.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }

    });

});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();