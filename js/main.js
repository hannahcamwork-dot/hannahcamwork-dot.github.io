/*
 * Site behaviour. Progressive enhancement only: every page reads and
 * navigates correctly without this file.
 */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var label = toggle ? toggle.querySelector(".nav-toggle__label") : null;
  var behind = document.querySelectorAll("main, .site-footer");
  var mobile = window.matchMedia("(max-width: 64em)");

  function setOpen(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (label) label.textContent = open ? "Close" : "Menu";
    for (var i = 0; i < behind.length; i++) behind[i].inert = open;
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    var onBreakpoint = function (event) {
      if (!event.matches) setOpen(false);
    };
    if (mobile.addEventListener) mobile.addEventListener("change", onBreakpoint);
    else if (mobile.addListener) mobile.addListener(onBreakpoint);
  }

  /* ---------- Reveal on scroll (below the fold only) ---------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll("[data-reveal]");

  if (!reduceMotion && "IntersectionObserver" in window && targets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    var fold = window.innerHeight * 0.94;
    targets.forEach(function (el) {
      if (el.getBoundingClientRect().top > fold) {
        el.classList.add("reveal");
        observer.observe(el);
      }
    });
  }

  /* ---------- Copy email address ---------- */

  var copyButton = document.querySelector("[data-copy]");

  if (copyButton && navigator.clipboard && window.isSecureContext) {
    var status = document.querySelector(".copy-status");
    var timer;
    copyButton.hidden = false;
    copyButton.addEventListener("click", function () {
      navigator.clipboard.writeText(copyButton.getAttribute("data-copy")).then(
        function () {
          status.textContent = "Copied to clipboard.";
          clearTimeout(timer);
          timer = setTimeout(function () {
            status.textContent = "";
          }, 3000);
        },
        function () {
          status.textContent = "Couldn’t copy. Select the address above instead.";
        }
      );
    });
  }
})();
