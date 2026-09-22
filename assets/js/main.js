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
