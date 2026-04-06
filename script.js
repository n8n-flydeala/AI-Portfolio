// SCROLL REVEAL
const revealElements = document.querySelectorAll('.fade-up, .fade-delay, .fade-delay-2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

revealElements.forEach(el => observer.observe(el));


// SIMPLE CONTACT FORM (LOCAL ONLY)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Demo only)");
});