const passwordInput = document.getElementById('password');
const confirmationPasswordInput = document.getElementById('password-confirm');

const submitButton = document.getElementById('submit');
let formMessage = document.getElementById('form-message-pass');

confirmationPasswordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    const confirmationPasswordValue = confirmationPasswordInput.value;

    if (passwordValue === confirmationPasswordValue) {
        formMessage.textContent = "";
    }
    else {
        formMessage.textContent = "*Passwords don't match*";
    }
});

submitButton.addEventListener('click', () => {
    const passwordValue = passwordInput.value;
    const confirmationPasswordValue = confirmationPasswordInput.value;

    if (passwordValue !== confirmationPasswordValue) {
        passwordInput.value = "";
        confirmationPasswordInput.value = "";
        passwordInput.focus();
        formMessage.textContent = "Please, try again. Passwords must match";
    }
});