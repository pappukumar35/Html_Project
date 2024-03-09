document.addEventListener("DOMContentLoaded", function() {
     const form = document.querySelector('.contact-form form');
 
     form.addEventListener('submit', function(event) {
         event.preventDefault(); // Prevent the default form submission
         
         // Validate the form fields
         const nameInput = form.querySelector('input[type="text"]');
         const emailInput = form.querySelector('input[type="email"]');
         const messageInput = form.querySelector('textarea');
 
         if (validateName(nameInput) && validateEmail(emailInput) && validateMessage(messageInput)) {
             // If all fields are valid, you can proceed with form submission
             console.log('Form submitted successfully!');
             form.reset(); // Reset the form
         }
     });
 
     // Function to validate name field
     function validateName(input) {
         const name = input.value.trim();
         if (name === '') {
             alert('Please enter your name.');
             return false;
         }
         return true;
     }
 
     // Function to validate email field
     function validateEmail(input) {
         const email = input.value.trim();
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailRegex.test(email)) {
             alert('Please enter a valid email address.');
             return false;
         }
         return true;
     }
 
     // Function to validate message field
     function validateMessage(input) {
         const message = input.value.trim();
         if (message === '') {
             alert('Please enter your message.');
             return false;
         }
         return true;
     }
 });
 