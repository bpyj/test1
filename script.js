//target DOM elements
var songTitle = document.getElementById('title');
var player = document.querySelector('audio');


//create an array of songs objects
var songs = [
{name: 'recording-1', title: 'tan da'}, 
{name: 'recording-2', title: 'song geng'},
{name: 'recording-3', title: 'huan sau'},
{name: 'recording-4', title: 'bong sau'},
{name: 'recording-5', title: 'dei bong'},
];

var stop = false;
var interval;

function startPlaying(){
    stop = false;
    //every 5s, randomly select an object to play
     interval = setInterval(selectSong, 4000);
    
}

function selectSong(){
    //if stop = true, call stopPlaying()
    if(stop === true){
        stopPlaying();
    }else {
        var track = Math.floor(Math.random()*5);
        console.log(songs[track].title);
        songTitle.textContent = `${songs[track].title}`
        player.src = `music/${songs[track].name}.mp3`;
        player.play();
    }
}

function stopPlaying(){
    stop = true;
    clearInterval(interval);
    console.log('stop playing called');
}