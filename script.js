// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    const errorElements = contactForm.querySelectorAll('.error-text');
    errorElements.forEach(el => el.classList.add('hidden'));
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
      document.querySelector('#name + .error-text').classList.remove('hidden');
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
      document.querySelector('#email + .error-text').classList.remove('hidden');
      isValid = false;
    }
    
    // Validate subject
    if (subject === '') {
      document.querySelector('#subject + .error-text').classList.remove('hidden');
      isValid = false;
    }
    
    // Validate message
    if (message === '') {
      document.querySelector('#message + .error-text').classList.remove('hidden');
      isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
      // In a real application, you would send the form data to a server here
      // For this example, we'll just show a success message
      const formMessage = document.getElementById('form-message');
      formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
      formMessage.className = 'mt-4 text-center form-success';
      formMessage.classList.remove('hidden');
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    }
  });
}

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  // Fade in elements when they come into view
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  // Skill bar animations
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.setProperty('--target-width', width);
    bar.style.width = '0';
    
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.style.getPropertyValue('--target-width');
        }
      });
    }, {
      threshold: 0.5
    });
    
    skillObserver.observe(bar);
  });
  
  // Project card hover effect enhancement
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    header.style.background = 'white';
    header.style.backdropFilter = 'none';
  }
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add appear class to elements that are already in view
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add('appear');
    }
  });
});