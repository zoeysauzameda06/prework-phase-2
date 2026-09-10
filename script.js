window.onload = function () {
    initcolorpicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("colorBox");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
    rgb.red.addEventListener('change', () => {
        console.log("Red value: ", rgb.red.value);
    })
}