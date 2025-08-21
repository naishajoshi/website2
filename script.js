 (function () {
   const navToggle = document.getElementById('navToggle');
   const mobileMenu = document.getElementById('mobileMenu');
   if (navToggle && mobileMenu) {
     navToggle.addEventListener('click', () => {
       const expanded = navToggle.getAttribute('aria-expanded') === 'true';
       navToggle.setAttribute('aria-expanded', String(!expanded));
       if (mobileMenu.hasAttribute('hidden')) {
         mobileMenu.removeAttribute('hidden');
       } else {
         mobileMenu.setAttribute('hidden', '');
       }
     });
   }

   // Smooth scroll for internal links
   document.addEventListener('click', (e) => {
     const target = e.target;
     if (target && target.closest) {
       const link = target.closest('a[href^="#"]');
       if (link && link.getAttribute('href') && link.getAttribute('href').length > 1) {
         const id = link.getAttribute('href').slice(1);
         const el = document.getElementById(id);
         if (el) {
           e.preventDefault();
           el.scrollIntoView({ behavior: 'smooth', block: 'start' });
           if (mobileMenu && !mobileMenu.hasAttribute('hidden')) {
             mobileMenu.setAttribute('hidden', '');
             navToggle && navToggle.setAttribute('aria-expanded', 'false');
           }
         }
       }
     }
   });
 })();
