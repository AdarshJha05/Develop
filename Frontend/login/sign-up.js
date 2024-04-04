// Add this JavaScript code in a separate file named sign-up.js

document.addEventListener('DOMContentLoaded', function() {
  const cancelIcon = document.getElementById('cancel-icon');
  if (cancelIcon) {
    cancelIcon.addEventListener('click', function() {
      // Redirect to another page or perform any desired action when the cancel icon is clicked
      window.location.href = '../index.html'; // Replace 'index.html' with the desired destination
    });
  }
});
