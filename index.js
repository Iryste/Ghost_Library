// OPUS //
const opusElement = document.getElementById('opus');
const opusAudio = document.getElementById('hover-opus');
const classOpus = document.getElementsByClassName('album-cover');

opusElement.addEventListener('mouseenter', () => {
    opusAudio.play();
});

opusElement.addEventListener('mouseleave', () => {
    opusAudio.pause();
    opusAudio.currentTime = 0;
});

// INFESTISSUMAM //
const infestElement = document.getElementById('infest');
const infestAudio = document.getElementById('hover-infest');

infestElement.addEventListener('mouseenter', () => {
    infestAudio.play();
});

infestElement.addEventListener('mouseleave', () => {
    infestAudio.pause();
    infestAudio.currentTime = 0;
});

// MELIORA //
const melElement = document.getElementById('meliora');
const melAudio = document.getElementById('hover-meliora');

melElement.addEventListener('mouseenter', () => {
    melAudio.play();
});

melElement.addEventListener('mouseleave', () => {
    melAudio.pause();
    melAudio.currentTime = 0;
});

// PREQUELLE //
const preqElement = document.getElementById('prequelle');
const preqAudio = document.getElementById('hover-prequelle');

preqElement.addEventListener('mouseenter', () => {
    preqAudio.play();
});

preqElement.addEventListener('mouseleave', () => {
    preqAudio.pause();
    preqAudio.currentTime = 0;
});

// IMPERA //
const impElement = document.getElementById('impera');
const impAudio = document.getElementById('hover-impera');

impElement.addEventListener('mouseenter', () => {
    impAudio.play();
});

impElement.addEventListener('mouseleave', () => {
    impAudio.pause();
    impAudio.currentTime = 0;
});