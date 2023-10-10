// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // You can access form inputs by their IDs or other attributes
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Display an alert with the form data
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
}

// Get the form element by its ID
const form = document.getElementById("myForm");

// Add an event listener to the form to call the handleFormSubmission function when it's submitted
form.addEventListener("submit", handleFormSubmission);