const panel = document.querySelectorAll('.panel');
const title = document.querySelectorAll('h3');

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', function() {
        panel[i].classList.toggle('active');
    })
}