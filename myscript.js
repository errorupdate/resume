document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Thank you for contacting me!");
  });
