const pianokeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysChecked = document.querySelector(".keys-check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    console.log(mapedKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianokeys.forEach((key) => {
    key.addEventListener('click', (e) => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) return playTune(e.key);
});

const handleVolume = () => {
    // Map the input range (0-100) to the desired volume range (0-1)
    audio.volume = volumeSlider.value / 100;
};

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener('input', handleVolume);
keysChecked.addEventListener('click', showHideKeys);
