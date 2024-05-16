document.getElementById('acceptBtn').addEventListener('mouseover', function() {
    moveButton('acceptBtn');
});

document.getElementById('denyBtn').addEventListener('mouseover', function() {
    moveButton('denyBtn');
});

function moveButton(buttonId) {
    var button = document.getElementById(buttonId);
    var container = document.querySelector('.button-container');
    var containerRect = container.getBoundingClientRect();
    var maxX = containerRect.width - button.offsetWidth;
    var maxY = containerRect.height - button.offsetHeight;
    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
