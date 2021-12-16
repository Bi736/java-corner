
function time() {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    

   
    //let cngDay = day;
    document.getElementById("day").innerText = days;

    //let cngHour = hour;
    document.getElementById("hour").innerText = hours;

    //let cngMin = min;
    document.getElementById("min").innerText = minutes;

    //let cngSec = sec;
    document.getElementById("sec").innerText = second;
    
}
setInterval(time,1000);
