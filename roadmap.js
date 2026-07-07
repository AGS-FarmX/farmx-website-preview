(function () {
  function initRoadmapTabs() {
    const tabs = Array.from(document.querySelectorAll("[data-roadmap-tab]"));
    const panels = Array.from(document.querySelectorAll("[data-roadmap-panel]"));

    if (!tabs.length || !panels.length) {
      return;
    }

    function setActiveTab(tabId) {
      tabs.forEach((tab) => {
        const isActive = tab.dataset.roadmapTab === tabId;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.roadmapPanel === tabId;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
        panel.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        setActiveTab(tab.dataset.roadmapTab);
      });

      tab.addEventListener("keydown", (event) => {
        const index = tabs.indexOf(tab);
        let nextIndex = null;

        if (event.key === "ArrowRight") {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        }

        if (nextIndex !== null) {
          event.preventDefault();
          tabs[nextIndex].focus();
          setActiveTab(tabs[nextIndex].dataset.roadmapTab);
        }
      });
    });

    const initialTab =
      tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0];
    setActiveTab(initialTab.dataset.roadmapTab);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRoadmapTabs);
  } else {
    initRoadmapTabs();
  }
})();
