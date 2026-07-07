(function () {
  const CX = 300;
  const CY = 300;
  const RADIUS = 228;

  const NODES = [
    {
      id: "people",
      label: "People",
      description: "Your greatest asset.",
      bullets: [
        "HR & Payroll",
        "Attendance",
        "Skills & Training",
        "Performance",
        "Roles & Permissions",
      ],
      icon: "people",
    },
    {
      id: "operations",
      label: "Operations",
      description: "Daily work, planned and executed.",
      bullets: [
        "Tasks",
        "Planning",
        "Scheduling",
        "Supervision",
        "Field Execution",
      ],
      icon: "operations",
    },
    {
      id: "assets",
      label: "Assets",
      description: "Every machine, vehicle and implement under control.",
      bullets: [
        "Asset Register",
        "Maintenance",
        "Service History",
        "Utilisation",
        "Workshop Records",
      ],
      icon: "assets",
    },
    {
      id: "water",
      label: "Water",
      description: "Irrigation visibility from source to crop.",
      bullets: [
        "Pivots",
        "Orchards",
        "Pumps",
        "Reservoirs",
        "Flow & Pressure",
      ],
      icon: "water",
    },
    {
      id: "machinery",
      label: "Machinery",
      description: "Understand machinery use and efficiency.",
      bullets: [
        "Machine Hours",
        "Operators",
        "Fuel Use",
        "Utilisation",
        "Downtime",
      ],
      icon: "machinery",
    },
    {
      id: "agronomy",
      label: "Agronomy",
      description: "Turn field knowledge into action.",
      bullets: [
        "Crop Plans",
        "Scouting",
        "Spray Records",
        "Nutrition",
        "Phenology",
      ],
      icon: "agronomy",
    },
    {
      id: "stores",
      label: "Stores",
      description: "Control inputs, stock and issuing.",
      bullets: [
        "Seed",
        "Fertiliser",
        "Chemicals",
        "Fuel",
        "Spare Parts",
      ],
      icon: "stores",
    },
    {
      id: "finance",
      label: "Finance",
      description: "Connect operations to cost and profitability.",
      bullets: [
        "Budgets",
        "Cost Tracking",
        "Project Profitability",
        "Operational Spend",
        "Management Visibility",
      ],
      icon: "finance",
    },
    {
      id: "compliance",
      label: "Compliance",
      description: "Governance built into operations.",
      bullets: [
        "Audits",
        "Inspections",
        "Certifications",
        "Health & Safety",
        "Approvals",
      ],
      icon: "compliance",
    },
    {
      id: "ai",
      label: "AI",
      description: "Intelligence that understands the farm.",
      bullets: [
        "AI Assistants",
        "Decision Support",
        "Risk Alerts",
        "Operational Questions",
        "Learning System",
      ],
      icon: "ai",
    },
    {
      id: "gps",
      label: "GPS / IoT",
      description: "Live field data and connected devices.",
      bullets: [
        "Sensors",
        "Tracking",
        "Water Meters",
        "Power Monitoring",
        "Telemetry",
      ],
      icon: "gps",
    },
    {
      id: "analytics",
      label: "Analytics",
      description: "Turn activity into insight.",
      bullets: [
        "Dashboards",
        "Trends",
        "Benchmarking",
        "Performance Insights",
        "Operational Intelligence",
      ],
      icon: "analytics",
    },
  ];

  function getNodeIcon(name) {
    return window.FarmXIcons ? window.FarmXIcons.getIcon(name) : "";
  }

  function nodePosition(index) {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / NODES.length;
    return {
      x: CX + RADIUS * Math.cos(angle),
      y: CY + RADIUS * Math.sin(angle),
      pctX: ((CX + RADIUS * Math.cos(angle)) / 600) * 100,
      pctY: ((CY + RADIUS * Math.sin(angle)) / 600) * 100,
    };
  }

  function renderDetail(panel, node) {
    panel.innerHTML = `
      <p class="ecosystem-detail__eyebrow">Capability</p>
      <h3 class="ecosystem-detail__title">${node.label}</h3>
      <p class="ecosystem-detail__desc">${node.description}</p>
      <ul class="ecosystem-detail__list">
        ${node.bullets.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    `;
    panel.classList.add("is-visible");
  }

  function setActive(state, nodeId) {
    state.activeId = nodeId;
    state.nodes.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.id === nodeId);
    });
    state.lines.forEach((line) => {
      line.classList.toggle("is-active", line.dataset.node === nodeId);
    });
    const node = NODES.find((item) => item.id === nodeId);
    if (node) {
      renderDetail(state.detailPanel, node);
    }
  }

  function initDesktop(state) {
    const linesGroup = document.getElementById("eco-lines");
    const nodesWrap = document.getElementById("eco-nodes");
    if (!linesGroup || !nodesWrap) {
      return;
    }

    NODES.forEach((node, index) => {
      const pos = nodePosition(index);

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      line.setAttribute("x1", String(CX));
      line.setAttribute("y1", String(CY));
      line.setAttribute("x2", String(pos.x));
      line.setAttribute("y2", String(pos.y));
      line.classList.add("eco-line");
      line.dataset.node = node.id;
      linesGroup.appendChild(line);
      state.lines.push(line);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "eco-node";
      button.dataset.id = node.id;
      button.style.setProperty("--x", `${pos.pctX}%`);
      button.style.setProperty("--y", `${pos.pctY}%`);
      button.setAttribute("aria-label", `${node.label}: ${node.description}`);
      button.innerHTML = `
        <span class="eco-node__hex">
          <span class="icon-badge icon-badge--eco icon-badge--sm">${getNodeIcon(node.icon)}</span>
          <span class="eco-node__label">${node.label}</span>
        </span>
      `;

      button.addEventListener("mouseenter", () => setActive(state, node.id));
      button.addEventListener("focus", () => setActive(state, node.id));
      button.addEventListener("click", () => setActive(state, node.id));

      nodesWrap.appendChild(button);
      state.nodes.push(button);
    });

    const viz = document.getElementById("ecosystem-viz");
    if (viz) {
      viz.addEventListener("mouseleave", () => setActive(state, state.defaultId));
    }
  }

  function initMobile() {
    const mobile = document.getElementById("ecosystem-mobile");
    if (!mobile) {
      return;
    }

    mobile.innerHTML = `
      <div class="ecosystem-mobile-hub">
        <div class="eco-hub eco-hub--mobile">
          <div class="eco-hub__aura" aria-hidden="true"></div>
          <div class="eco-hub__frame">
            <img
              src="assets/farmx-ag-os-logo-center.png"
              alt="FarmX Agricultural Operating System"
              class="eco-hub__logo"
            />
          </div>
        </div>
      </div>
      <div class="ecosystem-mobile-grid">
        ${NODES.map(
          (node) => `
          <article class="ecosystem-mobile-card">
            <span class="icon-badge icon-badge--eco icon-badge--sm">${getNodeIcon(node.icon)}</span>
            <h3>${node.label}</h3>
            <p>${node.description}</p>
            <ul class="ecosystem-mobile-card__list">
              ${node.bullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `
        ).join("")}
      </div>
    `;
  }

  function init() {
    const detailPanel = document.getElementById("ecosystem-detail");
    if (!detailPanel) {
      return;
    }

    const state = {
      detailPanel,
      nodes: [],
      lines: [],
      defaultId: NODES[0].id,
      activeId: null,
    };

    initDesktop(state);
    initMobile();
    setActive(state, state.defaultId);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
