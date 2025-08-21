
  // Highlight current section on scroll
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
  sections.forEach((s) => observer.observe(s));