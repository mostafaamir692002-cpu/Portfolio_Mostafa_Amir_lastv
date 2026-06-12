/* ============================================================
   OS MODAL — project case windows + system diagnostics.
   All project content renders from MOS.data.PROJECTS.
   ============================================================ */
(function (MOS) {
  "use strict";

  var diagInterval = null;

  function isArabic() {
    return (document.documentElement.getAttribute("lang") || "en") === "ar";
  }

  function close() {
    if (diagInterval) { clearInterval(diagInterval); diagInterval = null; }
    var modal = MOS.$("#osModal");
    if (modal) modal.classList.remove("is-active");
    document.body.classList.remove("is-locked");

    /* reset diagnostics CC toggle */
    var sysToggle = MOS.$('.toggle[data-c="sys"]');
    if (sysToggle && sysToggle.classList.contains("on")) {
      sysToggle.classList.remove("on");
      sysToggle.setAttribute("aria-pressed", "false");
      var st = sysToggle.querySelector(".st");
      if (st) {
        var stEn = st.querySelector(".lang-en");
        var stAr = st.querySelector(".lang-ar");
        if (stEn) stEn.textContent = "Standby";
        if (stAr) stAr.textContent = "استعداد";
      }
    }
  }

  function openProject(projectId) {
    var data = MOS.data.PROJECT_BY_ID[projectId];
    if (!data) return;
    var modal = MOS.$("#osModal"), pill = MOS.$("#modalPill"), body = MOS.$("#modalBody");
    if (!modal || !body || !pill) return;
    var isAr = isArabic();

    pill.textContent = "system://portfolio/project/" + projectId.toLowerCase().replace(/\s+/g, "-");

    var statBoxes = "";
    data.stats.forEach(function (s) {
      statBoxes += '<div class="modal-stat-box">' +
        '<div class="lbl">' + s.lbl + '</div>' +
        '<div class="val chrome-text">' + s.val + '</div>' +
        '<div class="desc">' + s.desc + '</div>' +
        '</div>';
    });

    var techsSpans = "";
    data.techs.forEach(function (t) { techsSpans += "<span>" + t + "</span>"; });

    var backBtnText = isAr ? "ارجع للنظام" : "Back to System";
    var launchBtnText = isAr ? "افتح المشروع" : "Launch Project";
    var metricsTitle = isAr ? "// النتايج بالأرقام" : "// IMPACT METRICS";
    var tag = isAr ? data.tag.ar : data.tag.en;

    body.innerHTML = '<div class="modal-header-hero">' +
      '<div class="modal-hero-glyph ' + data.glyphClass + '">' +
        '<span class="glyph chrome-text" style="font-size:74px;font-weight:900;font-family:\'Archivo\'">' + data.glyph + '</span>' +
      '</div>' +
      '<div class="modal-header-info">' +
        '<div class="tag">' + tag + '</div>' +
        '<h2>' + data.title + '</h2>' +
        '<div class="techs">' + techsSpans + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="modal-desc-grid">' +
      '<div class="modal-desc-col">' +
        (isAr ? '<div class="ar" style="margin-bottom:0">' + data.desc.ar + '</div>' : '<p style="margin-bottom:0">' + data.desc.en + '</p>') +
      '</div>' +
      '<div class="modal-stats-col">' +
        '<div><span style="font-family:\'JetBrains Mono\';font-size:11px;color:var(--blue-soft)">' + metricsTitle + '</span></div>' +
        statBoxes +
      '</div>' +
    '</div>' +
    '<div class="modal-footer">' +
      '<button class="modal-btn secondary" id="modalBackBtn">' + backBtnText + '</button>' +
      '<a href="' + data.link + '" class="modal-btn primary" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;">' +
        '<span>' + launchBtnText + '</span>' +
        '<svg class="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>' +
      '</a>' +
    '</div>';

    modal.classList.add("is-active");
    document.body.classList.add("is-locked");
    MOS.$("#modalBackBtn").addEventListener("click", close);
  }

  function openDiagnostics() {
    var modal = MOS.$("#osModal"), pill = MOS.$("#modalPill"), body = MOS.$("#modalBody");
    if (!modal || !body || !pill) return;
    var isAr = isArabic();

    pill.textContent = "system://os/diagnostics";

    var titleHtml = isAr ? "<h2>تشخيصات النظام Core v2.0</h2>" : "<h2>Mostafa.OS Core Diagnostic v2.0</h2>";
    var subtitleHtml = isAr ? '<div class="tag">تقرير التشخيص الذاتي</div>' : '<div class="tag">Diagnostics Report</div>';
    var spaceState = MOS.space.ready ? (isAr ? "شغّالة" : "Online") : (isAr ? "واقفة" : "Fallback");

    body.innerHTML = '<div class="diagnostics-panel">' +
      '<div class="modal-header-hero">' +
        '<div class="modal-hero-glyph metal" style="color:var(--cyan);background:rgba(100,212,255,0.1);border:1px solid var(--line);font-size:24px;font-weight:800;width:140px;height:140px;border-radius:20px;display:grid;place-items:center;">SYS</div>' +
        '<div class="modal-header-info">' +
          subtitleHtml + titleHtml +
          '<div class="techs">' +
            '<span>GSAP v3.12.5</span>' +
            '<span>Lenis v1.0.42</span>' +
            '<span>Three.js r128</span>' +
            '<span>ScrollTrigger</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="diag-grid">' +
        '<div class="diag-card">' +
          '<h5>' + (isAr ? "بيانات النظام الحية" : "SYSTEM RUNTIME") + '</h5>' +
          '<ul>' +
            '<li><b>' + (isAr ? "الحالة" : "Status") + ':</b> <span style="color:var(--green)">' + (isAr ? "شغّال ومتصل" : "Live & Online") + '</span></li>' +
            '<li><b>' + (isAr ? "طبقة الفضاء" : "Space Layer") + ':</b> <span>' + spaceState + '</span></li>' +
            '<li><b>' + (isAr ? "سرعة الاستجابة" : "Latency") + ':</b> <span id="diagPing">12ms</span></li>' +
            '<li><b>' + (isAr ? "معدل الإطارات" : "Frame Rate") + ':</b> <span id="diagFPS">60 FPS</span></li>' +
          '</ul>' +
        '</div>' +
        '<div class="diag-card">' +
          '<h5>' + (isAr ? "معايير واجهة الاستخدام" : "INTERFACE METRICS") + '</h5>' +
          '<ul>' +
            '<li><b>' + (isAr ? "محرك التمرير" : "Scroll Engine") + ':</b> Lenis Smooth Scroll</li>' +
            '<li><b>' + (isAr ? "تأثيرات الحركة" : "Motion Pref") + ':</b> ' + (MOS.REDUCE ? (isAr ? "حركة خفيفة" : "Reduced Motion") : (isAr ? "حركات غنية" : "Rich Animations")) + '</li>' +
            '<li><b>' + (isAr ? "شاشة العرض" : "Viewport") + ':</b> ' + window.innerWidth + "x" + window.innerHeight + '</li>' +
            '<li><b>' + (isAr ? "اللغة" : "Language") + ':</b> ' + (isAr ? "العربية" : "English") + '</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button class="modal-btn secondary" id="modalBackBtn">' + (isAr ? "ارجع للنظام" : "Back to System") + '</button>' +
      '</div>' +
      '</div>';

    modal.classList.add("is-active");
    document.body.classList.add("is-locked");
    MOS.$("#modalBackBtn").addEventListener("click", close);

    if (diagInterval) clearInterval(diagInterval);
    diagInterval = setInterval(function () {
      var pingEl = MOS.$("#diagPing");
      var fpsEl = MOS.$("#diagFPS");
      if (pingEl) pingEl.textContent = Math.round(10 + Math.random() * 8) + "ms";
      if (fpsEl) fpsEl.textContent = Math.round(58 + Math.random() * 2.5) + " FPS";
    }, 1000);
  }

  MOS.modal = { openProject: openProject, openDiagnostics: openDiagnostics, close: close };

  MOS.register("modal", function () {
    var closeBtn = MOS.$("#modalCloseBtn");
    var closeTxt = MOS.$("#modalCloseTxt");
    var modalBackdrop = MOS.$("#osModal");
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (closeTxt) closeTxt.addEventListener("click", close);
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) close();
      });
    }
    /* Escape closes the window — basic OS manners */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  });
})(window.MOS = window.MOS || {});
