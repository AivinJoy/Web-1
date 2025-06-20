document.querySelectorAll('.video-box').forEach(box => {
    const video = box.querySelector('video');

    let hasStarted = false;

    box.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
        hasStarted = true;
    });

    box.addEventListener('mouseleave', () => {
        video.pause();
        hasStarted = false;
    });

    // Pause the video at 10 seconds
    video.addEventListener('timeupdate', () => {
        if (hasStarted && video.currentTime >= 6) {
            video.pause();
            hasStarted = false;
        }
    });
});


// Counter 

const counter = document.getElementById("years");
const project = document.getElementById("completion");
const customer = document.getElementById("customers");
const copyYear = document.getElementById("copy-right-year")
const startYear = 2015;
const currentYear = new Date().getFullYear();
const yearsPassed = currentYear - startYear;
const projectTarget = 25;

copyYear.textContent = `${currentYear}`

// animation

let count1 = 0;
let count2 = 0;
const speed = 150;
const interval = setInterval(() => {
    if(count1 <= yearsPassed || count2 <= projectTarget) {
        if(count1 < yearsPassed) {
            count1++;
            counter.textContent = count1;
        }
        if(count2 < projectTarget) {
            count2++;
            project.textContent = `${count2} +`
            customer.textContent = `${count2} +`
        }
    }    
    else {
        clearInterval(interval);
    }
},speed);

// Scroll Animation using GSAP
document.addEventListener("DOMContentLoaded", function() {

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".block").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        });
    });
});

// context transition

// document.addEventListener("DOMContentLoaded", function () {
//     const mainTitle = document.querySelector('.main-title');
//     const subTitle = document.querySelector('.sub-title');

//     const tl = gsap.timeline();

//     tl.to(mainTitle, {
//         opacity: 0,
//         y: -20, // slightly move up while fading
//         delay: 2,
//         duration: 1,
//         ease: "power2.out"
//     }).to(subTitle, {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out"
//     }, "-=0.5"); // overlap a bit for smooth transition
// });

// Hamburger

const toggle = document.getElementById('menu-toggle');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.indicator');

// Indicator

const updateIndicator = () => {
    const activeItem = document.querySelector('.nav-item.active');
    if(!activeItem) return;
    const { offsetTop, offsetHeight } = activeItem;
    const indicatorHeight = indicator.offsetHeight;
    const centeredTop = offsetTop + (offsetHeight - indicatorHeight)/2 ;
    indicator.style.top = `${centeredTop}px`;
};

// toggle function

toggle.addEventListener('change', () => {
    navContainer.style.display = toggle.checked ? 'block' : 'none';
    if (toggle.checked) updateIndicator();
});

// nav-item-click 

navItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-item.active')?.classList.remove('active');
        item.classList.add('active');
        updateIndicator();
        toggle.checked = false;
        navContainer.style.display = 'none';
    });
});  

window.addEventListener('load', updateIndicator);