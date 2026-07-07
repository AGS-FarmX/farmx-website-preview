(function (global) {
  const STROKE = "1.8";

  function icon(paths) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  }

  const ICONS = {
    connected: icon(`
      <circle cx="5" cy="12" r="2"/>
      <circle cx="12" cy="5" r="2"/>
      <circle cx="19" cy="12" r="2"/>
      <circle cx="12" cy="19" r="2"/>
      <path d="M7 12h3M14 12h3M12 7v3M12 14v3"/>
      <path d="M8.5 9.5l2 1M15.5 9.5l-2 1M8.5 14.5l2-1M15.5 14.5l-2-1"/>
    `),
    intelligent: icon(`
      <path d="M8 4c-1.5 1.5-3 3-3 5.5 0 2 1 3.5 2 4.5-1 1-2 2.5-2 4.5 0 2.5 2 4.5 4 4.5s4-2 4-4.5c0-2-1-3.5-2-4.5 1-1 2-2.5 2-4.5C17 7 15.5 5.5 14 4"/>
      <path d="M12 8v8M9.5 11h5M9.5 14h5"/>
      <path d="M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>
    `),
    actionable: icon(`
      <circle cx="12" cy="12" r="9"/>
      <path d="M8.5 12.5l2.5 2.5 5-5"/>
    `),
    people: icon(`
      <circle cx="9" cy="8" r="3"/>
      <circle cx="17" cy="9" r="2.5"/>
      <path d="M4 19c0-3 2.5-5 5-5"/>
      <path d="M14 19c0-2.5 1.8-4 4-4"/>
    `),
    operations: icon(`
      <path d="M9 6h10M9 12h10M9 18h7"/>
      <path d="M5 6l1 1 2-2M5 12l1 1 2-2M5 18l1 1 2-2"/>
    `),
    assets: icon(`
      <path d="M4 17h11"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="14" cy="17" r="2"/>
      <path d="M9 17V11h4l2-3h3"/>
    `),
    water: icon(`
      <path d="M12 3c3.5 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2.5-6 6-11z"/>
    `),
    machinery: icon(`
      <circle cx="7" cy="17" r="2"/>
      <circle cx="15" cy="17" r="2"/>
      <path d="M5 17h4V12h4l2-3"/>
      <circle cx="18" cy="6" r="2"/>
      <path d="M18 4.5v1M18 8.5v1M16.5 6h-1M19.5 6h1"/>
    `),
    agronomy: icon(`
      <path d="M12 20V10"/>
      <path d="M8 14c-2-4 0-8 4-8s6 4 4 8"/>
    `),
    stores: icon(`
      <path d="M4 9l8-4 8 4v10H4z"/>
      <path d="M9 19V12h6v7"/>
    `),
    finance: icon(`
      <path d="M4 18h16"/>
      <path d="M7 14l3-4 3 3 4-6"/>
    `),
    compliance: icon(`
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>
      <path d="M9.5 12l2 2 4-4"/>
    `),
    ai: icon(`
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
      <path d="M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/>
      <circle cx="12" cy="12" r="1"/>
    `),
    gps: icon(`
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
      <circle cx="12" cy="12" r="9"/>
    `),
    analytics: icon(`
      <path d="M5 18V10M10 18V6M15 18v-5M20 18v-8"/>
    `),
    platform: icon(`
      <path d="M12 3l6.5 3.75v7.5L12 18l-6.5-3.75v-7.5z"/>
      <path d="M12 8v8M8.5 10l7 4"/>
    `),
    robotics: icon(`
      <rect x="7" y="8" width="10" height="9" rx="2"/>
      <path d="M10 8V6M14 8V6M9 14h6"/>
      <path d="M4 12H7M17 12h3"/>
    `),
    "data-layers": icon(`
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/>
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>
    `),
    scalable: icon(`
      <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5"/>
    `),
    "cpu-chip": icon(`
      <rect x="7" y="7" width="10" height="10" rx="2"/>
      <path d="M9 7V5M12 7V4M15 7V5M9 17v2M12 17v3M15 17v2M7 9H5M7 12H4M7 15H5M17 9h2M17 12h3M17 15h2"/>
    `),
    target: icon(`
      <circle cx="12" cy="12" r="8"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="12" r="1"/>
    `),
    layers: icon(`
      <path d="M12 3l8 4.5-8 4.5-8-4.5z"/>
      <path d="M4 12l8 4.5 8-4.5"/>
      <path d="M4 16.5l8 4.5 8-4.5"/>
    `),
    "trend-up": icon(`
      <path d="M4 18h16"/>
      <path d="M7 15l4-4 3 3 5-6"/>
    `),
    "check-circle": icon(`
      <circle cx="12" cy="12" r="9"/>
      <path d="M8.5 12.5l2.5 2.5 5-5"/>
    `),
    globe: icon(`
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9"/>
    `),
    history: icon(`
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
      <path d="M8 3.5A9 9 0 0 0 3 12"/>
    `),
    eye: icon(`
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
      <circle cx="12" cy="12" r="3"/>
    `),
    alert: icon(`
      <path d="M12 4l8 14H4z"/>
      <path d="M12 10v4M12 17h.01"/>
    `),
    bank: icon(`
      <path d="M4 10h16"/>
      <path d="M6 10V18M10 10v8M14 10v8M18 10v8"/>
      <path d="M3 18h18"/>
      <path d="M12 4l9 6H3z"/>
    `),
    settings: icon(`
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
    `),
    sprout: icon(`
      <path d="M12 20V10"/>
      <path d="M8 14c-2-3 0-6 4-6"/>
      <path d="M16 14c2-3 0-6-4-6"/>
      <path d="M4 20h16"/>
    `),
    tag: icon(`
      <path d="M4 12l8-8h5v5l-8 8z"/>
      <circle cx="14.5" cy="9.5" r="1"/>
    `),
    farm: icon(`
      <path d="M4 18V10l8-5 8 5v8"/>
      <path d="M9 18v-5h6v5"/>
      <path d="M12 5V3"/>
    `),
    building: icon(`
      <rect x="5" y="8" width="14" height="12" rx="1"/>
      <path d="M9 12h2M13 12h2M9 16h2M13 16h2M12 4v4"/>
    `),
    government: icon(`
      <path d="M4 10h16"/>
      <path d="M6 10V18M10 10v8M14 10v8M18 10v8"/>
      <path d="M12 4l7 6H5z"/>
      <path d="M3 18h18"/>
    `),
    link: icon(`
      <path d="M10 13a4 4 0 0 0 5.7.3l2-2a4 4 0 0 0-5.7-5.7l-1 1"/>
      <path d="M14 11a4 4 0 0 0-5.7-.3l-2 2a4 4 0 0 0 5.7 5.7l1-1"/>
    `),
    mail: icon(`
      <rect x="4" y="6" width="16" height="12" rx="2"/>
      <path d="M4 8l8 5 8-5"/>
    `),
    user: icon(`
      <circle cx="12" cy="8" r="3.5"/>
      <path d="M5 19c0-3.5 3.1-5.5 7-5.5s7 2 7 5.5"/>
    `),
    briefcase: icon(`
      <rect x="4" y="8" width="16" height="11" rx="2"/>
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M4 13h16"/>
    `),
    newspaper: icon(`
      <path d="M5 5h14v14H5z"/>
      <path d="M8 9h8M8 13h5M8 17h8"/>
    `),
    code: icon(`
      <path d="M9 8l-4 4 4 4"/>
      <path d="M15 8l4 4-4 4"/>
    `),
    design: icon(`
      <path d="M4 20l4-10 6 6z"/>
      <path d="M13 7l3-3 4 4-3 3"/>
    `),
    wrench: icon(`
      <path d="M14 4a4.5 4.5 0 0 1 2.5 8.2L8 21l-3-3 8.5-8.5A4.5 4.5 0 0 1 14 4z"/>
    `),
    nodes: icon(`
      <circle cx="6" cy="6" r="2"/>
      <circle cx="18" cy="6" r="2"/>
      <circle cx="12" cy="18" r="2"/>
      <path d="M8 7l3 9M16 7l-3 9M8 6h8"/>
    `),
    "service-provider": icon(`
      <path d="M12 3l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"/>
      <path d="M6 18h12"/>
    `),
  };

  function getIcon(name) {
    return ICONS[name] || "";
  }

  function initIconBadges(root) {
    const scope = root || document;
    scope.querySelectorAll("[data-icon]").forEach((el) => {
      const name = el.getAttribute("data-icon");
      const svg = ICONS[name];
      if (!svg) {
        return;
      }
      if (!el.querySelector("svg")) {
        el.innerHTML = svg;
      }
      el.setAttribute("aria-hidden", "true");
    });
  }

  global.FarmXIcons = {
    ICONS,
    getIcon,
    initIconBadges,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initIconBadges());
  } else {
    initIconBadges();
  }
})(window);
