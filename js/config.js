const carBody = document.getElementById('car-body');
const rims = document.getElementById('rims');

function changeBody(color) {
    carBody.style.backgroundImage = 'url(/images/config/body-' + color + '.png)';
}

function changeRims(color) {
    rims.style.backgroundImage = 'url(/images/config/rims-' + color + '.png)';
}