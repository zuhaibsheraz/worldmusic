const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) { 
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
// ------------------------------------------------------------//
document.getElementById("signUpBtn").addEventListener("click", function(event) {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const emailError = document.getElementById("emailError");

    // Clear previous error message
    emailError.textContent = "";

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        event.preventDefault(); // Prevent submission
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        event.preventDefault();
    } else {
        alert("Sign-up successful 👍");
        window.location.href ='#';
    }
});
