//create array of moves
var fruits = ['tan da', 'song geng', 'huan sao', 'bong sau', 'di bong'];



//Start Timer and print moves
var myVar = setInterval(myTimer, 5000);

function myTimer(){
    var num = Math.floor(Math.random()*5); 
    
    document.getElementById("demo").innerHTML = fruits[num];
}

function myStopFunction(){
    clearInterval(myVar);
}


// moves function
    //create an array of moves

// play function
    //start loop:

        //print 1 random move on screen

        //delay for 4s

        //clear screen

//stop function
    //

    