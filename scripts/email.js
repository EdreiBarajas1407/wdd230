document.getElementById('demo-form').addEventListener('submit', (event) => {
    const emailInput = document.getElementById('email');
    const emailPattern = new RegExp(emailInput.pattern);

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        const message = document.getElementById('form-message-email');
        message.textContent = "Please enter a valid email address in the format user@byui.edu";
    }
})

