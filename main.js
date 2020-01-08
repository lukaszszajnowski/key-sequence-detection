const beepGood = new Audio("beep-good.ogg")
const pressed = [];
const secretCode = "fabi";

const letter = document.querySelectorAll(".letter");

window.addEventListener('keyup', (e) => {
    console.log(e);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        beepGood.currentTime = 0;
        beepGood.play();
    }
    console.log(pressed);
    letter[0].textContent = pressed[0];
    letter[1].textContent = pressed[1];
    letter[2].textContent = pressed[2];
    letter[3].textContent = pressed[3];
})