
/*
1. Dom selection
2. Even listner
3. Basic valitation
4. Creating element
5. Append
*/

// Dom selection
let boxOne = document.getElementById('title');
let boxTwo = document.getElementById('author');
let boxThree = document.getElementById('year');
let boxFour = document.getElementById('btn');
let boxFive = document.getElementById('bookList');

// Even listner

boxFour.addEventListener('click', function(e){
    //console.log('Hello Biswajit')

   e.preventDefault(); // aita use korle data use fixed hisab a thakbe. Na use korle bar bar chole jabe data

   // Basic valitation

   if ( (boxOne.value == ''||null||undefined) ||  (boxTwo.value == ''||null||undefined) || (boxThree.value == ''||null||undefined)){
       alert('Something wrong')
   }else{

    // creating element

    let newRow = document.createElement('tr');

    // creating table head for boxOne
    let newTitle = document.createElement('th');
    newTitle.innerHTML = boxOne.value;
    newRow.appendChild(newTitle);

    
     // creating table head for boxTwo
     let newAuthor = document.createElement('th');
     newAuthor.innerHTML = boxTwo.value;
     newRow.appendChild(newAuthor);

     
      // creating table head for boxThree
    let newYear = document.createElement('th');
    newYear.innerHTML = boxThree.value;
    newRow.appendChild(newYear);


    boxFive.appendChild(newRow);

    // design

    newRow.style.backgroundColor = 'rgba(0,0,0,.2)';
    newTitle.style.color = 'green';
    newAuthor.style.color = 'rgb(255, 26, 26)';
    newYear.style.color = 'rgb(46, 92, 184)';


   }


})