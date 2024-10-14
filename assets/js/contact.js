// form submaition
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    // Check if both fields are filled
    // Show the loader
    document.getElementById("loader").classList.remove("hidden");

    // Hide the form
    document.getElementById("myForm").classList.add("hidden");

    // Simulate a 3-second loading time
    setTimeout(function () {
      // Hide the loader
      document.getElementById("loader").classList.add("hidden");

      // Show the thanks message
      document.getElementById("thanksMessage").classList.remove("hidden");
    }, 3000); // 3000ms = 3 seconds
  } else {
    alert("Please fill in all fields.");
  }
});
