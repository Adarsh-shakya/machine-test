document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const formData = {
        first_name: document.getElementById('firstName').value,
        last_name: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone_number: document.getElementById('phone').value,
        password: document.getElementById('password').value
    };

    // Basic validation checks
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone_number || formData.password.length < 8) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Log the form data to console
    console.log(formData);
});
