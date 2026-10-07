document.documentElement.classList.replace("no-js", "js");

var reveals = document.querySelectorAll(".js-reveal");

if ("IntersectionObserver" in window && reveals.length) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
} else {
  reveals.forEach(function (el) {
    el.classList.add("is-visible");
  });
}

// Pestaña activa del menú: sigue a la sección que cruza el 35 % superior de la
// pantalla. Sólo aplica a los enlaces #ancla (la landing); en las páginas de
// proyecto los enlaces son /#ancla y la pestaña ya viene marcada en el HTML.
var navLinks = Array.prototype.slice.call(
  document.querySelectorAll('.site-nav a[href^="#"]')
);
var navSections = navLinks
  .map(function (a) {
    return document.getElementById(a.getAttribute("href").slice(1));
  })
  .filter(Boolean);

function updateActiveTab() {
  var current = navSections[0];
  var atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;

  if (atBottom) {
    // La última sección es corta y nunca llegaría a cruzar la línea.
    current = navSections[navSections.length - 1];
  } else {
    var line = window.innerHeight * 0.35;
    navSections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) current = section;
    });
  }

  navLinks.forEach(function (a) {
    if (a.getAttribute("href") === "#" + current.id) {
      a.setAttribute("aria-current", "true");
    } else {
      a.removeAttribute("aria-current");
    }
  });
}

if (navSections.length) {
  var ticking = false;
  var schedule = function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      updateActiveTab();
    });
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  updateActiveTab();
}
