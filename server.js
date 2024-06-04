import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
})


app.get('/Opus_Eponymous', (req, res) => {
    const songs = [
        {
            path: '../albums/Opus_Eponymous/Conc.flac',
            displayName: 'Con Clavi Con Dio',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Death Knell.flac',
            displayName: 'Death Kneel',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Deus Culpa.flac',
            displayName: 'Deus Culpa',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Elizabeth.flac',
            displayName: 'Elizabeth',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Genesis.flac',
            displayName: 'Genesis',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Prime Mover.flac',
            displayName: 'Prime Mover',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Ritual.flac',
            displayName: 'Ritual',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Satan Prayer.flac',
            displayName: 'Satan Prayer',
            artist: 'Ghost',
        },
        {
            path: '../albums/Opus_Eponymous/Stand By Him.flac',
            displayName: 'Stand By Him',
            artist: 'Ghost',
        },
    ]
    res.send(songs);
});

app.get('/Infestissumam', (req, res) => {
    const songs = [
        {
            path: '../albums/Infestissumam/Infestissumam.flac',
            displayName: 'Infestissumam',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Per Aspera Ad Inferi.flac',
            displayName: 'Per Aspera Ad Inferi',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Secular Haze.flac',
            displayName: 'Secular Haze',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Jigolo Har Migiddo.flac',
            displayName: 'Jigolo Har Miggido',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Ghuleh , Zombie Queen.flac',
            displayName: 'Ghuleh / Zombie Queen',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Year Zero.flac',
            displayName: 'Year Zero',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Body And Blood.flac',
            displayName: 'Body And Blood',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Idolatrine.flac',
            displayName: 'Idolatrine',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Depth of Satans Eyes.flac',
            displayName: 'Depth of Satan\'s Eyes',
            artist: 'Ghost',
        },
        {
            path: '../albums/Infestissumam/Monstrance Clock.flac',
            displayName: 'Monstrance Clock',
            artist: 'Ghost',
        },
    ]
    res.send(songs);
});

app.get('/Meliora', (req, res) => {
    const songs = [
        {
            path: '../albums/Meliora/Spirit.flac',
            displayName: 'Spirit',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/From The Pinnacle To The Pit.flac',
            displayName: 'From The Pinnacle To The Pit',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Cirice.flac',
            displayName: 'Cirice',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Spoksonat.flac',
            displayName: 'Spoksonat',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/He Is.flac',
            displayName: 'He is',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Mummy Dust.flac',
            displayName: 'Mummy Dust',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Majesty.flac',
            displayName: 'Majesty',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Devil Church.flac',
            displayName: 'Devil Church',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Absolution.flac',
            displayName: 'Absolution',
            artist: 'Ghost',
        },
        {
            path: '../albums/Meliora/Deus In Absentia.flac',
            displayName: 'Deus In Absentia',
            artist: 'Ghost',
        },
    ];
    res.send(songs)
});

app.get('/Prequelle', (req,res) => {
    const songs = [
        {
            path: '../albums/Prequelle/Ashes.mp3',
            displayName: 'Ashes',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Rats.mp3',
            displayName: 'Rats',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Faith.mp3',
            displayName: 'Faith',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/See The Light.mp3',
            displayName: 'See The Light',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Miasma.mp3',
            displayName: 'Miasma',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Dance Macabre.mp3',
            displayName: 'Dance Macabre',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Pro Memoria.mp3',
            displayName: 'Pro Memoria',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Witch Image.mp3',
            displayName: 'Witch Image',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Helvetesfonster.mp3',
            displayName: 'Helvetesfönster',
            artist: 'Ghost',
        },
        {
            path: '../albums/Prequelle/Life Eternal.mp3',
            displayName: 'Life Eternal',
            artist: 'Ghost',
        },
    ]
    res.send(songs);
});

app.get('/Impera', (req, res) => {
    const songs = [
        {
            path: '../albums/Impera/Imperium.mp3',
            displayName: 'Imperium',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Kaisarion.mp3',
            displayName: 'Kaisarion',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Spillways.mp3',
            displayName: 'Spillways',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Call Me Little Sunshine.mp3',
            displayName: 'Call Me Little Sunshine',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Hunters Moon.mp3',
            displayName: 'Hunter\'s Moon',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Watcher In The Sky.mp3',
            displayName: 'Watcher In The Sky',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Twenties.mp3',
            displayName: 'Twenties',
            artist: 'Ghost',
        },
        {
            path: '../albums/Impera/Respite On The Spitalfields.mp3',
            displayName: 'Respite On The Spitalfields',
            artist: 'Ghost',
        },
    ];
    res.send(songs);
});