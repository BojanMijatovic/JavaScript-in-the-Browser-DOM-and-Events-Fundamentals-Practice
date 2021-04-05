const btn = document.querySelector('button');



btn.addEventListener('click', function() {
    const randomColor = Math.trunc(Math.random() * 1000) + 1000;
    console.log(randomColor);
    document.body.style.backgroundColor = `#${randomColor}`;
})