import './assets/styles/style.sass'

const map = document.querySelector('#map')
const rect = map.getBoundingClientRect()
const treasureX = rand(50, rect.width - 50);
const treasureY = rand(50, rect.height - 50);
let mapContent = ""
let found = false;

function rand(min, max) {    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Координати скарба: X = ${treasureX}, Y = ${treasureY}`);

map.addEventListener('click', function(event) {
    if (found) {
        return;
    } 

    const clickX = event.clientX - rect.left + window.scrollX;
    const clickY = event.clientY - rect.top + window.scrollY;
    const moneyX = event.clientX - rect.left + window.scrollX;
    const moneyY = event.clientY - rect.top + window.scrollY;

    const distance = Math.sqrt(Math.pow(clickX - treasureX, 2) + Math.pow(clickY - treasureY, 2));

    if (distance <= 35) {
        found = true;
        console.log("Попали! Ви виграли!")
        mapContent += `<img class="teasure" src="assets/images/teasure.svg" alt="Скарб" style="left: ${moneyX}px; top: ${moneyY}px;">`;
        map.innerHTML = mapContent;
    } else {
        mapContent += `<img class="cross" src="assets/images/cross.svg" alt="Мимо" style="left: ${clickX}px; top: ${clickY}px; position: absolute;">`;
        map.innerHTML = mapContent;
        if (distance < 100) {
            console.log(`Гаряче: x(${clickX}) y(${clickY})`)
        } else if (distance < 300) {
            console.log(`Тепло: x(${clickX}) y(${clickY})`)
        } else {
            console.log(`Холодно: x(${clickX}) y(${clickY})`)
        }
    }
});