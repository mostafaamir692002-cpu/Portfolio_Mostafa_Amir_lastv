/* ============================================================
   INTERACTIONS — hero mouse parallax, glass specular highlight,
   custom cursor, mobile menu
   ============================================================ */
(function (MOS) {
  "use strict";

  /* ---- hero parallax + glass specular ---- */
  MOS.register("interactions", function () {
    if (!MOS.REDUCE) {
      var pxEls = MOS.$$("[data-px]");
      var root = MOS.$("[data-parallax-root]");
      if (root && pxEls.length) {
        var raf2 = null;
        root.addEventListener("mousemove", function (e) {
          if (!MOS.state.isAIActive) return;
          var r = root.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
          var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
          if (raf2) cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(function () {
            pxEls.forEach(function (el) {
              var d = parseFloat(el.getAttribute("data-px")) || 0.3;
              var tx = (-dx * 22 * d).toFixed(2), ty = (-dy * 18 * d).toFixed(2);
              if (MOS.hasGSAP()) window.gsap.to(el, { x: tx, y: ty, duration: .6, ease: "power2.out" });
              else el.style.transform = "translate(" + tx + "px," + ty + "px)";
            });
          });
        });
        root.addEventListener("mouseleave", function () {
          pxEls.forEach(function (el) {
            if (MOS.hasGSAP()) window.gsap.to(el, { x: 0, y: 0, duration: .8, ease: "power2.out" });
            else el.style.transform = "none";
          });
          /* reset perspective tilt */
          if (MOS.hasGSAP()) window.gsap.to(root, { rotateX: 0, rotateY: 0, duration: 1, ease: "power3.out" });
        });

        /* perspective tilt on the hero window itself (subtle 3-D card feel) */
        root.style.transformStyle = "preserve-3d";
        root.style.perspective = "1200px";
        root.addEventListener("mousemove", function (e) {
          if (!MOS.state.isAIActive) return;
          var r = root.getBoundingClientRect();
          var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          if (MOS.hasGSAP()) {
            window.gsap.to(root, {
              rotateY: dx * 4,
              rotateX: -dy * 3,
              duration: .8,
              ease: "power2.out"
            });
          }
        });
      }
    }

    if (!MOS.REDUCE && MOS.FINE) {
      MOS.$$(".glass").forEach(function (g) {
        g.addEventListener("pointermove", function (e) {
          if (!MOS.state.isAIActive) return;
          var r = g.getBoundingClientRect();
          g.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
          g.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
        });
      });
    }

    /* ---- active nav link tracking (IntersectionObserver) ---- */
    if (window.IntersectionObserver) {
      var navLinks = MOS.$$(".dock-links a");
      if (navLinks.length) {
        var sectionIds = ["work", "about", "systems", "modes", "contact"];
        var activeObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = "#" + entry.target.id;
            navLinks.forEach(function (a) {
              a.classList.toggle("active", a.getAttribute("href") === id);
            });
          });
        }, { threshold: 0.22, rootMargin: "-70px 0px -38% 0px" });

        sectionIds.forEach(function (id) {
          var el = document.getElementById(id);
          if (el) activeObserver.observe(el);
        });

        /* clear active when back at hero */
        var heroObserver = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            navLinks.forEach(function (a) { a.classList.remove("active"); });
          }
        }, { threshold: 0.4 });
        var hero = document.getElementById("top");
        if (hero) heroObserver.observe(hero);
      }
    }
  });

  /* ---- custom cursor (dot + aura) ---- */
  MOS.register("cursor", function () {
    if (!MOS.FINE || MOS.REDUCE) return;
    var dot = MOS.$("#cursorDot"), aura = MOS.$("#cursorAura");
    if (!dot || !aura) return;
    document.body.classList.add("cursor-on");

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var ax = mx, ay = my;
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    }, { passive: true });
    (function loop() {
      ax = MOS.lerp(ax, mx, 0.16);
      ay = MOS.lerp(ay, my, 0.16);
      aura.style.left = ax + "px";
      aura.style.top = ay + "px";
      requestAnimationFrame(loop);
    })();

    /* aura grows over interactive elements (delegated — survives re-renders) */
    var HOVER = "a, button, .work-card, .toggle, .mode, .channel, .navbtn, .lang-switcher, .theme-toggle, .name-target";
    document.addEventListener("pointerover", function (e) {
      if (e.target.closest && e.target.closest(HOVER)) document.body.classList.add("cursor-hover");
    });
    document.addEventListener("pointerout", function (e) {
      if (e.target.closest && e.target.closest(HOVER)) document.body.classList.remove("cursor-hover");
    });
  });

  /* ---- mobile menu ---- */
  MOS.register("menu", function () {
    var burger = MOS.$("#burger");
    var mobileMenu = MOS.$("#mobileMenu");
    var menuOpen = false;
    function closeMobileMenu() {
      menuOpen = false;
      if (mobileMenu) mobileMenu.classList.remove("is-open");
    }
    if (burger) {
      burger.addEventListener("click", function (e) {
        e.stopPropagation();
        menuOpen = !menuOpen;
        if (mobileMenu) mobileMenu.classList.toggle("is-open", menuOpen);
      });
    }
    document.addEventListener("click", function (e) {
      if (menuOpen && mobileMenu && !mobileMenu.contains(e.target) && e.target !== burger) closeMobileMenu();
    });
    if (mobileMenu) {
      mobileMenu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeMobileMenu);
      });
    }
  });
})(window.MOS = window.MOS || {});
