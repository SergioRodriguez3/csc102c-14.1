// stringscript.js - Created by [Sergio Rodriguez]

// Get references to the palindrome checker elements
const output = document.getElementById('output');
const btnPrompt = document.getElementById('btnPrompt');

// Add click event listener to the palindrome checker button
btnPrompt.addEventListener('click', function() {
    // Prompt the user to enter a string
    const input = prompt("Enter a string (or 'exit' to quit):");

    // Check if the user wants to exit
    if (input === 'exit') {
        output.textContent = 'Palindrome checker closed.';
        return;
    }

    // Remove spaces from the input string
    const processedString = input.replace(/\s/g, '');

    // Reverse the processed string
    const reversedString = processedString.split('').reverse().join('');

    // Check if the reversed string is equal to the processed string
    const isPalindrome = processedString === reversedString;

    // Notify the user if the string is a palindrome or not
    if (isPalindrome) {
        output.textContent = `The string '${input}' is a palindrome!`;
    } else {
        output.textContent = `The string '${input}' is not a palindrome.`;
    }
});

// Get references to the form and other elements
const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const zipCodeInput = document.getElementById('zipCode');
const warningMessage = document.getElementById('warningMessage');
const secretMessage = document.getElementById('secretMessage');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const zipCode = zipCodeInput.value.trim();

    // Combine the first name and last name
    const fullName = firstName + ' ' + lastName;

    // Check if the full name has more than 20 characters
    if (fullName.length > 20) {
        warningMessage.textContent = 'Invalid input: Full name should not exceed 20 characters.';
        return; // Stop further execution
    }

    // Check if the zip code has exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        warningMessage.textContent = 'Invalid input: ZIP code should contain exactly 5 digits.';
        return; // Stop further execution
    }

    // If inputs are valid, show the secret message
    secretMessage.style.display = 'block';
});
