import { fetchData } from "../fetch.js";

const title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

// const songs = [
//     {
//         path: '../albums/Infestissumam/Infestissumam.flac',
//         displayName: 'Infestissumam',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Per Aspera Ad Inferi.flac',
//         displayName: 'Per Aspera Ad Inferi',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Secular Haze.flac',
//         displayName: 'Secular Haze',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Jigolo Har Migiddo.flac',
//         displayName: 'Jigolo Har Miggido',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Ghuleh , Zombie Queen.flac',
//         displayName: 'Ghuleh / Zombie Queen',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Year Zero.flac',
//         displayName: 'Year Zero',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Body And Blood.flac',
//         displayName: 'Body And Blood',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Idolatrine.flac',
//         displayName: 'Idolatrine',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Depth of Satans Eyes.flac',
//         displayName: 'Depth of Satan\'s Eyes',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Infestissumam/Monstrance Clock.flac',
//         displayName: 'Monstrance Clock',
//         artist: 'Ghost',
//     },
// ]

fetchData('/Infestissumam').then((data) => {
    console.log(data)
    localStorage.setItem('Infestissumam', JSON.stringify(data))
})

const songs = JSON.parse(localStorage.getItem('Infestissumam'));

let musicIndex = 0;
let isPlaying = false;


function togglePlay() {
    if(isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
};

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
};

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
};

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
};

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
};

// function updateProgressBar() {
//     const {duration, currentTime} = music;
//     const progressPercent = (currentTime / duration) * 100
//     progress.style.width = `${progressPercent}%`;

//     const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
//     durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
//     currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
// };

function updateProgressBar() {
    const { duration, currentTime } = music;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);

        durationEl.textContent = `${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
        currentTimeEl.textContent = `${formatTime(currentMinutes)}:${formatTime(currentSeconds)}`;
    };
};

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
};

playBtn.addEventListener('click', togglePlay);

prevBtn.addEventListener('click', () => {
    changeMusic(-1);
});

nextBtn.addEventListener('click', () => {
    changeMusic(1);
});

music.addEventListener('ended', () => {
    changeMusic(1);
});

music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);