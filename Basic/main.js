const arr = [1, 3, 4, 5, 6, 7];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    newArr.push(arr[i] * 2);
}

console.log(newArr);


//  create click event
const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    console.log(e);
    document.body.style.backgroundColor = 'red';
})