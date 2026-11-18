
function updateClock() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = (hours % 12) * 30 + minutes * 0.5;
    let minuteRotation = minutes * 6;
    let secondRotation = seconds * 6;

    document.getElementById("hour").style.transform =
        `translateX(-50%) rotate(${hourRotation}deg)`;

    document.getElementById("minute").style.transform =
        `translateX(-50%) rotate(${minuteRotation}deg)`;

    document.getElementById("second").style.transform =
        `translateX(-50%) rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);

updateClock();