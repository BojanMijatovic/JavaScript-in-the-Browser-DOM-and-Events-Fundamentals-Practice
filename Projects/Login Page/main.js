/*
Most web pages on the internet require a user to login to their account via a login page. A simple Javascript project is to provide two input boxes and two buttons, one for ‘Cancel’ and one for ‘Login’. When the page loads, disable the ‘Login’ button and enable it once both inputs have been entered. Encrypt the password input box so that the password entered is not visible. Add error checking code in Javascript to validate the user name and password. Alert the user that the input is incorrect if either the user name is wrong or the password is wrong.

Similarly, alert the user if the input is correct. Either redirect the user to another web page or provide a message indicating that login was successful.
*/

const userName = document.getElementById('user-name').value;
const password = document.getElementById('password');
const submitBtn = document.querySelector('.btn');
const showAlert = document.querySelector('.show-alert');


submitBtn.addEventListener('click', function() {
    if (userName === '' || password === '') {
        showAlert.classList.toggle('hidden');
    } else if (userName.length < 4 || password.value < 3) {
        alert(`Need stronger password`);
    } else {
        alert(`Welcome ${userName}`)
    }

})