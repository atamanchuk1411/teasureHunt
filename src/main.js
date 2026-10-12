import './assets/styles/style.sass'

const map = document.querySelector('#map')
const rect = map.getBoundingClientRect()
const treasureX = rand(50, rect.width - 50);
const treasureY = rand(50, rect.height - 50);
let found = false;

function rand(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Координати скарба: X = ${treasureX}, Y = ${treasureY}`);

map.addEventListener('click', function(event) {
    if (found) {
        return;
    } 

    const clickX = event.clientX;
    const clickY = event.clientY;

    const distance = Math.sqrt(Math.pow(clickX - treasureX, 2) + Math.pow(clickY - treasureY, 2));

    if (distance <= 35) {
        found = true;
        console.log("Попали! Ви виграли!")
        const treasure = document.createElement('img');
        treasure.className = 'teasure';
        treasure.src = 'assets/images/teasure.svg'; 
        treasure.alt = 'Скарб';
        treasure.style.left = `${treasureX}px`;
        treasure.style.top = `${treasureY}px`;
        map.appendChild(treasure);
    } else {
        const cross = document.createElement('img');
        cross.className = 'cross';
        cross.src = 'assets/images/cross.svg'; 
        cross.alt = 'Мимо';
        cross.style.left = `${clickX}px`;
        cross.style.top = `${clickY}px`;
        map.appendChild(cross);
        if (distance < 100) {
            console.log(`Гаряче: x(${clickX}) y(${clickY})`)
        } else if (distance < 300) {
            console.log(`Тепло: x(${clickX}) y(${clickY})`)
        } else {
            console.log(`Холодно: x(${clickX}) y(${clickY})`)
        }
    }
});