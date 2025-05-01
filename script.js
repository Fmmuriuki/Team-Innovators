// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation for team members
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('mouseover', () => {
    member.querySelector('.member-img').style.transform = 'scale(1.1)';
    member.querySelector('h3').style.color = '#4e54c8';
  });
  
  member.addEventListener('mouseout', () => {
    member.querySelector('.member-img').style.transform = 'scale(1)';
    member.querySelector('h3').style.color = '#333';
  });
});

// Simple form submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    contactForm.reset();
  });
}