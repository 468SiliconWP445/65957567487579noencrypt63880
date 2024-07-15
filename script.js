function calculatePrice() {
    const basePrice = 28.56;
    const additionalPrice = 11.44 * 6;
    const totalPrice = basePrice + additionalPrice;
    const maxUsers = 36;
    const tax = 0.675;
    const breakEvenPrice = totalPrice / maxUsers + tax;
    const profitPrice = breakEvenPrice * 1.25;
    const profitPerHour = profitPrice * maxUsers - totalPrice;

    const users = document.getElementById('users').value;
    const resultElement = document.getElementById('result');

    if (users > 0 && users <= maxUsers) {
        const pricePerTicket = profitPrice;
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
    const basePrice = 28.56;
    const additionalPrice = 11.44 * 6;
    const totalPrice = basePrice + additionalPrice;
    const maxUsers = 36;
    const tax = 0.675;
    const breakEvenPrice = totalPrice / maxUsers + tax;
    const profitPrice = breakEvenPrice * 1.25;
    const profitPerHour = profitPrice * maxUsers - totalPrice;

    const users = Math.floor(Math.random() * maxUsers) + 1;  // Random number between 1 and 36
    const autoResult = document.getElementById('autoResult');

    const pricePerTicket = profitPrice;
    autoResult.textContent = `Amount of users at the moment: ${users}, Price per ticket per hour is £${pricePerTicket.toFixed(2)}`;
}
