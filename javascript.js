// scripts.js

function updateTimeAndDay() {
    const now = new Date();
    const options = { timeZone: 'America/Halifax', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const localTime = new Intl.DateTimeFormat('en-US', options).format(now);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    document.getElementById('time').textContent = localTime;
    document.getElementById('day').textContent = day;
}


window.onload = updateTimeAndDay;


setInterval(updateTimeAndDay, 1000);



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
