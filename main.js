// main.js for GRNDWG - The Green Dog Token
// Mobile menu toggle
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(function() {
  var menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      var mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) mobileMenu.classList.toggle('hidden');
    });
  }
  // Create stars background
  var stars = document.getElementById('stars');
  if (stars) {
    var count = 100;
    for (var i = 0; i < count; i++) {
      var star = document.createElement('div');
      star.classList.add('star');
      var x = Math.random() * 100;
      var y = Math.random() * 100;
      var size = Math.random() * 3;
      var opacity = Math.random() * 0.7 + 0.3;
      var duration = Math.random() * 3 + 2;
      star.style.left = x + '%';
      star.style.top = y + '%';
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.setProperty('--opacity', opacity);
      star.style.setProperty('--duration', duration + 's');
      stars.appendChild(star);
    }
  }
});
