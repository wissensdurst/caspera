const navbar = document.querySelector(".navbar");

if (navbar) {
  const menuToggle = navbar.querySelector(".navbar__menu-toggle");
  const menu = navbar.querySelector(".navbar__menu");
  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const dropdownItems = [...navbar.querySelectorAll(".navbar__item--has-children")];

  const closeDropdown = (item) => {
    item.classList.remove("is-open");

    const toggle = item.querySelector(".navbar__toggle");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  };

  function closeAllDropdowns(exceptItem) {
    dropdownItems.forEach((item) => {
      if (item !== exceptItem) {
        closeDropdown(item);
      }
    });
  }

  const openDropdown = (item) => {
    closeAllDropdowns(item);
    item.classList.add("is-open");

    const toggle = item.querySelector(".navbar__toggle");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
    }
  };

  const setMenuState = (isOpen) => {
    navbar.classList.toggle("menu-open", isOpen);

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Zatvori navigaciju" : "Otvori navigaciju"
      );
    }

    if (!isOpen) {
      closeAllDropdowns();
    }
  };

  const toggleDropdown = (item) => {
    const willOpen = !item.classList.contains("is-open");

    closeAllDropdowns(item);

    if (willOpen) {
      openDropdown(item);
      return;
    }

    closeDropdown(item);
  };

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });

  menuToggle?.addEventListener("click", () => {
    setMenuState(!navbar.classList.contains("menu-open"));
  });

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".navbar__toggle");
    const panel = item.querySelector(".navbar__panel");

    if (!toggle || !panel) {
      return;
    }

    toggle.addEventListener("click", () => {
      toggleDropdown(item);
    });

    item.addEventListener("mouseenter", () => {
      if (desktopQuery.matches) {
        openDropdown(item);
      }
    });

    item.addEventListener("mouseleave", () => {
      if (desktopQuery.matches) {
        closeDropdown(item);
      }
    });

    toggle.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openDropdown(item);
        panel.querySelector(".navbar__sublink")?.focus();
      }
    });
  });

  menu?.addEventListener("click", (event) => {
    const link = event.target.closest(
      ".navbar__link, .navbar__sublink, .navbar__cta"
    );

    if (link && !desktopQuery.matches) {
      setMenuState(false);
    }
  });

  document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target)) {
      closeAllDropdowns();
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    closeAllDropdowns();

    if (navbar.classList.contains("menu-open")) {
      setMenuState(false);
      menuToggle?.focus();
    }
  });

  desktopQuery.addEventListener("change", (event) => {
    closeAllDropdowns();

    if (event.matches) {
      setMenuState(false);
    }
  });
}
