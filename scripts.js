// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Basic contact form submission feedback
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you shortly.');
      contactForm.reset();
    });
  });
  document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("backgroundVideo");
  
  // Set start and end times
  const startTime = 0;  // Start at 5 seconds
  const endTime = 8;   // Loop before subtitles at 15 seconds

  // Jump to the start time when video loads
  video.currentTime = startTime;

  // Check the current time and reset when it reaches the endTime
  video.addEventListener("timeupdate", function() {
      if (video.currentTime >= endTime) {
          video.currentTime = startTime; // Reset to start time
          video.play(); // Continue playing
      }
  });
});