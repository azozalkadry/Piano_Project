function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();

    const key = document.getElementById(note);
    key.classList.add('active');

    setTimeout(() => {
        key.classList.remove('active');
    }, 200);
}