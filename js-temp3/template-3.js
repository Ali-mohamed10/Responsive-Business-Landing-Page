window.addEventListener("scroll",() => {
    if (scrollY > 627) {
        document.querySelector(".up").style.display = "block";
    } else {
        document.querySelector(".up").style.display = "none";
    }
});

/* Start Skills */

let pSkills = document.querySelectorAll(".our-skills p");
let box = document.querySelector(".our-skills .content div:nth-of-type(2)");
let skillsSection = document.querySelector(".our-skills");

for (let i = 0; i < pSkills.length; i++) {
    let progress = document.createElement("div");
    progress.className = "progress";
    box.appendChild(progress);
    pSkills[i].after(progress);
    let span = document.createElement("span");
    progress.appendChild(span);
}

let spans = document.querySelectorAll(".our-skills span");

window.addEventListener("scroll",() => {
    if (scrollY > skillsSection.offsetTop) {
        spans.forEach((sp) => sp.style.animationPlayState = "running");
    }
});

/* End Skills */

/* Start Stats */

let statsSection = document.querySelector(".our-awesome-stats");
let stats = document.querySelectorAll(".our-awesome-stats .content > div div");
let start = true; 

function up(e) {
    let goal = e.dataset.goal;
    let int = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(int);
        }    
    }, 2000 / goal /* Because walk with the same mail seconds avarage */);    
}

window.addEventListener("scroll",() => {
    if (window.scrollY > statsSection.offsetTop) {
        if (start) {
            stats.forEach((st) => up(st));
        }
        start = false;
    }
});

/* End Stats */


let daysTag = document.querySelector(".masters .details div:nth-of-type(1) p:nth-of-type(1)");
let hoursTag = document.querySelector(".masters .details div:nth-of-type(2) p:nth-of-type(1)");
let minutesTag = document.querySelector(".masters .details div:nth-of-type(3) p:nth-of-type(1)");
let secondsTag = document.querySelector(".masters .details div:nth-of-type(4) p:nth-of-type(1)");


const targetDate = new Date(2030,11,31);
targetDate.setHours(23,59,59);

function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysTag.innerText = days;
    hoursTag.innerText = hours;
    minutesTag.innerText = minutes;
    secondsTag.innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.querySelector(".masters .details").innerHTML = "Happy New Year";
    }
}

const timerInterval = setInterval(updateTimer, 1000);

updateTimer();



document.addEventListener("DOMContentLoaded", () => {

    const scrollUpButton = document.querySelector(".up");

    const toggleScrollButton = () => {
        if (window.scrollY > 600) {
            scrollUpButton.classList.add("show");
        } else {
            scrollUpButton.classList.remove("show");
        }
    };

    window.addEventListener("scroll", toggleScrollButton);

    scrollUpButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleScrollButton();


    const pSkills = document.querySelectorAll(".our-skills p");
    const skillsContainer = document.querySelector(".our-skills .content > div:nth-of-type(2)");
    const skillsSection = document.querySelector(".our-skills");

    if (skillsContainer && pSkills.length > 0 && skillsContainer.querySelectorAll(".progress").length === 0) {
        pSkills.forEach(skillP => {
            const progress = document.createElement("div");
            progress.className = "progress";
            skillP.after(progress);

            const span = document.createElement("span");
            progress.appendChild(span);
        });
    }

    const spans = document.querySelectorAll(".our-skills span");

    window.addEventListener("scroll", () => {
        if (skillsSection && window.scrollY >= skillsSection.offsetTop - 200) {
            spans.forEach((sp) => {
                if (sp.style.animationName) {
                        sp.style.animationPlayState = "running";
                }
            });
        }
    });


    const statsSection = document.querySelector(".our-awesome-stats");
    const statsNumbers = document.querySelectorAll(".our-awesome-stats .content > div div");
    let statsStarted = false;

    function animateCount(element) {
        if (!element || !element.dataset.goal) {
            console.warn("Element for counting animation not found or missing data-goal attribute:", element);
            return;
        }

        const goal = parseInt(element.dataset.goal);
        let currentCount = 0;
        if (isNaN(goal)) {
                console.warn("Invalid data-goal value:", element.dataset.goal);
                return;
        }

        const duration = 2000;
        const intervalTime = goal > 0 ? duration / goal : 0;

        const timer = setInterval(() => {
            currentCount++;
            element.textContent = currentCount;

            if (currentCount === goal) {
                clearInterval(timer);
            }
        }, intervalTime);
    }

    window.addEventListener("scroll", () => {
        if (statsSection && window.scrollY >= statsSection.offsetTop - 300) {
            if (!statsStarted) {
                statsNumbers.forEach((statElement) => animateCount(statElement));
                statsStarted = true;
            }
        }
    });


    const daysTag = document.querySelector(".latest-events .details div:nth-of-type(1) p:nth-of-type(1)");
    const hoursTag = document.querySelector(".latest-events .details div:nth-of-type(2) p:nth-of-type(1)");
    const minutesTag = document.querySelector(".latest-events .details div:nth-of-type(3) p:nth-of-type(1)");
    const secondsTag = document.querySelector(".latest-events .details div:nth-of-type(4) p:nth-of-type(1)");
    const eventDetailsContainer = document.querySelector(".latest-events .masters .details");


    const targetDate = new Date("Dec 31, 2030 23:59:59").getTime();

    function updateTimer() {
        if (!daysTag || !hoursTag || !minutesTag || !secondsTag || !eventDetailsContainer) {
            return;
        }

        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysTag.innerText = days < 10 ? `0${days}` : days;
        hoursTag.innerText = hours < 10 ? `0${hours}` : hours;
        minutesTag.innerText = minutes < 10 ? `0${minutes}` : minutes;
        secondsTag.innerText = seconds < 10 ? `0${seconds}` : seconds;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            eventDetailsContainer.innerHTML = "<div class='event-finished'>Happy New Year!</div>";
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();


    const sectionsToAnimate = document.querySelectorAll(
        ".landing, .articles, .gallery, .features, .testimonials, .team-members, .services, .our-skills, .how-it-works, .latest-events, .pricing-plans, .top-videos, .our-awesome-stats, .discount"
    );

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

});
