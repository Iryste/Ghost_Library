import { fetchData } from "../fetch.js";

const title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    playerProgress = document.getElementById('player-progress'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play');

// Création de l'élément audio
const music = new Audio();

// Tableau des musiques avec chemin, titre et artiste
// const songs = [
//     {
//         path: '../albums/Opus_Eponymous/Conc.flac',
//         displayName: 'Con Clavi Con Dio',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Death Knell.flac',
//         displayName: 'Death Kneel',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Deus Culpa.flac',
//         displayName: 'Deus Culpa',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Elizabeth.flac',
//         displayName: 'Elizabeth',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Genesis.flac',
//         displayName: 'Genesis',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Prime Mover.flac',
//         displayName: 'Prime Mover',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Ritual.flac',
//         displayName: 'Ritual',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Satan Prayer.flac',
//         displayName: 'Satan Prayer',
//         artist: 'Ghost',
//     },
//     {
//         path: '../albums/Opus_Eponymous/Stand By Him.flac',
//         displayName: 'Stand By Him',
//         artist: 'Ghost',
//     },
// ]

fetchData('/Opus_Eponymous').then((data) => {
    console.log(data)
    localStorage.setItem('Opus_Eponymous', JSON.stringify(data))
})

const songs = JSON.parse(localStorage.getItem('Opus_Eponymous'));


// Variables pour suivre l'index de la musique en cours et l'état play/pause
let musicIndex = 0;
let isPlaying = false;


// Alterner entre lecture et pause
function playPause() {
    if(isPlaying) {
        pauseMusic();
    } else if (isPlaying = true) {
        playMusic();
    }
};

// Démarrer la lecture - Changement du bouton play en bouton pause
function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
};

// Mettre en pause la lecture - Changement du bouton pause en bouton play
function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
};

// Chargement de nouvelle musique - Source de la musique - Mise à jour du titre
function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist
};

// Changement de musique (précédent/suivant)
function changeMusic(a) {
    musicIndex = (musicIndex + a + songs.length) % songs.length
    loadMusic(songs[musicIndex]);
    playMusic();
};

// MaJ de la barre de progression et du timer des musiques
function updateProgress() {
    const {duration, currentTime} = music;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Formatage du temps en minutes/secondes
        const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);

        // MaJ de la durée
        durationEl.textContent = `${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
        currentTimeEl.textContent = `${formatTime(currentMinutes)}:${formatTime(currentSeconds)}`;
    }
}

// Position de la barre selon le click du user
function userClickProgress(e) {
    // largeur de la barre
    const width = playerProgress.clientWidth;
    // Position du curseur au click
    const clickX = e.offsetX;
    // MaJ du timer de la musique
    music.currentTime = (clickX / width) * music.duration;
};

playBtn.addEventListener('click', playPause);

prevBtn.addEventListener('click', () => {
    changeMusic(-1);
});

nextBtn.addEventListener('click', () => {
    changeMusic(1);
});

music.addEventListener('ended', () => {
    changeMusic(1);
});

music.addEventListener('timeupdate', updateProgress);
playerProgress.addEventListener('click', userClickProgress);


loadMusic(songs[musicIndex]);