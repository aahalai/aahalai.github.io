// Replaces the Squarespace scripts: mobile menu + header spacing
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('#header');
  var burgers = document.querySelectorAll('.header-burger-btn');
  var headerTheme = header ? header.getAttribute('data-section-theme') : '';

  // Open and close the mobile menu
  burgers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('header--menu-open');
      burgers.forEach(function (b) { b.classList.toggle('burger--active', open); });
      if (header) {
        header.classList.toggle('white', !open);
        header.setAttribute('data-section-theme', open ? '' : headerTheme);
      }
      // Screen readers: announce "Close Menu" when open, "Open Menu" when closed
      document.querySelectorAll('.js-header-burger-open-title').forEach(function (t) { t.hidden = open; });
      document.querySelectorAll('.js-header-burger-close-title').forEach(function (t) { t.hidden = !open; });
    });
  });

  // Leave room for the header at the top of the page and the mobile menu
  var firstSection = document.querySelector('.page-section');
  var menu = document.querySelector('.header-menu');
  function fixSpacing() {
    if (!header) { return; }
    var height = header.offsetHeight + 'px';
    if (firstSection) { firstSection.style.paddingTop = height; }
    if (menu) { menu.style.paddingTop = height; }
  }
  fixSpacing();
  window.addEventListener('resize', fixSpacing);
});
