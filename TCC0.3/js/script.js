function togglePasswordVisibility() {
    const passwordInput = document.getElementById("senha");
    const eyeIcon = document.querySelector(".eye-icon");
 
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}