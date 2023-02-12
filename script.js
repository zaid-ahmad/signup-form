const passwordEl = document.querySelector('#password');
const password2El = document.querySelector('#password-confirm');

function checkPasswords() {
    if (passwordEl.value !== password2El.value) alert('Passwords do not match!')
    else alert('woosh..!')
}