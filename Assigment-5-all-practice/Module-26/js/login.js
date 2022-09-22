// step-1: add event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // alawyes remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3:get password
    // 3.a:set id on the html element
    // 3.b:get the element
    // 3.c:get the value of the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: do not verify email password on the client side
    // step-4:verify email and password
    if (email === 'simanto@gmail.com' && password === 'karmakar') {
        window.location.href = 'http://127.0.0.1:5500/js/account.html';
    }
    else {
        alert('Enter the right password.You enter the wrong password and email')
    }
})