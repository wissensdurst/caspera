const navbar = document.querySelector(".navbar");
const siteFooter = document.querySelector(".site-footer");

if (siteFooter) {
  const isNestedPage = document.querySelector('script[src="../js/main.js"]') !== null;
  const assetPrefix = isNestedPage ? "../" : "";
  const pagePrefix = isNestedPage ? "" : "pages/";

  if (isNestedPage) {
    siteFooter.id = "contact-footer";
  } else {
    siteFooter.removeAttribute("id");
  }

  siteFooter.innerHTML = `
      <div class="site-footer__inner">
        <section class="site-footer__brand" aria-label="O Casperi">
          <a class="site-footer__logo" href="${assetPrefix}index.html">
            <img src="${assetPrefix}assets/images/logo_main.png" alt="Logo udruge Caspera" />
          </a>
          <p class="site-footer__eyebrow">Podr&scaron;ka koja ostaje blizu</p>
          <p class="site-footer__description">
            Podr&scaron;ka, razumijevanje i zajedni&scaron;tvo na putu prema oporavku.
          </p>
          <a class="site-footer__cta button__main" href="mailto:info@caspera.hr">Kontaktirajte nas</a>
        </section>

        <section class="site-footer__column" aria-label="Kontakt i dru&scaron;tvene mre&zcaron;e">
          <ul class="site-footer__contact-list">
            <li class="site-footer__contact-item">
              <span class="site-footer__contact-label">Lokacija</span>
              <address class="site-footer__contact-text site-footer__contact-text--address">
                Udruga Caspera<br />
                Pujanke 85<br />
                21000 Split
              </address>
            </li>
            <li class="site-footer__contact-item">
              <span class="site-footer__contact-label">E-po&scaron;ta</span>
              <a class="site-footer__contact-link" href="mailto:info@caspera.hr">info@caspera.hr</a>
            </li>
            <li class="site-footer__contact-item">
              <span class="site-footer__contact-label">Telefon</span>
              <a class="site-footer__contact-link" href="tel:+385919534358">091 953 43 58</a>
            </li>
          </ul>
        </section>

        <section class="site-footer__notice" aria-label="Autorska prava i partneri">
          <div>
            <h2 class="site-footer__heading">Napomena</h2>
            <p class="site-footer__notice-text">
              Svi sadr&zcaron;aji na stranici www.caspera.hr su autorski. Molimo sve zainteresirane
              za preuzimanje originalnog sadr&zcaron;aja da nas kontaktiraju na
              <a class="site-footer__contact-link" href="mailto:info@caspera.hr">info@caspera.hr</a>.
            </p>
          </div>
          <div>
            <h2 class="site-footer__heading">Pratite nas</h2>
            <ul class="site-footer__social-list">
              <li><a class="site-footer__social-link" href="https://www.facebook.com/Udruga-Caspera-104972824456568/" target="_blank" rel="noopener noreferrer" aria-label="Caspera na Facebooku">Fb</a></li>
              <li><a class="site-footer__social-link" href="https://instagram.com/udrugacaspera?igshid=vqim766bhoye" target="_blank" rel="noopener noreferrer" aria-label="Caspera na Instagramu">Ig</a></li>
              <li><a class="site-footer__social-link" href="https://www.youtube.com/channel/UCcRRrG5DapvCEfMuQHb0riw" target="_blank" rel="noopener noreferrer" aria-label="Caspera na YouTubeu">Yt</a></li>
              <li><a class="site-footer__social-link" href="https://www.linkedin.com/in/udruga-caspera-672248205" target="_blank" rel="noopener noreferrer" aria-label="Caspera na LinkedInu">In</a></li>
            </ul>
          </div>
        </section>

        <section class="site-footer__partners" aria-label="Partneri">
          <div>
            <h2 class="site-footer__heading">Partneri</h2>
            <ul class="site-footer__sponsor-list">
              <li class="site-footer__sponsor-item">
                <img
                  class="site-footer__sponsor-logo site-footer__sponsor-logo--dalmacija"
                  src="${assetPrefix}assets/images/dalmacija_danas_logo.png"
                  alt="Logo partnera Dalmacija Danas"
                />
              </li>
              <li class="site-footer__sponsor-item">
                <img
                  class="site-footer__sponsor-logo site-footer__sponsor-logo--milenij"
                  src="${assetPrefix}assets/images/milenij_logo.svg"
                  alt="Logo partnera Milenij"
                />
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copyright">&copy; 2026 Caspera. Sva prava pridr&zcaron;ana.</p>
        <nav aria-label="Pravni linkovi u podno&zcaron;ju">
          <ul class="site-footer__legal-list">
            <li><a class="site-footer__legal-link" href="${pagePrefix}pravila-privatnosti.html">Pravila privatnosti</a></li>
            <li><a class="site-footer__legal-link" href="${pagePrefix}uvjeti-koristenja.html">Uvjeti kori&scaron;tenja</a></li>
            <li><a class="site-footer__legal-link" href="${pagePrefix}kolacici.html">Kola&ccaron;i&cacute;i</a></li>
            <li><a class="site-footer__legal-link" href="${pagePrefix}pristupacnost.html">Pristupa&ccaron;nost</a></li>
          </ul>
        </nav>
      </div>
    `;
}

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

const accordions = [...document.querySelectorAll("[data-accordion]")];

accordions.forEach((accordion) => {
  const buttons = [...accordion.querySelectorAll("[aria-controls]")];

  const openPanel = (button, item, panel) => {
    button.setAttribute("aria-expanded", "true");
    item?.classList.add("is-open");

    requestAnimationFrame(() => {
      panel.style.maxHeight = `${panel.scrollHeight + 48}px`;
    });
  };

  const closePanel = (button, item, panel) => {
    button.setAttribute("aria-expanded", "false");

    if (panel.style.maxHeight === "none") {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      panel.offsetHeight;
    }

    item?.classList.remove("is-open");
    panel.style.maxHeight = "0px";
  };

  buttons.forEach((button) => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!panel) {
      return;
    }

    panel.addEventListener("transitionend", (event) => {
      if (
        event.propertyName === "max-height" &&
        button.getAttribute("aria-expanded") === "true"
      ) {
        panel.style.maxHeight = "none";
      }
    });

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const item = button.closest("[data-accordion-item]");

      if (isExpanded) {
        closePanel(button, item, panel);
        return;
      }

      openPanel(button, item, panel);
    });
  });
});

window.addEventListener("resize", () => {
  document
    .querySelectorAll("[data-accordion-item].is-open [role='region']")
    .forEach((panel) => {
      panel.style.maxHeight = "none";
    });
});

const teamModal = document.querySelector("[data-team-modal]");

if (teamModal) {
  const teamCards = [...document.querySelectorAll("[data-team-card]")];
  const modalName = teamModal.querySelector("[data-team-modal-name]");
  const modalRole = teamModal.querySelector("[data-team-modal-role]");
  const modalBio = teamModal.querySelector("[data-team-modal-bio]");
  const modalImage = teamModal.querySelector("[data-team-modal-image]");
  const modalCloseControls = [
    ...teamModal.querySelectorAll("[data-team-modal-close]"),
  ];
  const pageBody = document.body;
  let lastFocusedCard = null;

  const closeTeamModal = () => {
    teamModal.hidden = true;
    pageBody.classList.remove("modal-open");
    lastFocusedCard?.focus();
  };

  const openTeamModal = (card) => {
    lastFocusedCard = card;

    if (modalName) {
      modalName.textContent = card.dataset.name ?? "";
    }

    if (modalRole) {
      const role = card.dataset.role ?? "";
      modalRole.textContent = role;
      modalRole.hidden = role.trim().length === 0;
    }

    if (modalBio) {
      if (card.dataset.bioHtml) {
        modalBio.innerHTML = card.dataset.bioHtml;
      } else {
        modalBio.textContent = card.dataset.bio ?? "";
      }
    }

    if (modalImage) {
      modalImage.src = card.dataset.image ?? modalImage.src;
      modalImage.alt = card.dataset.imageAlt ?? "";
    }

    teamModal.hidden = false;
    pageBody.classList.add("modal-open");
    teamModal.querySelector("[data-team-modal-close]")?.focus();
  };

  teamCards.forEach((card) => {
    card.addEventListener("click", () => {
      openTeamModal(card);
    });
  });

  modalCloseControls.forEach((control) => {
    control.addEventListener("click", () => {
      closeTeamModal();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !teamModal.hidden) {
      closeTeamModal();
    }
  });
}
