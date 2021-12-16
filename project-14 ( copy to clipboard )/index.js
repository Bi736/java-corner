
let input = document.getElementById('input');
let button = document.getElementById('btn');

button.onclick = function(){
    input.select();
    document.execCommand('copy');

    alert('Copied!')
}

