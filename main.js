const beepGood = new Audio("beep-good.ogg")
const pressed = [];
const secretCode = "fabi";

window.addEventListener('keyup', (e) => {
    console.log(e);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log("Dupa!")
        beepGood.currentTime = 0;
        beepGood.play();
    }
    console.log(pressed);
})