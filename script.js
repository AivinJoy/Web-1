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
const speed = 100;
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

