function submitForm() {
    var firstName = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Basic form validation
    if (name === '' || email === '') {
        alert('Please fill out all fields');
        return;
    }

    // Do something with the form data (e.g., send it to a server)
    alert('Form submitted!\nName: ' + name + '\nEmail: ' + email);

    // You can also submit the form to a server using AJAX or other methods here
}
function submitAdoptionForm() {
    var pawrentName = document.getElementById('pawrentsName').value;
    var catName = document.getElementById('adoptee').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email-of-P-rent').value;
    var address = document.getElementById('pawrent-address').value;

    // Basic form validation
    if (!pawrentName || !catName || !gender || !email || !address) {
        alert('Please fill out all fields');
        return;
    }

    // Do something with the form data (e.g., send it to a server)
    alert('Adoption Form submitted!\nPawrent\'s Name: ' + pawrentName +
        '\nCat to Adopt: ' + catName +
        '\nGender: ' + gender.value +
        '\nEmail: ' + email +
        '\nAddress: ' + address);
}
function validatePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('conPassword').value;

    // Basic password validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Do something with the form data (e.g., submit the form)
    alert('Registration successful!\nFirst Name: ' +
        document.getElementById('firstName').value +
        '\nLast Name: ' + document.getElementById('lastName').value +
        '\nEmail: ' + document.getElementById('email').value);

    // You can also submit the form to a server using AJAX or other methods here
}