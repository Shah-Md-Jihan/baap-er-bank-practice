document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('emailField').value;
    const userPassword = document.getElementById('passwordField').value;

    if (userEmail === 'shahmohammadjihan@gmail.com' && userPassword === 'shahit1998') {
        window.location.href = "bank.html";
    }
    else {
        alert('Alert email or password is wrong!');
    }
})