/* ============================================================
   LANGUAGE — EN/AR switching with GSAP page transition,
   localStorage persistence, RTL sync
   ============================================================ */
(function (MOS) {
  "use strict";

  function applyLangChanges(lang) {
    document.documentElement.setAttribute("lang", lang);
    MOS.state.lang = lang;
    try { localStorage.setItem("mostafa-os-lang", lang); } catch (e) {}

    MOS.$$(".lang-switcher").forEach(function (s) {
      s.querySelectorAll("span").forEach(function (sp) {
        var isTarget = sp.getAttribute("data-lang") === lang;
        sp.classList.toggle("active", isTarget);
        sp.setAttribute("aria-checked", isTarget ? "true" : "false");
      });
    });

    /* resync the disciplines readout (modeAr visibility) */
    if (MOS.setMode) {
      var activeModeBtn = MOS.$(".mode.active");
      if (activeModeBtn) {
        var modeIdx = parseInt(activeModeBtn.getAttribute("data-mode"), 10);
        MOS.setMode(isNaN(modeIdx) ? 0 : modeIdx);
      }
    }
  }

  function switchLanguage(lang) {
    if (document.documentElement.getAttribute("lang") === lang) return;

    function afterSwap() {
      if (MOS.carousel) { MOS.carousel.buildDots(); MOS.carousel.go(0); }
    }

    if (MOS.hasGSAP() && !MOS.REDUCE) {
      window.gsap.to(".shell", {
        opacity: 0, y: 12, duration: 0.35, ease: "power2.out",
        onComplete: function () {
          applyLangChanges(lang);
          afterSwap();
          window.gsap.to(".shell", { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
        }
      });
    } else {
      applyLangChanges(lang);
      afterSwap();
    }
  }

  MOS.register("lang", function () {
    var savedLang = "en";
    try { savedLang = localStorage.getItem("mostafa-os-lang") || "en"; } catch (e) {}
    applyLangChanges(savedLang);

    MOS.$$(".lang-switcher span").forEach(function (sp) {
      function triggerSwitch(e) {
        e.stopPropagation();
        switchLanguage(sp.getAttribute("data-lang"));
      }
      sp.addEventListener("click", triggerSwitch);
      sp.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerSwitch(e);
        }
      });
    });
  });
})(window.MOS = window.MOS || {});
