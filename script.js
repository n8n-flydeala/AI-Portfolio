console.log("Script connected successfully!");

// Simple contact alert
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("Message sent! 🚀");
    e.target.reset();
});