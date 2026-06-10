/* ============================================================
   WORK CAROUSEL — renders cards from MOS.data.PROJECTS
   (data-driven: edit js/data/projects.js, nothing else),
   arrows + dots + pointer drag, modal on click
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.register("carousel", function () {
    var track = MOS.$("#workTrack");
    var prevB = MOS.$("#prevBtn"), nextB = MOS.$("#nextBtn");
    var dotsWrap = MOS.$("#workDots");
    if (!track) return;

    /* ---- render cards from data ---- */
    track.innerHTML = MOS.data.PROJECTS.map(function (p) {
      function metas(list) {
        return list.map(function (m) { return "<span>" + m + "</span>"; }).join("");
      }
      return '<article class="work-card" data-project="' + p.id + '">' +
        '<div class="wc-vis ' + p.glyphClass + '"><span class="glyph chrome-text">' + p.glyph + '</span></div>' +
        '<div class="wc-body">' +
          '<div class="tag"><span class="lang-en">' + p.tag.en + '</span><span class="lang-ar">' + p.tag.ar + '</span></div>' +
          '<h3>' + p.id + '</h3>' +
          '<p class="lang-en">' + p.card.en + '</p>' +
          '<p class="lang-ar" style="font-family:\'Noto Sans Arabic\';direction:rtl;text-align:right;">' + p.card.ar + '</p>' +
          '<div class="wc-meta lang-en">' + metas(p.meta.en) + '</div>' +
          '<div class="wc-meta lang-ar">' + metas(p.meta.ar) + '</div>' +
        '</div>' +
      '</article>';
    }).join("");

    /* open project modal on click */
    MOS.$$(".work-card", track).forEach(function (card) {
      card.addEventListener("click", function () {
        MOS.modal.openProject(card.getAttribute("data-project"));
      });
    });

    /* ---- carousel engine ---- */
    var idx = 0;
    function perView() { var w = window.innerWidth; return w <= 720 ? 1 : (w <= 1080 ? 2 : 3); }
    function maxIdx() { var n = track.children.length; return Math.max(0, n - perView()); }
    function step() {
      if (!track.children.length) return 0;
      var card = track.children[0];
      var style = getComputedStyle(track);
      var gap = parseFloat(style.columnGap || style.gap || "20") || 20;
      return card.getBoundingClientRect().width + gap;
    }
    function go(i) {
      idx = MOS.clamp(i, 0, maxIdx());
      track.style.transform = "translateX(" + (-idx * step()) + "px)";
      if (prevB) prevB.disabled = idx <= 0;
      if (nextB) nextB.disabled = idx >= maxIdx();
      syncDots();
    }
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      var pages = maxIdx() + 1;
      for (var k = 0; k < pages; k++) {
        (function (k) {
          var d = document.createElement("i");
          d.addEventListener("click", function () { go(k); });
          dotsWrap.appendChild(d);
        })(k);
      }
      syncDots();
    }
    function syncDots() {
      if (!dotsWrap) return;
      Array.prototype.forEach.call(dotsWrap.children, function (d, k) {
        d.classList.toggle("active", k === idx);
      });
    }
    if (nextB) nextB.addEventListener("click", function () { go(idx + 1); });
    if (prevB) prevB.addEventListener("click", function () { go(idx - 1); });
    buildDots(); go(0);

    var rtm;
    window.addEventListener("resize", function () {
      clearTimeout(rtm);
      rtm = setTimeout(function () {
        buildDots(); go(Math.min(idx, maxIdx()));
        if (MOS.hasGSAP() && window.ScrollTrigger) { try { window.ScrollTrigger.refresh(); } catch (e) {} }
      }, 200);
    });

    /* ---- pointer drag (the CSS promised grab — now it delivers) ---- */
    var wrap = MOS.$(".work-track-wrap");
    if (wrap && window.PointerEvent) {
      var dragging = false, startX = 0, delta = 0, baseOffset = 0;
      wrap.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "mouse" && e.button !== 0) return;
        dragging = true; startX = e.clientX; delta = 0;
        baseOffset = -idx * step();
        wrap.setPointerCapture(e.pointerId);
        track.style.transition = "none";
      });
      wrap.addEventListener("pointermove", function (e) {
        if (!dragging) return;
        delta = e.clientX - startX;
        if (Math.abs(delta) > 8) wrap.classList.add("is-dragging");
        track.style.transform = "translateX(" + (baseOffset + delta) + "px)";
      });
      function endDrag() {
        if (!dragging) return;
        dragging = false;
        track.style.transition = "";
        wrap.classList.remove("is-dragging");
        if (delta < -60) go(idx + 1);
        else if (delta > 60) go(idx - 1);
        else go(idx);
        delta = 0;
      }
      wrap.addEventListener("pointerup", endDrag);
      wrap.addEventListener("pointercancel", endDrag);
    }

    /* expose for lang switch re-layout */
    MOS.carousel = { go: go, buildDots: buildDots };

    /* ---- 3D tilt on cards (calm: ±3.5deg) ---- */
    if (!MOS.REDUCE && MOS.FINE) {
      MOS.$$(".work-card", track).forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
          var rect = card.getBoundingClientRect();
          var dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
          var dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
          var rx = (dy * -3.5).toFixed(2), ry = (dx * 3.5).toFixed(2);
          if (MOS.hasGSAP()) {
            window.gsap.to(card, { rotateX: rx, rotateY: ry, transformPerspective: 600, ease: "power2.out", duration: 0.4 });
          } else {
            card.style.transform = "perspective(600px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
          }
        });
        card.addEventListener("mouseleave", function () {
          if (MOS.hasGSAP()) window.gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power2.out" });
          else card.style.transform = "none";
        });
      });
    }
  });
})(window.MOS = window.MOS || {});
