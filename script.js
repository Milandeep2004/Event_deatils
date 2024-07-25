// script.js - Adding interactivity with JavaScript

// Accordion functionality
const accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Countdown timer (optional)
function countdown(eventDate) {
    const countDownDate = new Date(eventDate).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EVENT STARTED";
        }
    }, 1000);
}

// Initialize countdown (replace 'Jan 1, 2025 00:00:00' with the actual event date)
countdown('September 20, 2024 10:00:00');

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show the popup
    var popup = document.getElementById('popup');
    popup.style.display = "block";

    // Reset the form
    document.getElementById('registrationForm').reset();
});

// Close the popup when the user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = "none";
});

// Close the popup when the user clicks anywhere outside of the popup
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

