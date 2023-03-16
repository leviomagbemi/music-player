const audio = document.getElementById('audio'),
      prevbtn = document.querySelector('#previous'),
      playbtn = document.querySelector('#play'),
      nextbtn = document.querySelector('#next'),
      progressBar = document.querySelector('.progress-bar'),
      barContainer = document.querySelector('.bar'),
      title = document.querySelector('.song-title'),
      cover = document.querySelector('.cover');
      

//button constructor
function Buttons(){}

//play proto
Buttons.prototype.play = function(){
  const rotate = document.querySelector('.cover');

  const title = document.querySelector('.song-title');

  const progressBar = document.querySelector('.progress-bar');

  rotate.className = 'cover play';
  title.className = 'song-title play';


  audio.play();
  playbtn.className = 'fa-solid fa-pause';
};

//pause proto
Buttons.prototype.pause = function(){
  const rotate = document.querySelector('.cover');

  const title = document.querySelector('.song-title');

  rotate.className = 'cover';
  title.className = 'song-title';

  audio.pause();
};

Buttons.prototype.next = function(){
  songIndex++

  if(songIndex > songs.length - 1){
    songIndex = 0
  }
 
  loadSong(songs[songIndex]);

  const play = new Buttons();
  play.play();
}

Buttons.prototype.prev = function(){
  songIndex--

  if(songIndex < 0){
    songIndex = songs.length -1
  }
 
 
  loadSong(songs[songIndex]);

  const play = new Buttons();
  play.play();
}

//song titles
const songs = ["Burna Boy - It's Plenty", 'Burna_Boy_-_Common_Person', 'Burna_Boy_-_Last_Last_Breakfast', 'Clean_Bandit_Rockabye', 'Kizz_Daniel_Cough_Odo', 'No one - Alicia Keys', 'Phyno-ft.-Tekno-Iwa'];

//track of songs
let songIndex = 2;

//load songs
loadSong(songs[songIndex]);

//update song details
function loadSong(song){
  title.innerText = song;
  audio.src = `Songs/${song}.mp3`;
  cover.src = `Images/${song}.jpg`;
}

//EventListeners
playbtn.addEventListener('click', playSong);
nextbtn.addEventListener('click', nextSong);
prevbtn.addEventListener('click', prevSong);
audio.addEventListener('ended', songEnd);
audio.addEventListener('timeupdate', updateProgress);
barContainer.addEventListener('click', setProgress);


//functions
function playSong(){
  //instantiate Buttons
  play = new Buttons();

 

  if(this.className === 'fa-solid fa-play'){
        play.play(); 
        this.className = 'fa-solid fa-pause'}else if(this.className !== 'fa-solid fa-play'){
          this.className = 'fa-solid fa-play';
          play.pause();
        }
}

function updateProgress(e){
const {duration, currentTime} = e.srcElement;
const progressPercent = (currentTime / duration) * 100;

progressBar.style.width = `${progressPercent}%`;
}

function setProgress(e){
const width = this.clientWidth;
const clickX = e.offsetX;
const duration = audio.duration;

audio.currentTime = (clickX / width) * duration;
}

function nextSong(){
  const next = new Buttons();

  next.next();
}

function prevSong(){
  const prev = new Buttons();

  prev.prev();
}

function songEnd(){
  const next = new Buttons();

  next.next();
}









