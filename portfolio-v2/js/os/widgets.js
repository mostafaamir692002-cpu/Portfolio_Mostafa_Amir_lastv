/* ============================================================
   WIDGETS — live clock, real battery (with graceful mock),
   Cairo weather (sessionStorage cache, 30-min TTL)
   ============================================================ */
(function (MOS) {
  "use strict";

  MOS.register("widgets", function () {

    /* ---- live clock ---- */
    function tick() {
      var d = new Date();
      var h = d.getHours(), m = d.getMinutes();
      var hh = h % 12; if (hh === 0) hh = 12;
      var t = hh + ":" + MOS.pad(m);
      var sb = MOS.$("#sbTime");
      var wt = MOS.$("#wTime");
      var wd = MOS.$("#wDate");
      if (sb) sb.textContent = t;
      if (wt) wt.textContent = t;
      if (wd) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        wd.textContent = days[d.getDay()] + ", " + mon[d.getMonth()] + " " + d.getDate();
      }
    }
    tick(); setInterval(tick, 10000);

    /* ---- battery ---- */
    var bar = MOS.$(".batt i");
    function setBatteryUI(level) {
      if (!bar) return;
      var pct = Math.round(level * 100);
      bar.style.width = pct + "%";
      if (level < 0.2) bar.style.background = "var(--pink)";
      else if (level < 0.5) bar.style.background = "var(--orange)";
      else bar.style.background = "var(--green)";
    }
    function runFallbackBattery() {
      var mockLevel = 0.88;
      setBatteryUI(mockLevel);
      setInterval(function () {
        mockLevel = Math.max(0.05, mockLevel - 0.01);
        setBatteryUI(mockLevel);
      }, 300000);
    }
    if (navigator.getBattery) {
      navigator.getBattery().then(function (battery) {
        function updateBattery() { setBatteryUI(battery.level); }
        updateBattery();
        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);
      }).catch(runFallbackBattery);
    } else {
      runFallbackBattery();
    }

    /* ---- weather (cached) ---- */
    function getWeatherIcon(desc, isNight) {
      var d = (desc || "").toLowerCase();
      if (d.indexOf("rain") > -1 || d.indexOf("drizzle") > -1 || d.indexOf("shower") > -1) {
        return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 13a4 4 0 0 1-8 0V6a4 4 0 0 1 8 0v7z"/><path d="M8 19h.01M12 21h.01M16 19h.01M10 22h.01M14 22h.01"/></svg>';
      }
      if (d.indexOf("cloud") > -1 || d.indexOf("overcast") > -1 || d.indexOf("mist") > -1 || d.indexOf("fog") > -1 || d.indexOf("haze") > -1) {
        return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><path d="M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01"/></svg>';
      }
      if (isNight) {
        return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="fill:rgba(100,212,255,0.15);color:var(--blue-soft);"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      }
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="fill:rgba(255,210,100,0.15);color:var(--orange);"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    }

    function setWeatherUI(temp, desc, isNight) {
      var loc = MOS.$(".w-clock .loc");
      if (!loc) return;
      loc.innerHTML = getWeatherIcon(desc, isNight) + " Cairo · " + temp + "°C " + desc;
    }

    var CACHE_KEY = "mostafa-weather";
    var CACHE_TTL = 30 * 60 * 1000;
    function loadWeather() {
      try {
        var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
        if (cached && (Date.now() - cached.ts) < CACHE_TTL) {
          setWeatherUI(cached.temp, cached.desc, cached.isNight);
          return;
        }
      } catch (e) {}
      fetch("https://wttr.in/Cairo?format=j1")
        .then(function (res) { return res.json(); })
        .then(function (data) {
          var temp = data.current_condition[0].temp_C;
          var desc = data.current_condition[0].weatherDesc[0].value;
          var hours = new Date().getHours();
          var isNight = hours < 6 || hours > 18;
          try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ temp: temp, desc: desc, isNight: isNight, ts: Date.now() })); } catch (e) {}
          setWeatherUI(temp, desc, isNight);
        })
        .catch(function () {
          var hours = new Date().getHours();
          var isNight = hours < 6 || hours > 18;
          setWeatherUI(isNight ? "18" : "27", isNight ? "Clear" : "Sunny", isNight);
        });
    }
    /* perf: weather is decoration — fetch it when the main thread is idle */
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadWeather, { timeout: 4000 });
    } else {
      setTimeout(loadWeather, 2500);
    }
  });
})(window.MOS = window.MOS || {});
