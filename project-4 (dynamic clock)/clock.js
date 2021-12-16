
function time(){
    let date = new Date(); //--Dynamic function

    let hour = date.getHours(); //--Dynamic function
    let min = date.getMinutes() //--Dynamic function
    let sec = date.getSeconds() //--Dynamic function
    let timeFormat = 'AM';

   
    if (hour === 0){ //--for local time
        hour = 12;
    }
    if (hour > 12){
        hour = hour - 12;
        timeFormat = 'PM';
    }


    if (hour<10){
        hour = "0" + hour; //--for double digit
    }
    if (min<10){
        min = "0" + min //--for double digit
    }
    if (sec<10){
        sec = "0" +sec //--for double digit
    }


    let timed = hour + ":" + min + ":" + sec + " " + " " + timeFormat;

    document.getElementById('clock').innerText = timed; //--clock id er inner html timed onujayi change hobe
}
setInterval(time,1000); //--Dynamic function. Aita use korle extra vabe time function call kora lagbe na. Aitar meaning 1 second por por function ta bar bar call hobe.


