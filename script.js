function calculatePrice() {
    const price = 121.5;
    const users = document.getElementById('users').value;
    const resultElement = document.getElementById('result');




    if (users > 0 && users <= 36) {
        const pricePerTicket = price / users;
        resultElement.textContent = `Price per ticket is £${pricePerTicket.toFixed(2)}`;
    } else {
        resultElement.textContent = 'Please enter a valid number of users (1-36).';
    }
}




function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');




    // Replace with actual credentials check
    if (username === 'admin' && password === 'password') {
        loginResult.textContent = 'Login successful';
        document.getElementById('devCalculator').style.display = 'block';
    } else {
        loginResult.textContent = 'Invalid credentials';
    }
}




function autoCalculate() {
    const price = 121.5;
    const users = Math.floor(Math.random() * 36) + 1;  // Random number between 1 and 36
    const autoResult = document.getElementById('autoResult');




    const pricePerTicket = price / users;
    autoResult.textContent = `Amount of users at the moment: ${users}, Price per ticket per hour is £${pricePerTicket.toFixed(2)}`;
}
