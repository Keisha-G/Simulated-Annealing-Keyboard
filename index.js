const runAlgorithmButton = document.querySelector(".runAlgorithmButton");

//Simulated Annealing Functions

function runAlgorithm() {
    var keyOne = document.querySelector('[data-char*="' + 'K' + '"]');
    var keyTwo = document.querySelector('[data-char*="' + 'L' + '"]'); //textcontent

    keyOne.textContent = 'L';
    keyTwo.textContent = 'K';
}

function swapKeyText(charOne, charTwo) {
    var keyOne = document.querySelector('[data-char*="' + charOne + '"]');
    var keyTwo = document.querySelector('[data-char*="' + charTwo + '"]');

    keyOne.textContent = charTwo;
    keyTwo.textContent = charOne;
}

function swapKeys() {
    // two keys to swap
    var keyOne = document.querySelector('[data-char*="' + 'K' + '"]');
    var keyTwo = document.querySelector('[data-char*="' + 'L' + '"]');

    // key coordinates
    var offsetsOne = keyOne.getBoundingClientRect();
    var yOne = offsetsOne.top; // up = negative
    var xOne = offsetsOne.left; // left = positive

    var offsetsTwo = keyTwo.getBoundingClientRect();
    var yTwo = offsetsTwo.top;
    var xTwo = offsetsTwo.left;

    //pixels etween keys
    var x = Math.pow((xOne - xTwo), 2);
    var y = Math.pow((yOne - yTwo), 2);
    var pixels = Math.sqrt(x+y);

    //pixels = keyOne.getBoundingClientRect().right - keyOne.getBoundingClientRect().left;
    //console.log(pixels)
    //console.log(document.querySelector(".keyboard").getBoundingClientRect().right - document.querySelector(".keyboard").getBoundingClientRect().left);

    //console log
    console.log(xTwo)
    console.log(yTwo)

    //keyOne.style.transform = `translate(${xTwo}px, ${yTwo}px)`;
    //keyTwo.style.transform = `translate(${xOne}px, ${yOne}px)`;

    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == pixels) { clearInterval(id);
        } else {
            pos++;
            if (yTwo>yOne) {keyTwo.style.top = -pos + 'px';} else {keyTwo.style.top = pos + 'px';}
            if (xTwo>xOne) {keyTwo.style.left = -pos + 'px';} else {keyTwo.style.left = pos + 'px';}
        }
    }
}

// Keyboard and title functions
function getKey (e) {
    var location = e.location;
    var selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        selector = ['[data-key="' + e.keyCode + '-R"]']
    } else {
        var code = e.keyCode || e.which;
        selector = [
            '[data-key="' + code + '"]',
            '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
        ].join(',');
    }
    return document.querySelector(selector);
}

function pressKey (char) {
    var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
    if (!key) {
        return console.warn('No key for', char);
    }
    key.setAttribute('data-pressed', 'on');
    setTimeout(function () {
        key.removeAttribute('data-pressed');
    }, 250);
}

var h1 = document.querySelector('h1');
var originalQueue = h1.innerHTML;
var queue = h1.innerHTML;

function next () {
    var c = queue[0];
    queue = queue.slice(1);
    h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
    pressKey(c);
    if (queue.length>0) {
        setTimeout(next, Math.random() * 200 + 50);
    }
}

h1.innerHTML = "&nbsp;";
setTimeout(next, 500);

document.body.addEventListener('keydown', function (e) {
    var key = getKey(e);
    if (!key) {
        return console.warn('No key for', e.keyCode);
    }

    key.setAttribute('data-pressed', 'on');
});

document.body.addEventListener('keyup', function (e) {
    var key = getKey(e);
    key && key.removeAttribute('data-pressed');
});

function size () {
    var size = keyboard.parentNode.clientWidth / 90;
    keyboard.style.fontSize = size + 'px';
    console.log(size);
}

var keyboard = document.querySelector('.keyboard');
window.addEventListener('resize', function (e) {
    size();
});
size();

// Misc. Functions
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
//modal.classList.add('active')
//overlay.classList.add('active')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}