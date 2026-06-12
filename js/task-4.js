const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    }
    console.log('Submitted Data', formData);
    event.currentTarget.reset();
}