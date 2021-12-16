
setInterval (function() {
    
    if (document.getElementsByClassName('fixed')[0].classList.contains("active")) {

        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[0].classList.remove("active");

    }else if (document.getElementsByClassName('fixed')[1].classList.contains("active")){

        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.remove("active");

    }else if (document.getElementsByClassName('fixed')[2].classList.contains("active")){

        document.getElementsByClassName('fixed')[0].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.remove("active");
    }




},3000);
