// Shared behaviour for every page.

(function () {
  "use strict";

  // Mobile nav toggle. The nav starts visible so it still works without JS;
  // we only collapse it once we know the script is running on a small screen.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var small = window.matchMedia("(max-width: 700px)");

  function collapseIfSmall() {
    if (!nav || !toggle) return;
    var isSmall = small.matches;
    nav.hidden = isSmall;
    toggle.setAttribute("aria-expanded", String(!isSmall));
  }

  if (toggle && nav) {
    collapseIfSmall();
    small.addEventListener("change", collapseIfSmall);

    toggle.addEventListener("click", function () {
      var open = nav.hidden;
      nav.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Keep the footer year current.
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });

  // Smooth scroll for same-page anchor links.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
