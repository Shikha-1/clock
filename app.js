
setInterval(() => {
    let hrHand = document.getElementById("hrHand");
    let minHand = document.getElementById("minHand");
    let secHand = document.getElementById("secHand");
    let now = new Date();
    let hr = now.getHours();
    let hrDegrees = (hr / 12) * 360 + 90;
    hrHand.style.transform = `rotate(${hrDegrees}deg)`;
    let min = now.getMinutes();
    let minDegrees = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    let sec = now.getSeconds();
    let secDegrees = (sec / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    hr = (hr < 10 ? "0" : "") + hr;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    hr = hr == 0 ? 12 : hr;
    hr = hr > 12 ? (hr - 12) : hr;
    let TimeOfDay = hr < 12 ? "AM" : "PM";
    document.getElementById(
        "digital_clock"
    ).innerHTML = `${hr}:${min}:${sec} ${TimeOfDay}`;
}, 1)
