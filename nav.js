document.querySelectorAll(".topbar").forEach((topbar) => {
  const toggle = topbar.querySelector(".nav-toggle");
  const nav = topbar.querySelector(".page-nav");

  if (!toggle || !nav) {
    return;
  }

  const closeMenu = () => {
    topbar.classList.remove("topbar--open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("topbar--open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
