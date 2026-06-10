/* ============================================================
   MAIN — boot order for Mostafa.OS V2.
   Each module registered itself via MOS.register();
   this file decides the sequence. Loaded last.
   ============================================================ */
(function (MOS) {
  "use strict";

  var ORDER = [
    "space",          // WebGL world first — boot drives its convergence
    "scroll",         // Lenis + progress (space camera reads scrollProgress)
    "reveals",        // scroll-in system
    "widgets",        // clock / battery / weather
    "carousel",       // renders work cards from data (before lang sync)
    "modes",          // disciplines selector
    "modal",          // modal close bindings
    "controlCenter",  // toggles
    "selMenu",        // hero name easter egg
    "interactions",   // parallax / specular
    "cursor",         // custom cursor
    "menu",           // mobile burger
    "lang",           // restores saved language (after carousel render)
    "theme",          // restores saved theme (may sleep the space layer)
    "boot"            // last: starts the cinematic boot → heroIntro
  ];

  function run() {
    ORDER.forEach(function (name) {
      var init = MOS.modules[name];
      if (!init) return;
      try { init(); }
      catch (e) { console.warn("[MOS] module failed:", name, e); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})(window.MOS = window.MOS || {});
