let container = Array.from(document.querySelectorAll('.container'))[0];
let boxImg = Array.from(document.querySelectorAll('.box-img'))[0];
let img = document.querySelector('img');
var stopTime;

boxImg.addEventListener('mousemove', (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';

})

boxImg.addEventListener('mouseleave', () => {

    img.style.transformOrigin = `center center`;
    img.style.transform = 'scale(1)';

})


function createHeart() {
    let div = document.createElement('div');
    div.classList.add('heart');
    div.style.left = Math.random() * 100 + '%';
    div.style.animationDirection = (Math.random() * 2) + 5 + 's';
    div.innerText = '❤';
    container.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 6000)
}

setInterval(createHeart, 1000)

