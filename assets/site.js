   // Replaces the Squarespace scripts: mobile menu + header spacing
   document.addEventListener('DOMContentLoaded', function () {
     var header = document.querySelector('#header');
     var burgers = document.querySelectorAll('.header-burger-btn');

     // Open and close the mobile menu
     burgers.forEach(function (btn) {
       btn.addEventListener('click', function () {
         var open = document.body.classList.toggle('header--menu-open');
         burgers.forEach(function (b) { b.classList.toggle('burger--active', open); });
         if (header) { header.classList.toggle('white', !open); }
       });
     });

     // Leave room at the top of the page for the header
     var firstSection = document.querySelector('.page-section');
     function fixSpacing() {
       if (header && firstSection) {
         firstSection.style.paddingTop = header.offsetHeight + 'px';
       }
     }
     fixSpacing();
     window.addEventListener('resize', fixSpacing);
   });