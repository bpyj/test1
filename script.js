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

//every 5s, random select an object
var interval = setInterval(selectSong, 3000);

function selectSong(){
    var track = Math.floor(Math.random()*5);
    console.log(songs[track].title);
    songTitle.textContent = `${songs[track].title}`
    player.src = `music/${songs[track].name}.mp3`;
    player.play();
}
