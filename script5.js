function passwordPrompt() {
    var password = prompt("Please enter the password to view this page:", "");
    if (password == "#123Ehtesham") { // Replace "mypassword" with your own password
        // Password is correct, allow access to the page
        document.getElementById("content").style.display = "block";
    } else {
        // Password is incorrect, show an error message
        alert("Incorrect password, please try again.");
        passwordPrompt();
    }
}