document.addEventListener('DOMContentLoaded', function() {
    const signUpLink = document.getElementById('signUpLink');
    const signInLink = document.getElementById('signInLink');
    const signUpContainer = document.querySelector('.sign-up-container');
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Simulated database of user credentials
    let users = [];

    signUpLink.addEventListener('click', function(event) {
        event.preventDefault();
        signUpContainer.classList.remove('hidden');
        signInContainer.classList.add('hidden');
    });

    signInLink.addEventListener('click', function(event) {
        event.preventDefault();
        signInContainer.classList.remove('hidden');
        signUpContainer.classList.add('hidden');
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = signUpForm.querySelector('input[type="email"]').value.trim();
        const password = signUpForm.querySelector('input[type="password"]').value.trim();

        // Validate password
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long, contain both uppercase and lowercase characters, and contain at least one non-numeric character.');
            return;
        }

        // Confirm password
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Check if the email is already registered
        if (users.some(user => user.email === email)) {
            alert('Email already registered. Please use a different email.');
            return;
        }

        // Add the user to the database
        users.push({ email, password });

        // Registration successful
        alert('Registration successful! Please sign in.');
        signUpContainer.classList.add('hidden');
        signInContainer.classList.remove('hidden');
    });

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = signInForm.querySelector('input[type="email"]').value.trim();
        const password = signInForm.querySelector('input[type="password"]').value.trim();

        // Check credentials against simulated database
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Sign in successful!');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });

    function validatePassword(password) {
        return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
    }
});
