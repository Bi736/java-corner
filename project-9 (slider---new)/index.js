

function next() {
    if (document.getElementsByClassName('fixed')[0].classList.contains("active")){

        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[0].classList.remove("active");


    }else if (document.getElementsByClassName('fixed')[1].classList.contains("active")){

        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[2].classList.contains("active")){

        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");

        document.getElementsByClassName('fixed')[2].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[3].classList.contains("active")){

        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");

        document.getElementsByClassName('fixed')[3].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[4].classList.contains("active")){

        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");

        document.getElementsByClassName('fixed')[4].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[5].classList.contains("active")){

        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[9].classList.add("active");

        document.getElementsByClassName('fixed')[5].classList.remove("active");

    }
}





function prev() {
    if (document.getElementsByClassName('fixed')[9].classList.contains("active")){

        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");

        document.getElementsByClassName('fixed')[9].classList.remove("active");


    }else if (document.getElementsByClassName('fixed')[8].classList.contains("active")){

        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[8].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[7].classList.contains("active")){

        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");

        document.getElementsByClassName('fixed')[7].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[6].classList.contains("active")){

        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");

        document.getElementsByClassName('fixed')[6].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[5].classList.contains("active")){

        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.add("active");

        document.getElementsByClassName('fixed')[5].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[4].classList.contains("active")){

        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[0].classList.add("active");

        document.getElementsByClassName('fixed')[4].classList.remove("active");

    }
}











/*
setInterval (function() {
    if (document.getElementsByClassName('fixed')[0].classList.contains("active")){

        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[0].classList.remove("active");


    }else if (document.getElementsByClassName('fixed')[1].classList.contains("active")){

        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[2].classList.contains("active")){

        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");

        document.getElementsByClassName('fixed')[2].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[3].classList.contains("active")){

        document.getElementsByClassName('fixed')[4].classList.add("active");
        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");

        document.getElementsByClassName('fixed')[3].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[4].classList.contains("active")){

        document.getElementsByClassName('fixed')[5].classList.add("active");
        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");

        document.getElementsByClassName('fixed')[4].classList.remove("active");


    }else if  (document.getElementsByClassName('fixed')[5].classList.contains("active")){

        document.getElementsByClassName('fixed')[6].classList.add("active");
        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[9].classList.add("active");

        document.getElementsByClassName('fixed')[5].classList.remove("active");

    }


},1000)
*/




 /*else if  (document.getElementsByClassName('fixed')[6].classList.contains("active")){

        document.getElementsByClassName('fixed')[7].classList.add("active");
        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[9].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.add("active");

        document.getElementsByClassName('fixed')[6].classList.remove("active");

    }else if  (document.getElementsByClassName('fixed')[7].classList.contains("active")){

        document.getElementsByClassName('fixed')[8].classList.add("active");
        document.getElementsByClassName('fixed')[9].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");

        document.getElementsByClassName('fixed')[7].classList.remove("active");

    }else if  (document.getElementsByClassName('fixed')[8].classList.contains("active")){

        document.getElementsByClassName('fixed')[9].classList.add("active");
        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");

        document.getElementsByClassName('fixed')[8].classList.remove("active");

    }else if  (document.getElementsByClassName('fixed')[9].classList.contains("active")){

        document.getElementsByClassName('fixed')[1].classList.add("active");
        document.getElementsByClassName('fixed')[2].classList.add("active");
        document.getElementsByClassName('fixed')[3].classList.add("active");
        document.getElementsByClassName('fixed')[4].classList.add("active");

        document.getElementsByClassName('fixed')[9].classList.remove("active");
    }*/

