const playstation = document.getElementById('playstation');
const xbox = document.getElementById('xbox');
const textPs = document.getElementById('text-ps');
const textXbox = document.getElementById('text-xbox');

playstation.addEventListener('mouseenter', function () {
    xbox.classList.add('buy-ps5');
    textPs.classList.add('text-center');
    textXbox.classList.add('text-close');
})
playstation.addEventListener('mouseleave', function () {
    xbox.classList.remove('buy-ps5');
    textPs.classList.remove('text-center');
    textXbox.classList.remove('text-close');
})

xbox.addEventListener('mouseenter', function () {
    textXbox.classList.add('text-center')
    textPs.classList.add('text-close');
})
xbox.addEventListener('mouseleave', function () {
    textXbox.classList.remove('text-center')
    textPs.classList.remove('text-close');
})