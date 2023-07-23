// Get the form element and add an event listener for form submission
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate the form fields (you can add more validation rules)
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  // If all fields are valid, you can submit the form using AJAX or any other method.
  // For this example, we'll just show an alert indicating successful submission.
  alert('Form submitted successfully!');
  contactForm.reset(); // Clear the form after submission
});
