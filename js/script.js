// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const contactToggle = document.getElementById("contact-toggle");
    const contactFormSection = document.getElementById("contact-form");
    const hireRadioButton = document.getElementById("radio-button-hire");
    const hourlyRateInput = document.getElementById("hourly-rate-input");
    const currentDateElement = document.getElementById("current-date"); // Reference to the <time> element

    // Set the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];

    // Update the content of the <time> element with the current date
    currentDateElement.textContent = currentDate;

    // Toggle the contact form's visibility
    contactToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent link navigation
        contactFormSection.style.display = contactFormSection.style.display === "none" ? "block" : "none";
        if (contactFormSection.style.display === "block") {
            contactFormSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Show/hide hourly rate input based on selected radio button
    function toggleHourlyRateInput() {
        hourlyRateInput.style.display = hireRadioButton.checked ? "block" : "none";
    }

    hireRadioButton.addEventListener("change", toggleHourlyRateInput);
    document.getElementById("radio-button-question").addEventListener("change", toggleHourlyRateInput);
    document.getElementById("radio-button-comment").addEventListener("change", toggleHourlyRateInput);

    // Initially hide the hourly rate input
    hourlyRateInput.style.display = "none";
});
