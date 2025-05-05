document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Gallery Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
            item.classList.add('aos-init', 'aos-animate');
          } else {
            item.style.display = 'none';
            item.classList.remove('aos-animate');
          }
        });
      });
    });
  }

  // Lightbox Functionality
  const galleryLinks = document.querySelectorAll('.gallery-link');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="" alt="Lightbox Image" class="lightbox-img">
      <span class="lightbox-close">&times;</span>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightShirboxClose = lightbox.querySelector('.lightbox-close');

  galleryLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      lightboxImg.src = link.href;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightShirboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Newsletter Form Submission
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Simulate form submission
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }

  // Contact Form Submission
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('#name');
      const emailInput = contactForm.querySelector('#email');
      const phoneInput = contactForm.querySelector('#phone');
      const messageInput = contactForm.querySelector('#message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?\d{10,15}$/;

      if (!name) {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      if (phone && !phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (10-15 digits).');
        phoneInput.focus();
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        messageInput.focus();
        return;
      }

      // Simulate form submission
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});