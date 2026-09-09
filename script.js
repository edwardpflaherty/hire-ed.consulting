// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// One-time hero stat count-up (skipped for reduced-motion users)
(function () {
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var nums = document.querySelectorAll('.stat .num');
  if (prefersReduced || !nums.length) return;

  var targets = Array.prototype.map.call(nums, function (el) {
    return { el: el, text: el.textContent };
  });

  // Parse a leading integer out of strings like "75+", "$1.5M+", "30–40", "12+"
  function parseTarget(text) {
    var match = text.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
  }

  var duration = 900;
  var start = null;

  function animate(ts) {
    if (start === null) start = ts;
    var progress = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);

    targets.forEach(function (t) {
      var target = parseTarget(t.text);
      if (target === null) return;
      var current = Math.round(target * eased);
      t.el.textContent = t.text.replace(/[\d.]+/, current);
    });

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      targets.forEach(function (t) { t.el.textContent = t.text; });
    }
  }

  var hero = document.querySelector('.hero');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  if (hero) observer.observe(hero);
})();
