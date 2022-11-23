var chekout = "https://pay.kiwify.com.br/BFfbklX?src=P1_LT9";
const Delay = 16;
const refCien = false;
const DELAY_TIME_IN_SECONDS = Delay;
const DELAY_ELEMENTS_CLASS = 'actionCta';
const TITULO_CLASS = 'text-head';
let player;

function showElements(className, value) {
    for (const element of document.getElementsByClassName(className)) {
        element.style.display = value;
    }
}

function showElementsAfterDelay() {
    const time = Math.floor(player.video.currentTime);
    if (time >= DELAY_TIME_IN_SECONDS && player.paused == false) {
        showElements(DELAY_ELEMENTS_CLASS, 'block');
        if (TitleHead) {
            showElements(TITULO_CLASS, 'block');
        }
    }
}
window.onload = () => {
    showElements(DELAY_ELEMENTS_CLASS, 'none');
    showElements(TITULO_CLASS, 'none');
    const addFunctionShowElementsAfterDelay = setInterval(() => {
        if (window.smartplayer.instances[0].mounted) {
            player = window.smartplayer.instances[0];
            player.events.events.timeupdate.push(showElementsAfterDelay);
            clearInterval(addFunctionShowElementsAfterDelay);
        }
    }, 100)
}
const REFERENCIA_CLASS = 'container-ref';
if (refCien) {
    showElements(REFERENCIA_CLASS, 'block');
}
const date = new Date().toLocaleString();
var contador = 221;

function dataAtual() {
    var Element = document.getElementById("date");
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    Element.style.color = "red";
    Element.innerHTML = dataAtual;
}
dataAtual();
i = 0
for (let pessoas = 221; pessoas < 837; pessoas++) {
    task(pessoas);
}

function task(pessoas) {
    setTimeout(function() {
        var count = document.getElementById("count");
        count.style.color = "red";
        count.innerHTML = pessoas;
    }, 2000 * i);
    i = i + 1;
}
const actionCta = document.getElementById('cta');
const secondCtaButton = document.getElementById('cta2');
actionCta.href = chekout;
secondCtaButton.href = chekout;
secondCtaButton.addEventListener('click', () => {
    window.location.href = chekout
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeypress = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function(event) {
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
        return false;
    }
}
document.onkeydown = function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
}