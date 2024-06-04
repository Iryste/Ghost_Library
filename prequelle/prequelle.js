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

fetchData('/Prequelle').then((data) => {
    console.log(data)
    localStorage.setItem('Prequelle', JSON.stringify(data))
})

const songs = JSON.parse(localStorage.getItem('Prequelle'));

// const songs = [
//     {
//         path: '../albums/Prequelle/Ashes.mp3',
//         displayName: 'Ashes',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Rats.mp3',
//         displayName: 'Rats',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Faith.mp3',
//         displayName: 'Faith',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/See The Light.mp3',
//         displayName: 'See The Light',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Miasma.mp3',
//         displayName: 'Miasma',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Dance Macabre.mp3',
//         displayName: 'Dance Macabre',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Pro Memoria.mp3',
//         displayName: 'Pro Memoria',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Witch Image.mp3',
//         displayName: 'Witch Image',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Helvetesfonster.mp3',
//         displayName: 'Helvetesfönster',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Prequelle/Life Eternal.mp3',
//         displayName: 'Life Eternal',
//         artist: 'Ghost',
//     },
// ]

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
    }
}

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