

let photos = ['./img/product_1.png','./img/product_2.png','./img/product_3.png','./img/product_4.png','./img/product_5.png','./img/product_6.png','./img/product_7.png','./img/product_8.png','./img/product_9.png','./img/product_10.png'];

let imgTag = document.querySelector('.image img');
let count = 0;


function next() {
    count ++

    if (count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function prev() {
    count--
    
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}