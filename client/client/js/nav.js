 // src/client/js/nav.js
 document.addEventListener('DOMContentLoaded', () => {
   const menuLinks = document.querySelectorAll('#NavMenu a');
   menuLinks.forEach(link => {
     link.addEventListener('click', e => {
       e.preventDefault();
       const targetId = link.getAttribute('href');
       const target = document.querySelector(targetId);
       if (target) {
         window.scrollTo({
           top: target.offsetTop - 70,
           behavior: 'smooth'
         });
         // update active link
         menuLinks.forEach(l => l.classList.remove('active'));
         link.classList.add('active');
       }
     });
   });
 });