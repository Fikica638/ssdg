// Countdown Timer to New Year's
function updateCountdown() {
    const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`);
    const now = new Date();
    const timeLeft = newYear - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerText = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Current Date Display
function updateCurrentDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('current-date').innerText = dateString;
}

// Age Calculator
function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('age-result').innerText = `You are ${age} years old.`;
}

// Initialize functions and set interval
updateCurrentDate();
updateCountdown();
setInterval(updateCountdown, 1000);
