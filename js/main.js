const navbar = document.querySelector(".navbar");
const siteFooter = document.querySelector(".site-footer");

const normalizeMojibakeText = (value) =>
  value
    .replace(/Å¡/g, "š")
    .replace(/Å¾/g, "ž")
    .replace(/Ä/g, "č")
    .replace(/Ä‡/g, "ć")
    .replace(/Ä‘/g, "đ")
    .replace(/Å /g, "Š")
    .replace(/Å½/g, "Ž")
    .replace(/ÄŒ/g, "Č")
    .replace(/Ä†/g, "Ć")
    .replace(/Ä/g, "Đ")
    .replace(/â€¹/g, "‹")
    .replace(/â€º/g, "›")
    .replace(/â€¦/g, "…")
    .replace(/â†’/g, "→")
    .replace(/CasperÐµ/g, "Caspere");

const normalizeMojibakeData = (value) => {
  if (typeof value === "string") {
    return normalizeMojibakeText(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeMojibakeData(item));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [
        key,
        normalizeMojibakeData(entryValue),
      ])
    );
  }

  return value;
};

const normalizeRenderedDomText = (root = document.body) => {
  if (!root) {
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const currentNode = walker.currentNode;
    const normalizedValue = normalizeMojibakeText(currentNode.nodeValue ?? "");

    if (normalizedValue !== currentNode.nodeValue) {
      currentNode.nodeValue = normalizedValue;
    }
  }

  root.querySelectorAll("[alt], [aria-label], [title], [placeholder]").forEach((element) => {
    ["alt", "aria-label", "title", "placeholder"].forEach((attributeName) => {
      const attributeValue = element.getAttribute(attributeName);

      if (!attributeValue) {
        return;
      }

      const normalizedValue = normalizeMojibakeText(attributeValue);

      if (normalizedValue !== attributeValue) {
        element.setAttribute(attributeName, normalizedValue);
      }
    });
  });
};

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

const isNestedPage = document.querySelector('script[src="../js/main.js"]') !== null;
const pagePrefix = isNestedPage ? "" : "pages/";

document.querySelectorAll(".navbar__sublink").forEach((link) => {
  const linkLabel = normalizeMojibakeText(link.textContent?.trim() ?? "");

  if (linkLabel === "Casperin kalendar" && link.getAttribute("href") === "#") {
    link.setAttribute("href", `${pagePrefix}casperin-kalendar.html`);
  }

  if (linkLabel === "Naši projekti" && link.getAttribute("href") === "#") {
    link.setAttribute("href", `${pagePrefix}nasi-projekti.html`);
  }

  if (linkLabel === "Galerija" && link.getAttribute("href") === "#") {
    link.setAttribute("href", `${pagePrefix}galerija.html`);
  }

  if (linkLabel === "Sonjin blog" && link.getAttribute("href") === "#") {
    link.setAttribute("href", `${pagePrefix}sonjin-blog.html`);
  }
});

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

const storiesPage = document.querySelector("[data-stories-page]");

if (storiesPage) {
  const authors = normalizeMojibakeData([
    {
      slug: "ana-m",
      name: "Ana M.",
      image: "../assets/images/ana_glavina.jpg",
      bio: "PiÅ¡e o malim koracima i povratku svakodnevici.",
    },
    {
      slug: "ivana-k",
      name: "Ivana K.",
      image: "../assets/images/ivana_juric.jpg",
      bio: "Dijeli iskustva o postavljanju granica i sluÅ¡anju sebe.",
    },
    {
      slug: "petra-l",
      name: "Petra L.",
      image: "../assets/images/Petra LozanÄiÄ‡_edited.jpg",
      bio: "BiljeÅ¾i put prihvaÄ‡anja i ozdravljenja.",
    },
    {
      slug: "maja-h",
      name: "Maja H.",
      image: "../assets/images/Marja Ban.jpg",
      bio: "Otvara teme straha, tiÅ¡ine i ponovnog pronalaska nade.",
    },
    {
      slug: "marija-b",
      name: "Marija B.",
      image: "../assets/images/Marija Selak.jpg",
      bio: "PiÅ¡e o odnosima, podrÅ¡ci i povratku povjerenja.",
    },
    {
      slug: "jelena-r",
      name: "Jelena R.",
      image: "../assets/images/Lara RadoÅ¡eviÄ‡.jpg",
      bio: "Dijeli iskustva o tijelu, identitetu i hrabrosti.",
    },
    {
      slug: "katarina-p",
      name: "Katarina P.",
      image: "../assets/images/Nikolina DragoÅ¡eviÄ‡.jpg",
      bio: "PiÅ¡e o njeÅ¾nosti, rutini i pronalasku mira u malim stvarima.",
    },
    {
      slug: "lucija-v",
      name: "Lucija V.",
      image: "../assets/images/Lucija Jurin_edited.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "tamara-s",
      name: "Tamara S.",
      image: "../assets/images/Tamara Klasan.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "barbara-n",
      name: "Barbara N.",
      image: "../assets/images/Barbara MatijeviÄ‡_edited.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "iva-d",
      name: "Iva D.",
      image: "../assets/images/Iva TekliÄ‡.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "snjezana-r",
      name: "SnjeÅ¾ana R.",
      image: "../assets/images/SnjeÅ¾ana PuÅ¡Ä‡enik_edited.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "zlata-t",
      name: "Zlata T.",
      image: "../assets/images/Zlata Benzia.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
  ]);

  const stories = normalizeMojibakeData([
    {
      title: "Kad sam sebe ponovno stavila na prvo mjesto",
      slug: "pojedina-prica.html?story=kad-sam-sebe-ponovno-stavila-na-prvo-mjesto",
      excerpt:
        "Dugo sam brinula o svima, osim o sebi. Tek kad sam nauÄila reÄ‡i 'ne', poÄela sam ponovno Äuti svoj glas.",
      coverImage: "../assets/images/story_img.jpeg",
      publishDate: "2024-04-12",
      authorSlug: "ivana-k",
    },
    {
      title: "Iz tame prema svjetlu",
      slug: "pojedina-prica.html?story=iz-tame-prema-svjetlu",
      excerpt:
        "Nekad sam mislila da se iz najteÅ¾ih trenutaka ne moÅ¾e izaÄ‡i. Danas znam da je svaki korak, ma koliko malen, korak prema slobodi.",
      coverImage: "../assets/images/sandra_zekic_tomas.jpg",
      publishDate: "2024-04-09",
      authorSlug: "maja-h",
    },
    {
      title: "PrihvaÄ‡anje je bio moj poÄetak",
      slug: "pojedina-prica.html?story=prihvacanje-je-bio-moj-pocetak",
      excerpt:
        "Prihvatiti ono Å¡to se dogodilo nije znaÄilo odustati. Za mene je to bio poÄetak ozdravljenja.",
      coverImage: "../assets/images/placeholder.png",
      publishDate: "2024-04-05",
      authorSlug: "petra-l",
    },
    {
      title: "Mali koraci, velike promjene",
      slug: "pojedina-prica.html?story=mali-koraci-velike-promjene",
      excerpt:
        "Nisam preko noÄ‡i postala jaÄa. Dan po dan, korak po korak, gradila sam svoju novu priÄu.",
      coverImage: "../assets/images/tu_smo2D.png",
      publishDate: "2024-04-01",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam nauÄila traÅ¾iti pomoÄ‡",
      slug: "pojedina-prica.html?story=kad-sam-naucila-traziti-pomoc",
      excerpt:
        "NajveÄ‡a promjena dogodila se kad sam priznala da ne mogu sve sama i dopustila drugima da mi budu oslonac.",
      coverImage: "../assets/images/podrska_upoznaj.png",
      publishDate: "2024-03-28",
      authorSlug: "marija-b",
    },
    {
      title: "Tijelo koje ponovno uÄim voljeti",
      slug: "pojedina-prica.html?story=tijelo-koje-ponovno-ucim-voljeti",
      excerpt:
        "Pogled u ogledalo dugo mi je bio teÅ¾ak. S vremenom sam nauÄila gledati sebe s viÅ¡e njeÅ¾nosti i manje straha.",
      coverImage: "../assets/images/tu_smo_3D.png",
      publishDate: "2024-03-24",
      authorSlug: "jelena-r",
    },
    {
      title: "Rituali koji su mi vratili mir",
      slug: "pojedina-prica.html?story=rituali-koji-su-mi-vratili-mir",
      excerpt:
        "ÄŒaj ujutro, kratka Å¡etnja i nekoliko dubokih udaha postali su moje sidro u danima kada je sve bilo previÅ¡e.",
      coverImage: "../assets/images/bg_main.webp",
      publishDate: "2024-03-18",
      authorSlug: "katarina-p",
    },
    {
      title: "Kad sam prestala skrivati emocije",
      slug: "pojedina-prica.html?story=kad-sam-prestala-skrivati-emocije",
      excerpt:
        "Godinama sam glumila snagu. Prava snaga doÅ¡la je tek kada sam si dopustila ranjivost i suze.",
      coverImage: "../assets/images/tu_smo.png",
      publishDate: "2024-03-11",
      authorSlug: "ivana-k",
    },
    {
      title: "Ponovno vjerujem svom tijelu",
      slug: "pojedina-prica.html?story=ponovno-vjerujem-svom-tijelu",
      excerpt:
        "Nakon lijeÄenja trebalo mi je vrijeme da prestanem tijelo doÅ¾ivljavati kao neprijatelja i poÄnem ga sluÅ¡ati.",
      coverImage: "../assets/images/podrska_strucni.png",
      publishDate: "2024-03-04",
      authorSlug: "maja-h",
    },
    {
      title: "Moja obitelj i ja uÄile smo zajedno",
      slug: "pojedina-prica.html?story=moja-obitelj-i-ja-ucile-smo-zajedno",
      excerpt:
        "Nitko od nas nije znao kako Ä‡e izgledati oporavak, ali upravo nas je to zajedniÄko neznanje zbliÅ¾ilo viÅ¡e nego ikad.",
      coverImage: "../assets/images/podrska_info.png",
      publishDate: "2024-02-25",
      authorSlug: "marija-b",
    },
    {
      title: "Snaga njeÅ¾nih dana",
      slug: "pojedina-prica.html?story=snaga-njeznih-dana",
      excerpt:
        "Nekada su najhrabriji dani bili upravo oni najtiÅ¡i, kada sam birala odmor umjesto forsiranja.",
      coverImage: "../assets/images/clanarina.png",
      publishDate: "2024-02-17",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam ponovno poÅ¾eljela planirati buduÄ‡nost",
      slug: "pojedina-prica.html?story=kad-sam-ponovno-pozeljela-planirati-buducnost",
      excerpt:
        "Dugo nisam mogla gledati dalje od sljedeÄ‡eg pregleda. Onda su se polako vratili Å¾elje, planovi i radoznalost.",
      coverImage: "../assets/images/doniraj.png",
      publishDate: "2024-02-08",
      authorSlug: "petra-l",
    },
  ]);

  const storyRowsPerPage = 3;
  const authorTrack = storiesPage.querySelector("[data-author-track]");
  const authorScrollbar = storiesPage.querySelector("[data-author-scrollbar]");
  const authorScrollbarInput = storiesPage.querySelector(
    "[data-author-scrollbar-input]"
  );
  const storiesList = storiesPage.querySelector("[data-stories-list]");
  const pagination = storiesPage.querySelector("[data-stories-pagination]");
  const authorsHelper = storiesPage.querySelector("[data-authors-helper]");
  const sortDropdown = storiesPage.querySelector("[data-stories-sort-dropdown]");
  const sortDropdownRoot = storiesPage.querySelector(".stories-page__sort-dropdown");
  const sortToggle = storiesPage.querySelector("[data-stories-sort-toggle]");
  const sortMenu = storiesPage.querySelector("[data-stories-sort-menu]");
  const sortLabel = storiesPage.querySelector("[data-stories-sort-label]");
  const sortOptions = [
    ...storiesPage.querySelectorAll("[data-sort-value]"),
  ];

  let selectedAuthor = "all";
  let selectedSort = "newest";
  let currentPage = 1;
  let currentStoriesPerPage = storyRowsPerPage;
  let isDraggingAuthorScrollbar = false;
  let pendingAuthorScrollbarValue = null;
  let authorScrollbarTarget = null;
  let authorScrollbarAnimationFrame = null;

  const authorLookup = new Map(authors.map((author) => [author.slug, author]));
  const sortLabels = {
    newest: "Najnovije",
    oldest: "Najstarije",
  };

  const closeSortDropdown = () => {
    sortDropdownRoot?.classList.remove("is-open");
    sortToggle?.setAttribute("aria-expanded", "false");
  };

  const openSortDropdown = () => {
    sortDropdownRoot?.classList.add("is-open");
    sortToggle?.setAttribute("aria-expanded", "true");
  };

  const formatStoryCount = (count) => {
    const ending =
      count % 10 === 1 && count % 100 !== 11
        ? "priÄa pronaÄ‘ena"
        : "priÄe pronaÄ‘ene";

    return normalizeMojibakeText(`${count} ${ending}`);
  };

  const formatDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  const getStoryCardExcerpt = (story) =>
    [story.excerpt, ...(story.body ?? [])].filter(Boolean).join(" ");

  const getStoriesColumns = () => {
    if (window.innerWidth <= 900) {
      return 1;
    }

    if (window.innerWidth <= 1200) {
      return 2;
    }

    return 3;
  };

  const getStoriesPerPage = () => getStoriesColumns() * storyRowsPerPage;

  currentStoriesPerPage = getStoriesPerPage();

  const getFilteredStories = () => {
    const filteredStories =
      selectedAuthor === "all"
        ? [...stories]
        : stories.filter((story) => story.authorSlug === selectedAuthor);

    filteredStories.sort((firstStory, secondStory) => {
      const firstDate = new Date(firstStory.publishDate).getTime();
      const secondDate = new Date(secondStory.publishDate).getTime();

      return selectedSort === "oldest" ? firstDate - secondDate : secondDate - firstDate;
    });

    return filteredStories;
  };

  const createAuthorChip = (author) => {
    const isAllStories = author.slug === "all";
    const button = document.createElement("button");

    button.className = "stories-page__author-chip";
    button.type = "button";
    button.role = "tab";
    button.dataset.author = author.slug;
    button.setAttribute("aria-selected", String(author.slug === selectedAuthor));
    button.tabIndex = author.slug === selectedAuthor ? 0 : -1;

    button.innerHTML = normalizeMojibakeText(`
      <span class="stories-page__author-chip-circle">
        ${
          isAllStories
            ? '<img class="stories-page__author-chip-avatar" src="../assets/images/sve_price.png" alt="Prikaz svih priÄa" />'
            : `<img class="stories-page__author-chip-avatar" src="${author.image}" alt="Profilna fotografija autorice ${author.name}" />`
        }
      </span>
      <span class="stories-page__author-chip-label">${author.name}</span>
    `);

    button.addEventListener("click", () => {
      selectedAuthor = author.slug;
      currentPage = 1;
      renderStoriesPage();

      const activeChip = authorTrack?.querySelector(`[data-author="${author.slug}"]`);
      activeChip?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });

    return button;
  };

  const renderAuthors = () => {
    if (!authorTrack) {
      return;
    }

    const authorItems = [
      normalizeMojibakeData({ slug: "all", name: "Sve priÄe" }),
      ...authors,
    ];
    authorTrack.innerHTML = "";
    authorItems.forEach((author) => {
      authorTrack.append(createAuthorChip(author));
    });
  };

  const getPaginationItems = (page, totalPages) => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, null, totalPages];
    }

    if (page >= totalPages - 2) {
      return [1, null, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, null, page, null, totalPages];
  };

  const renderPagination = (totalPages) => {
    if (!pagination) {
      return;
    }

    pagination.innerHTML = "";

    if (totalPages <= 1) {
      return;
    }

    const previousButton = document.createElement("button");
    previousButton.className = "stories-page__page-button";
    previousButton.type = "button";
    previousButton.textContent = normalizeMojibakeText("â€¹");
    previousButton.setAttribute(
      "aria-label",
      normalizeMojibakeText("Prethodna stranica")
    );
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", () => {
      currentPage -= 1;
      renderStoriesPage();
    });
    pagination.append(previousButton);

    getPaginationItems(currentPage, totalPages).forEach((item) => {
      if (item === null) {
        const ellipsis = document.createElement("span");
        ellipsis.className = "stories-page__page-ellipsis";
        ellipsis.textContent = normalizeMojibakeText("â€¦");
        pagination.append(ellipsis);
        return;
      }

      const pageButton = document.createElement("button");
      pageButton.className = "stories-page__page-button";
      pageButton.type = "button";
      pageButton.textContent = String(item);

      if (item === currentPage) {
        pageButton.setAttribute("aria-current", "page");
      } else {
        pageButton.addEventListener("click", () => {
          currentPage = item;
          renderStoriesPage();
        });
      }

      pagination.append(pageButton);
    });

    const nextButton = document.createElement("button");
    nextButton.className = "stories-page__page-button";
    nextButton.type = "button";
    nextButton.textContent = normalizeMojibakeText("â€º");
    nextButton.setAttribute(
      "aria-label",
      normalizeMojibakeText("SljedeÄ‡a stranica")
    );
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      currentPage += 1;
      renderStoriesPage();
    });
    pagination.append(nextButton);
  };

  const renderStories = (pageStories) => {
    if (!storiesList) {
      return;
    }

    if (!pageStories.length) {
      storiesList.innerHTML = normalizeMojibakeText(
        '<p class="stories-page__empty">TrenutaÄno nema priÄa za odabranu autoricu. PokuÅ¡ajte s drugim odabirom.</p>'
      );
      return;
    }

    storiesList.innerHTML = normalizeMojibakeText(
      pageStories
        .map((story) => {
        const author = authorLookup.get(story.authorSlug);

        if (!author) {
          return "";
        }

          return `
          <article class="stories-page__story-card">
            <a class="stories-page__story-link" href="${story.slug}">
              <div class="stories-page__story-media">
                <img class="stories-page__story-image" src="${story.coverImage}" alt="Naslovna fotografija priÄe ${story.title}" />
              </div>
              <div class="stories-page__story-content">
                <div class="stories-page__story-meta">
                  <span class="stories-page__story-author">${author.name}</span>
                  <time class="stories-page__story-date" datetime="${story.publishDate}">${formatDate(story.publishDate)}</time>
                </div>
                <h2 class="stories-page__story-title">${story.title}</h2>
                <p class="stories-page__story-excerpt">${getStoryCardExcerpt(story)}</p>
                <span class="stories-page__story-cta">ProÄitaj priÄu</span>
              </div>
            </a>
          </article>
        `;
        })
        .join("")
    );
  };

  const updateAuthorSliderState = () => {
    if (!authorTrack || !authorScrollbar || !authorScrollbarInput) {
      return;
    }

    const maxScrollLeft = authorTrack.scrollWidth - authorTrack.clientWidth;
    const hasOverflow = maxScrollLeft > 4;

    if (authorsHelper) {
      authorsHelper.hidden = !hasOverflow;
    }

    authorScrollbar.hidden = !hasOverflow;
    authorScrollbarInput.max = String(Math.max(0, Math.round(maxScrollLeft)));

    if (!isDraggingAuthorScrollbar && authorScrollbarTarget === null) {
      authorScrollbarInput.value = String(Math.round(authorTrack.scrollLeft));
    }
  };

  const stopAuthorScrollbarAnimation = () => {
    if (authorScrollbarAnimationFrame !== null) {
      window.cancelAnimationFrame(authorScrollbarAnimationFrame);
      authorScrollbarAnimationFrame = null;
    }
  };

  const animateAuthorTrackToTarget = () => {
    if (!authorTrack || authorScrollbarTarget === null) {
      authorScrollbarAnimationFrame = null;
      return;
    }

    const distance = authorScrollbarTarget - authorTrack.scrollLeft;

    if (Math.abs(distance) <= 1) {
      authorTrack.scrollLeft = authorScrollbarTarget;
      authorScrollbarTarget = null;
      authorScrollbarAnimationFrame = null;
      updateAuthorSliderState();
      return;
    }

    authorTrack.scrollLeft = authorScrollbarTarget;
    authorScrollbarAnimationFrame = window.requestAnimationFrame(
      animateAuthorTrackToTarget
    );
  };

  const setAuthorScrollbarTarget = (nextValue) => {
    if (!authorTrack || !authorScrollbarInput) {
      return;
    }

    const maxScrollLeft = Math.max(
      authorTrack.scrollWidth - authorTrack.clientWidth,
      0
    );
    const clampedValue = Math.min(Math.max(nextValue, 0), maxScrollLeft);

    pendingAuthorScrollbarValue = clampedValue;
    authorScrollbarTarget = clampedValue;
    authorScrollbarInput.value = String(Math.round(clampedValue));

    if (isDraggingAuthorScrollbar) {
      authorTrack.scrollLeft = clampedValue;
      return;
    }

    if (authorScrollbarAnimationFrame === null) {
      authorScrollbarAnimationFrame = window.requestAnimationFrame(
        animateAuthorTrackToTarget
      );
    }
  };

  const renderStoriesPage = () => {
    const filteredStories = getFilteredStories();
    const storiesPerPage = getStoriesPerPage();
    currentStoriesPerPage = storiesPerPage;
    const totalPages = Math.max(1, Math.ceil(filteredStories.length / storiesPerPage));

    currentPage = Math.min(currentPage, totalPages);

    const startIndex = (currentPage - 1) * storiesPerPage;
    const pageStories = filteredStories.slice(startIndex, startIndex + storiesPerPage);

    if (sortLabel) {
      sortLabel.textContent = sortLabels[selectedSort];
    }

    sortOptions.forEach((option) => {
      option.setAttribute(
        "aria-selected",
        String(option.dataset.sortValue === selectedSort)
      );
    });

    renderAuthors();
    renderStories(pageStories);
    renderPagination(totalPages);
    requestAnimationFrame(() => {
      updateAuthorSliderState();
    });
  };

  sortToggle?.addEventListener("click", () => {
    const isOpen = sortDropdownRoot?.classList.contains("is-open");

    if (isOpen) {
      closeSortDropdown();
      return;
    }

    openSortDropdown();
  });

  sortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedSort = option.dataset.sortValue ?? "newest";
      currentPage = 1;
      closeSortDropdown();
      renderStoriesPage();
      sortToggle?.focus();
    });
  });

  authorTrack?.addEventListener("scroll", () => {
    if (isDraggingAuthorScrollbar || authorScrollbarTarget !== null) {
      return;
    }

    updateAuthorSliderState();
  });

  window.addEventListener("resize", () => {
    updateAuthorSliderState();
    const nextStoriesPerPage = getStoriesPerPage();

    if (nextStoriesPerPage !== currentStoriesPerPage) {
      renderStoriesPage();
    }
  });

  authorScrollbarInput?.addEventListener("pointerdown", () => {
    isDraggingAuthorScrollbar = true;
    pendingAuthorScrollbarValue = null;
    authorScrollbarTarget = null;
    stopAuthorScrollbarAnimation();
  });

  const stopAuthorScrollbarDrag = () => {
    if (!authorTrack || !authorScrollbarInput) {
      isDraggingAuthorScrollbar = false;
      pendingAuthorScrollbarValue = null;
      return;
    }

    const finalValue = Number(
      pendingAuthorScrollbarValue ?? authorScrollbarInput.value
    );

    isDraggingAuthorScrollbar = false;
    setAuthorScrollbarTarget(finalValue);
  };

  authorScrollbarInput?.addEventListener("pointerup", stopAuthorScrollbarDrag);
  authorScrollbarInput?.addEventListener("pointercancel", stopAuthorScrollbarDrag);
  authorScrollbarInput?.addEventListener("change", stopAuthorScrollbarDrag);

  authorScrollbarInput?.addEventListener("input", () => {
    if (!authorTrack || !authorScrollbarInput) {
      return;
    }

    const nextValue = Number(authorScrollbarInput.value);

    setAuthorScrollbarTarget(nextValue);
  });

  document.addEventListener("click", (event) => {
    if (!sortDropdown?.contains(event.target)) {
      closeSortDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSortDropdown();
    }
  });

  renderStoriesPage();
}

const calendarPage = document.querySelector("[data-calendar-page]");
const projectsPage = document.querySelector("[data-projects-page]");

if (calendarPage) {
  const calendarEvents = normalizeMojibakeData([
    {
      title: "Radionica: Ljubav prema sebi",
      slug: "radionica-ljubav-prema-sebi",
      excerpt:
        "Radionica usmjerena na jaÄanje samopouzdanja i briÅ¾nije svakodnevice kroz praktiÄne vjeÅ¾be, razgovor i prostor za predah.",
      body: [
        "Radionica otvara prostor za njeÅ¾an, praktiÄan razgovor o odnosu prema sebi nakon bolesti, lijeÄenja ili razdoblja velikog umora.",
        "Kroz voÄ‘ene vjeÅ¾be, kratke refleksije i razmjenu iskustava sudionice Ä‡e istraÅ¾iti male navike koje vraÄ‡aju osjeÄ‡aj sigurnosti, povjerenja u tijelo i svakodnevne brige o sebi.",
      ],
      quote: "Briga o sebi ne mora biti velika odluka. ÄŒesto poÄinje jednim mirnim trenutkom.",
      image: "../assets/images/story_img.jpeg",
      startDate: "2026-06-04T10:00:00+02:00",
      location: "Split, Udruga Caspera",
    },
    {
      title: "Grupa podrÅ¡ke za Älanice",
      slug: "grupa-podrske-za-clanice",
      excerpt:
        "MjeseÄni susret u sigurnom krugu Älanica udruge uz voÄ‘eni razgovor, razmjenu iskustava i teme koje se otvaraju iz stvarnog Å¾ivota.",
      body: [
        "Grupa podrÅ¡ke okuplja Älanice koje Å¾ele razgovarati bez pritiska, dijeliti ono Å¡to trenutno prolaze i Äuti iskustva drugih Å¾ena.",
        "Susret vodi struÄna suradnica, a teme se oblikuju prema potrebama grupe: od svakodnevnih pitanja do emocionalnih promjena, odnosa i povratka vlastitom ritmu.",
      ],
      quote: "U krugu podrÅ¡ke nema potrebe za objaÅ¡njavanjem onoga Å¡to drugi veÄ‡ razumiju.",
      image: "../assets/images/tu_smo.png",
      startDate: "2026-06-12T18:00:00+02:00",
      location: "Split, gradska knjiÅ¾nica",
    },
    {
      title: "Javna akcija: Dan ruÅ¾iÄaste vrpce",
      slug: "javna-akcija-dan-ruzicaste-vrpce",
      excerpt:
        "Informativni punkt i susret s graÄ‘anima posveÄ‡en vaÅ¾nosti ranog otkrivanja, podrÅ¡ke i zajedniÄkog zagovaranja zdravlja Å¾ena.",
      body: [
        "Javna akcija posveÄ‡ena je ranom otkrivanju raka dojke, dostupnim oblicima podrÅ¡ke i razgovoru s graÄ‘anima o zdravlju Å¾ena.",
        "Volonterke i Älanice Caspere dijelit Ä‡e informativne materijale, odgovarati na pitanja i podsjetiti koliko su redoviti pregledi i pravovremena podrÅ¡ka vaÅ¾ni.",
      ],
      quote: "Svaki razgovor koji potakne pregled ili ohrabri Å¾enu da potraÅ¾i podrÅ¡ku ima stvarnu vrijednost.",
      image: "../assets/images/podrska_info.png",
      startDate: "2026-10-03T09:30:00+02:00",
      location: "Split, Marmontova ulica",
    },
    {
      title: "Predavanje: Prehrana tijekom oporavka",
      slug: "predavanje-prehrana-tijekom-oporavka",
      excerpt:
        "StruÄno predavanje nutricionistice o malim, odrÅ¾ivim navikama koje mogu pomoÄ‡i u razdoblju lijeÄenja i oporavka.",
      body: [
        "Predavanje donosi struÄan, ali razumljiv pregled prehrambenih navika koje mogu podrÅ¾ati tijelo tijekom lijeÄenja i oporavka.",
        "Naglasak je na jednostavnim odabirima, realnim obrocima i pitanjima koja se Äesto pojave kada se svakodnevica promijeni zbog terapije, umora ili novih potreba organizma.",
      ],
      quote: "OdrÅ¾ive navike vrijede viÅ¡e od savrÅ¡enog plana kojeg je teÅ¡ko zadrÅ¾ati.",
      image: "../assets/images/podrska_strucni.png",
      startDate: "2026-05-08T17:30:00+02:00",
      location: "Online prijenos",
    },
    {
      title: "Caspera na Rivi",
      slug: "caspera-na-rivi",
      excerpt:
        "Proljetno okupljanje zajednice uz razgovor, informativne materijale i predstavljanje programa podrÅ¡ke dostupnih Älanicama.",
      body: [
        "Caspera na Rivi zamiÅ¡ljena je kao otvoreno okupljanje zajednice, mjesto susreta za Älanice, obitelji, volonterke i sve koji Å¾ele saznati viÅ¡e o radu udruge.",
        "Uz razgovor i informativne materijale predstavit Ä‡e se programi podrÅ¡ke, aktivnosti i naÄini ukljuÄivanja u zajednicu koja ostaje blizu.",
      ],
      quote: "Zajednica se najlakÅ¡e prepozna ondje gdje je otvorena, dostupna i spremna sasluÅ¡ati.",
      image: "../assets/images/tu_smo2D.png",
      startDate: "2026-04-19T11:00:00+02:00",
      location: "Split, Riva",
    },
    {
      title: "VeÄer iskustava i pitanja",
      slug: "vecer-iskustava-i-pitanja",
      excerpt:
        "Neformalni susret na kojem Älanice i struÄni suradnici otvaraju pitanja koja Äesto ostaju izmeÄ‘u pregleda, papira i svakodnevice.",
      body: [
        "VeÄer iskustava i pitanja namijenjena je otvorenom razgovoru o temama koje se Äesto pojave tek nakon pregleda, u obitelji ili u miru vlastitog doma.",
        "Susret spaja iskustvo Älanica i znanje struÄnih suradnika kako bi odgovori bili jasniji, a osjeÄ‡aj samoÄ‡e manji.",
      ],
      quote: "Nijedno pitanje nije premalo kada nosi brigu koju je vaÅ¾no izgovoriti.",
      image: "../assets/images/podrska_upoznaj.png",
      startDate: "2026-03-27T19:00:00+01:00",
      location: "Split, Dom mladih",
    },
  ]);

  const calendarList = calendarPage.querySelector("[data-calendar-list]");
  const calendarListSections = [
    ...calendarPage.querySelectorAll("[data-calendar-list-section]"),
  ];
  const eventDetail = calendarPage.querySelector("[data-event-detail]");
  const eventTitle = calendarPage.querySelector("[data-event-title]");
  const eventHeroImage = calendarPage.querySelector("[data-event-hero-image]");
  const eventDate = calendarPage.querySelector("[data-event-date]");
  const eventLocation = calendarPage.querySelector("[data-event-location]");
  const eventBody = calendarPage.querySelector("[data-event-body]");
  const eventQuote = calendarPage.querySelector("[data-event-quote]");
  const eventBreadcrumbCurrent = calendarPage.querySelector(
    "[data-event-breadcrumb-current]"
  );
  const filterDropdown = calendarPage.querySelector("[data-calendar-filter-dropdown]");
  const filterDropdownRoot = calendarPage.querySelector(
    ".calendar-page__filter-dropdown"
  );
  const filterToggle = calendarPage.querySelector("[data-calendar-filter-toggle]");
  const filterLabel = calendarPage.querySelector("[data-calendar-filter-label]");
  const filterOptions = [
    ...calendarPage.querySelectorAll("[data-calendar-filter-value]"),
  ];
  let selectedFilter = "all";

  const filterLabels = normalizeMojibakeData({
    all: "Svi",
    upcoming: "NadolazeÄ‡i",
    past: "ProÅ¡li",
  });

  const closeFilterDropdown = () => {
    filterDropdownRoot?.classList.remove("is-open");
    filterToggle?.setAttribute("aria-expanded", "false");
  };

  const openFilterDropdown = () => {
    filterDropdownRoot?.classList.add("is-open");
    filterToggle?.setAttribute("aria-expanded", "true");
  };

  const formatEventDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  const formatEventTime = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateValue));

  const formatBadgeMonth = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", { month: "short" })
      .format(new Date(dateValue))
      .replace(".", "")
      .toUpperCase();

  const formatBadgeDay = (dateValue) =>
    String(new Date(dateValue).getDate()).padStart(2, "0");

  const getEventCardExcerpt = (event) =>
    [event.excerpt, ...(event.body ?? [])].filter(Boolean).join(" ");

  const getEventDetailHref = (event) =>
    `casperin-kalendar.html?event=${encodeURIComponent(event.slug)}`;

  const showEventDetail = (event) => {
    if (!eventDetail) {
      return;
    }

    calendarListSections.forEach((section) => {
      section.hidden = true;
    });
    eventDetail.hidden = false;

    if (eventTitle) {
      eventTitle.textContent = event.title;
    }

    if (eventBreadcrumbCurrent) {
      eventBreadcrumbCurrent.textContent = event.title;
    }

    if (eventHeroImage) {
      eventHeroImage.src = event.image;
      eventHeroImage.alt = `Vizual dogaÄ‘aja ${event.title}`;
    }

    if (eventDate) {
      eventDate.dateTime = event.startDate;
      eventDate.textContent = formatEventDate(event.startDate);
    }

    if (eventLocation) {
      eventLocation.textContent = event.location;
    }

    if (eventBody) {
      const eventParagraphs = event.body?.length ? event.body : [event.excerpt];
      eventBody.innerHTML = eventParagraphs
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    }

    if (eventQuote) {
      eventQuote.textContent = event.quote ?? "";
      eventQuote.hidden = !event.quote;
    }

    document.title = `Caspera | ${event.title}`;
  };

  const showCalendarList = () => {
    calendarListSections.forEach((section) => {
      section.hidden = false;
    });

    if (eventDetail) {
      eventDetail.hidden = true;
    }
  };

  const isUpcomingEvent = (eventDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(eventDate).getTime() >= today.getTime();
  };

  const getFilteredEvents = () => {
    const upcomingEvents = [];
    const pastEvents = [];

    calendarEvents.forEach((event) => {
      if (isUpcomingEvent(event.startDate)) {
        upcomingEvents.push(event);
        return;
      }

      pastEvents.push(event);
    });

    upcomingEvents.sort(
      (firstEvent, secondEvent) =>
        new Date(firstEvent.startDate).getTime() -
        new Date(secondEvent.startDate).getTime()
    );
    pastEvents.sort(
      (firstEvent, secondEvent) =>
        new Date(secondEvent.startDate).getTime() -
        new Date(firstEvent.startDate).getTime()
    );

    if (selectedFilter === "upcoming") {
      return upcomingEvents;
    }

    if (selectedFilter === "past") {
      return pastEvents;
    }

    return [...upcomingEvents, ...pastEvents];
  };

  const renderEvents = () => {
    if (!calendarList) {
      return;
    }

    const events = getFilteredEvents();

    if (filterLabel) {
      filterLabel.textContent = filterLabels[selectedFilter];
    }

    filterOptions.forEach((option) => {
      option.setAttribute(
        "aria-selected",
        String(option.dataset.calendarFilterValue === selectedFilter)
      );
    });

    if (!events.length) {
      calendarList.innerHTML = normalizeMojibakeText(
        '<p class="calendar-page__empty">TrenutaÄno nema dogaÄ‘aja u odabranoj skupini. PokuÅ¡ajte s drugim filtrom.</p>'
      );
      return;
    }

    calendarList.innerHTML = normalizeMojibakeText(
      events
        .map((event) => {
          const eventDate = new Date(event.startDate);

          return `
          <article class="calendar-page__card">
            <a class="calendar-page__card-link" href="${getEventDetailHref(event)}" aria-label="Otvori dogaÄ‘aj ${event.title}">
              <div class="calendar-page__card-media">
                <img class="calendar-page__card-image" src="${event.image}" alt="Vizual dogaÄ‘aja ${event.title}" />
                <div class="calendar-page__date-badge" aria-label="${formatEventDate(event.startDate)}">
                  <span class="calendar-page__date-day">${formatBadgeDay(event.startDate)}</span>
                  <span class="calendar-page__date-month">${formatBadgeMonth(event.startDate)}</span>
                  <span class="calendar-page__date-divider" aria-hidden="true"></span>
                  <span class="calendar-page__date-year">${eventDate.getFullYear()}.</span>
                </div>
              </div>
              <div class="calendar-page__card-content">
                <div class="calendar-page__card-meta">
                  <span class="calendar-page__meta-item calendar-page__meta-item--time">
                    ${formatEventTime(event.startDate)}
                  </span>
                  <span class="calendar-page__meta-item calendar-page__meta-item--location">
                    ${event.location}
                  </span>
                </div>
                <h2 class="calendar-page__card-title">${event.title}</h2>
                <p class="calendar-page__card-excerpt">${getEventCardExcerpt(event)}</p>
                <span class="calendar-page__card-cta">Saznaj viÅ¡e</span>
              </div>
            </a>
          </article>
        `;
        })
        .join("")
    );
  };

  filterToggle?.addEventListener("click", () => {
    const isOpen = filterDropdownRoot?.classList.contains("is-open");

    if (isOpen) {
      closeFilterDropdown();
      return;
    }

    openFilterDropdown();
  });

  filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedFilter = option.dataset.calendarFilterValue ?? "all";
      closeFilterDropdown();
      renderEvents();
      filterToggle?.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!filterDropdown?.contains(event.target)) {
      closeFilterDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFilterDropdown();
    }
  });

  const selectedEventSlug = new URLSearchParams(window.location.search).get("event");
  const selectedEvent = calendarEvents.find(
    (event) => event.slug === selectedEventSlug
  );

  if (selectedEvent) {
    showEventDetail(selectedEvent);
  } else {
    showCalendarList();
    renderEvents();
  }
}

if (projectsPage) {
  const projects = [];

  const projectsList = projectsPage.querySelector("[data-projects-list]");
  const projectsListSections = [
    ...projectsPage.querySelectorAll("[data-projects-list-section]"),
  ];
  const projectDetail = projectsPage.querySelector("[data-project-detail]");
  const projectTitle = projectsPage.querySelector("[data-project-title]");
  const projectHeroImage = projectsPage.querySelector("[data-project-hero-image]");
  const projectDate = projectsPage.querySelector("[data-project-date]");
  const projectBody = projectsPage.querySelector("[data-project-body]");
  const projectQuote = projectsPage.querySelector("[data-project-quote]");
  const projectBreadcrumbCurrent = projectsPage.querySelector(
    "[data-project-breadcrumb-current]"
  );
  const projectsSortDropdown = projectsPage.querySelector(
    "[data-projects-sort-dropdown]"
  );
  const projectsSortDropdownRoot = projectsPage.querySelector(
    ".calendar-page__filter-dropdown"
  );
  const projectsSortToggle = projectsPage.querySelector("[data-projects-sort-toggle]");
  const projectsSortLabel = projectsPage.querySelector("[data-projects-sort-label]");
  const projectsSortOptions = [
    ...projectsPage.querySelectorAll("[data-projects-sort-value]"),
  ];
  const projectSortLabels = normalizeMojibakeData({
    newest: "Najnoviji",
    oldest: "Najstariji",
  });
  let selectedProjectsSort = "newest";

  const formatProjectDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  const getProjectDetailHref = (project) =>
    `nasi-projekti.html?project=${encodeURIComponent(project.slug)}`;

  const closeProjectsSortDropdown = () => {
    projectsSortDropdownRoot?.classList.remove("is-open");
    projectsSortToggle?.setAttribute("aria-expanded", "false");
  };

  const openProjectsSortDropdown = () => {
    projectsSortDropdownRoot?.classList.add("is-open");
    projectsSortToggle?.setAttribute("aria-expanded", "true");
  };

  const getSortedProjects = () =>
    [...projects].sort((firstProject, secondProject) => {
      const firstTime = new Date(firstProject.publishDate).getTime();
      const secondTime = new Date(secondProject.publishDate).getTime();

      if (selectedProjectsSort === "oldest") {
        return firstTime - secondTime;
      }

      return secondTime - firstTime;
    });

  const showProjectDetail = (project) => {
    if (!projectDetail) {
      return;
    }

    projectsListSections.forEach((section) => {
      section.hidden = true;
    });
    projectDetail.hidden = false;

    if (projectTitle) {
      projectTitle.textContent = project.title;
    }

    if (projectBreadcrumbCurrent) {
      projectBreadcrumbCurrent.textContent = project.title;
    }

    if (projectHeroImage) {
      projectHeroImage.src = project.image;
      projectHeroImage.alt = `Vizual projekta ${project.title}`;
    }

    if (projectDate) {
      projectDate.textContent = formatProjectDate(project.publishDate);
    }

    if (projectBody) {
      projectBody.innerHTML = project.body
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    }

    if (projectQuote) {
      projectQuote.textContent = project.quote ?? "";
      projectQuote.hidden = !project.quote;
    }

    document.title = `Caspera | ${project.title}`;
  };

  const showProjectsList = () => {
    projectsListSections.forEach((section) => {
      section.hidden = false;
    });

    if (projectDetail) {
      projectDetail.hidden = true;
    }
  };

  const renderProjects = () => {
    if (!projectsList) {
      return;
    }

    if (projectsSortLabel) {
      projectsSortLabel.textContent = projectSortLabels[selectedProjectsSort];
    }

    projectsSortOptions.forEach((option) => {
      option.setAttribute(
        "aria-selected",
        String(option.dataset.projectsSortValue === selectedProjectsSort)
      );
    });

    if (projects.length === 0) {
      projectsList.innerHTML = normalizeMojibakeText(
        '<p class="calendar-page__empty">Trenutno nema objavljenih projekata.</p>'
      );
      return;
    }

    projectsList.innerHTML = normalizeMojibakeText(
      getSortedProjects()
        .map(
          (project) => `
            <article class="calendar-page__card projects-page__card">
              <a class="calendar-page__card-link" href="${getProjectDetailHref(project)}" aria-label="Otvori projekt ${project.title}">
                <div class="calendar-page__card-media">
                  <img class="calendar-page__card-image" src="${project.image}" alt="Vizual projekta ${project.title}" />
                </div>
                <div class="calendar-page__card-content">
                  <div class="calendar-page__card-meta">
                    <span class="calendar-page__meta-item calendar-page__meta-item--date">
                      ${formatProjectDate(project.publishDate)}
                    </span>
                  </div>
                  <h2 class="calendar-page__card-title">${project.title}</h2>
                  <p class="calendar-page__card-excerpt">${project.excerpt}</p>
                  <span class="calendar-page__card-cta">Saznaj viÅ¡e</span>
                </div>
              </a>
            </article>
          `
        )
        .join("")
    );
  };

  projectsSortToggle?.addEventListener("click", () => {
    const isOpen = projectsSortDropdownRoot?.classList.contains("is-open");

    if (isOpen) {
      closeProjectsSortDropdown();
      return;
    }

    openProjectsSortDropdown();
  });

  projectsSortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedProjectsSort = option.dataset.projectsSortValue ?? "newest";
      closeProjectsSortDropdown();
      renderProjects();
      projectsSortToggle?.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!projectsSortDropdown?.contains(event.target)) {
      closeProjectsSortDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectsSortDropdown();
    }
  });

  const selectedProjectSlug = new URLSearchParams(window.location.search).get("project");
  const selectedProject = projects.find(
    (project) => project.slug === selectedProjectSlug
  );

  if (selectedProject) {
    showProjectDetail(selectedProject);
  } else {
    showProjectsList();
    renderProjects();
  }
}

const storyDetailPage = document.querySelector("[data-story-detail-page]");
const blogPage = document.querySelector("[data-blog-page]");
const galleryPage = document.querySelector("[data-gallery-page]");

if (galleryPage) {
  const galleryModal = document.querySelector("[data-gallery-modal]");
  const galleryModalTitle = galleryModal?.querySelector("[data-gallery-modal-title]");
  const galleryModalDate = galleryModal?.querySelector("[data-gallery-modal-date]");
  const galleryModalGrid = galleryModal?.querySelector("[data-gallery-modal-grid]");
  const galleryTriggers = [...galleryPage.querySelectorAll("[data-gallery-trigger]")];
  const galleryCloseControls = [...(galleryModal?.querySelectorAll("[data-gallery-close]") ?? [])];
  const formatDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  let lastGalleryTrigger = null;

  const closeGalleryModal = () => {
    if (!galleryModal || galleryModal.hidden) {
      return;
    }

    galleryModal.hidden = true;
    galleryPage.classList.remove("modal-open");
    lastGalleryTrigger?.focus();
  };

  const openGalleryModal = (trigger) => {
    if (!galleryModal || !galleryModalGrid) {
      return;
    }

    const title = trigger.dataset.galleryTitle ?? "";
    const date = trigger.dataset.galleryDate ?? "";
    const images = (trigger.dataset.galleryImages ?? "")
      .split("|")
      .map((image) => image.trim())
      .filter(Boolean);

    if (galleryModalTitle) {
      galleryModalTitle.textContent = title;
    }

    if (galleryModalDate) {
      galleryModalDate.dateTime = date;
      galleryModalDate.textContent = formatDate(date);
    }

    galleryModalGrid.innerHTML = images
      .map(
        (imagePath, index) => `
          <figure class="gallery-modal__photo">
            <img src="${imagePath}" alt="Fotografija ${index + 1} iz albuma ${title}" />
          </figure>
        `
      )
      .join("");

    lastGalleryTrigger = trigger;
    galleryPage.classList.add("modal-open");
    galleryModal.hidden = false;
    galleryModal.querySelector("[data-gallery-close]")?.focus();
  };

  galleryTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openGalleryModal(trigger);
    });
  });

  galleryCloseControls.forEach((control) => {
    control.addEventListener("click", closeGalleryModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGalleryModal();
    }
  });
}

if (blogPage) {
  const blogAuthor = normalizeMojibakeData({
    slug: "sonja",
    name: "Sonja",
    image: "../assets/images/ivana_juric.jpg",
    bio: "Predsjednica udruge Caspera, posveÄ‡ena podrÅ¡ci, zagovaranju i osnaÅ¾ivanju Å¾ena kroz zajednicu, iskustvo i razgovor.",
  });

  const blogPosts = normalizeMojibakeData([
    {
      title: "ZaÅ¡to piÅ¡em ovaj blog",
      slug: "pojedina-prica.html?story=zasto-pisem-ovaj-blog",
      excerpt:
        "Htjela sam otvoriti prostor za iskren pogled iznutra: o radu udruge, Å¾enama koje susreÄ‡emo i trenucima koji nas mijenjaju.",
      coverImage: "../assets/images/story_img.jpeg",
      publishDate: "2024-05-06",
    },
    {
      title: "Kad podrÅ¡ka nije velika gesta nego tiha prisutnost",
      slug: "pojedina-prica.html?story=kad-podrska-nije-velika-gesta",
      excerpt:
        "Najdublju razliku Äesto naprave male stvari: poruka u pravo vrijeme, odlazak na pregled zajedno i osjeÄ‡aj da nisi sama.",
      coverImage: "../assets/images/podrska_upoznaj.png",
      publishDate: "2024-04-24",
    },
    {
      title: "Å to me Å¾ene iz CasperÐµ uÄe o hrabrosti",
      slug: "pojedina-prica.html?story=sto-me-zene-iz-caspere-uce-o-hrabrosti",
      excerpt:
        "Hrabrost rijetko izgleda glasno. NajÄeÅ¡Ä‡e je vidim u strpljenju, ranjivosti i odluci da se ide dalje korak po korak.",
      coverImage: "../assets/images/tu_smo.png",
      publishDate: "2024-04-16",
    },
    {
      title: "ZaÅ¡to zajednica mijenja iskustvo bolesti",
      slug: "pojedina-prica.html?story=zasto-zajednica-mijenja-iskustvo-bolesti",
      excerpt:
        "Kad postoji mjesto na kojem te netko razumije bez puno objaÅ¡njavanja, teret postaje lakÅ¡i, a oporavak manje usamljen.",
      coverImage: "../assets/images/tu_smo_3D.png",
      publishDate: "2024-04-03",
    },
    {
      title: "IzmeÄ‘u administracije i emocija: stvarni rad udruge",
      slug: "pojedina-prica.html?story=izmedju-administracije-i-emocija",
      excerpt:
        "VoÄ‘enje udruge nije samo organizacija i planiranje. To je i stalno balansiranje izmeÄ‘u praktiÄne pomoÄ‡i i ljudske blizine.",
      coverImage: "../assets/images/podrska_info.png",
      publishDate: "2024-03-21",
    },
    {
      title: "Kako saÄuvati njeÅ¾nost kad je svakodnevica teÅ¡ka",
      slug: "pojedina-prica.html?story=kako-sacuvati-njeznost-kad-je-svakodnevica-teska",
      excerpt:
        "NjeÅ¾nost nije slabost. Ona je naÄin da ostanemo prisutne, briÅ¾ne i povezane sa sobom i drugima i onda kad je najteÅ¾e.",
      coverImage: "../assets/images/bg_main.webp",
      publishDate: "2024-03-08",
    },
  ]);

  const storyRowsPerPage = 3;
  const storiesList = blogPage.querySelector("[data-blog-list]");
  const pagination = blogPage.querySelector("[data-blog-pagination]");
  const sortDropdown = blogPage.querySelector("[data-blog-sort-dropdown]");
  const sortDropdownRoot = blogPage.querySelector(".stories-page__sort-dropdown");
  const sortToggle = blogPage.querySelector("[data-blog-sort-toggle]");
  const sortLabel = blogPage.querySelector("[data-blog-sort-label]");
  const sortOptions = [...blogPage.querySelectorAll("[data-blog-sort-value]")];
  let selectedSort = "newest";
  let currentPage = 1;
  let currentStoriesPerPage = storyRowsPerPage;

  const sortLabels = {
    newest: "Najnovije",
    oldest: "Najstarije",
  };

  const closeSortDropdown = () => {
    sortDropdownRoot?.classList.remove("is-open");
    sortToggle?.setAttribute("aria-expanded", "false");
  };

  const openSortDropdown = () => {
    sortDropdownRoot?.classList.add("is-open");
    sortToggle?.setAttribute("aria-expanded", "true");
  };

  const formatDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  const getBlogCardExcerpt = (post) =>
    [post.excerpt, ...(post.body ?? [])].filter(Boolean).join(" ");

  const getStoriesColumns = () => {
    if (window.innerWidth <= 900) {
      return 1;
    }

    if (window.innerWidth <= 1200) {
      return 2;
    }

    return 3;
  };

  const getStoriesPerPage = () => getStoriesColumns() * storyRowsPerPage;

  currentStoriesPerPage = getStoriesPerPage();

  const getSortedPosts = () => {
    const posts = [...blogPosts];

    posts.sort((firstPost, secondPost) => {
      const firstDate = new Date(firstPost.publishDate).getTime();
      const secondDate = new Date(secondPost.publishDate).getTime();

      return selectedSort === "oldest" ? firstDate - secondDate : secondDate - firstDate;
    });

    return posts;
  };

  const getPaginationItems = (page, totalPages) => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, null, totalPages];
    }

    if (page >= totalPages - 2) {
      return [1, null, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, null, page, null, totalPages];
  };

  const renderPagination = (totalPages) => {
    if (!pagination) {
      return;
    }

    pagination.innerHTML = "";

    if (totalPages <= 1) {
      return;
    }

    const previousButton = document.createElement("button");
    previousButton.className = "stories-page__page-button";
    previousButton.type = "button";
    previousButton.textContent = normalizeMojibakeText("â€¹");
    previousButton.setAttribute(
      "aria-label",
      normalizeMojibakeText("Prethodna stranica")
    );
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", () => {
      currentPage -= 1;
      renderBlogPage();
    });
    pagination.append(previousButton);

    getPaginationItems(currentPage, totalPages).forEach((item) => {
      if (item === null) {
        const ellipsis = document.createElement("span");
        ellipsis.className = "stories-page__page-ellipsis";
        ellipsis.textContent = normalizeMojibakeText("â€¦");
        pagination.append(ellipsis);
        return;
      }

      const pageButton = document.createElement("button");
      pageButton.className = "stories-page__page-button";
      pageButton.type = "button";
      pageButton.textContent = String(item);

      if (item === currentPage) {
        pageButton.setAttribute("aria-current", "page");
      } else {
        pageButton.addEventListener("click", () => {
          currentPage = item;
          renderBlogPage();
        });
      }

      pagination.append(pageButton);
    });

    const nextButton = document.createElement("button");
    nextButton.className = "stories-page__page-button";
    nextButton.type = "button";
    nextButton.textContent = normalizeMojibakeText("â€º");
    nextButton.setAttribute(
      "aria-label",
      normalizeMojibakeText("SljedeÄ‡a stranica")
    );
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
      currentPage += 1;
      renderBlogPage();
    });
    pagination.append(nextButton);
  };

  const renderPosts = (pagePosts) => {
    if (!storiesList) {
      return;
    }

    storiesList.innerHTML = normalizeMojibakeText(
      pagePosts
        .map(
          (post) => `
          <article class="stories-page__story-card">
            <a class="stories-page__story-link" href="${post.slug}">
              <div class="stories-page__story-media">
                <img class="stories-page__story-image" src="${post.coverImage}" alt="Naslovna fotografija blog objave ${post.title}" />
              </div>
              <div class="stories-page__story-content">
                <div class="stories-page__story-meta">
                  <span class="stories-page__story-author">${blogAuthor.name}</span>
                  <time class="stories-page__story-date" datetime="${post.publishDate}">${formatDate(post.publishDate)}</time>
                </div>
                <h2 class="stories-page__story-title">${post.title}</h2>
                <p class="stories-page__story-excerpt">${getBlogCardExcerpt(post)}</p>
                <span class="stories-page__story-cta">ProÄitaj objavu</span>
              </div>
            </a>
          </article>
        `
        )
        .join("")
    );
  };

  function renderBlogPage() {
    const sortedPosts = getSortedPosts();
    const storiesPerPage = getStoriesPerPage();
    currentStoriesPerPage = storiesPerPage;
    const totalPages = Math.max(1, Math.ceil(sortedPosts.length / storiesPerPage));

    currentPage = Math.min(currentPage, totalPages);

    const startIndex = (currentPage - 1) * storiesPerPage;
    const pagePosts = sortedPosts.slice(startIndex, startIndex + storiesPerPage);

    if (sortLabel) {
      sortLabel.textContent = sortLabels[selectedSort];
    }

    sortOptions.forEach((option) => {
      option.setAttribute(
        "aria-selected",
        String(option.dataset.blogSortValue === selectedSort)
      );
    });

    renderPosts(pagePosts);
    renderPagination(totalPages);
  }

  sortToggle?.addEventListener("click", () => {
    const isOpen = sortDropdownRoot?.classList.contains("is-open");

    if (isOpen) {
      closeSortDropdown();
      return;
    }

    openSortDropdown();
  });

  sortOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedSort = option.dataset.blogSortValue ?? "newest";
      currentPage = 1;
      closeSortDropdown();
      renderBlogPage();
      sortToggle?.focus();
    });
  });

  window.addEventListener("resize", () => {
    const nextStoriesPerPage = getStoriesPerPage();

    if (nextStoriesPerPage !== currentStoriesPerPage) {
      renderBlogPage();
    }
  });

  document.addEventListener("click", (event) => {
    if (!sortDropdown?.contains(event.target)) {
      closeSortDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSortDropdown();
    }
  });

  renderBlogPage();
}

if (storyDetailPage) {
  const storyAuthors = normalizeMojibakeData([
    {
      slug: "ana-m",
      name: "Ana M.",
      image: "../assets/images/ana_glavina.jpg",
      bio: "PiÅ¡e o malim koracima i povratku svakodnevici.",
    },
    {
      slug: "ivana-k",
      name: "Ivana K.",
      image: "../assets/images/ivana_juric.jpg",
      bio: "Dijeli iskustva o postavljanju granica i sluÅ¡anju sebe.",
    },
    {
      slug: "petra-l",
      name: "Petra L.",
      image: "../assets/images/Petra LozanÄiÄ‡_edited.jpg",
      bio: "BiljeÅ¾i put prihvaÄ‡anja i ozdravljenja.",
    },
    {
      slug: "maja-h",
      name: "Maja H.",
      image: "../assets/images/Marja Ban.jpg",
      bio: "Otvara teme straha, tiÅ¡ine i ponovnog pronalaska nade.",
    },
    {
      slug: "marija-b",
      name: "Marija B.",
      image: "../assets/images/Marija Selak.jpg",
      bio: "PiÅ¡e o odnosima, podrÅ¡ci i povratku povjerenja.",
    },
    {
      slug: "jelena-r",
      name: "Jelena R.",
      image: "../assets/images/Lara RadoÅ¡eviÄ‡.jpg",
      bio: "Dijeli iskustva o tijelu, identitetu i hrabrosti.",
    },
    {
      slug: "katarina-p",
      name: "Katarina P.",
      image: "../assets/images/Nikolina DragoÅ¡eviÄ‡.jpg",
      bio: "PiÅ¡e o njeÅ¾nosti, rutini i pronalasku mira u malim stvarima.",
    },
    {
      slug: "sonja",
      name: "Sonja",
      image: "../assets/images/ivana_juric.jpg",
      bio: "Predsjednica udruge Caspera, posveÄ‡ena podrÅ¡ci, zagovaranju i osnaÅ¾ivanju Å¾ena kroz zajednicu, iskustvo i razgovor.",
    },
  ]);

  const storyArticles = normalizeMojibakeData([
    {
      title: "Kad sam sebe ponovno stavila na prvo mjesto",
      slug: "kad-sam-sebe-ponovno-stavila-na-prvo-mjesto",
      excerpt:
        "Dugo sam brinula o svima, osim o sebi. Tek kad sam nauÄila reÄ‡i 'ne', poÄela sam ponovno Äuti svoj glas.",
      coverImage: "../assets/images/story_img.jpeg",
      publishDate: "2024-04-12",
      authorSlug: "ivana-k",
      quote:
        "Ako sam to uspjela ja, moÅ¾eÅ¡ i ti. Ti si vaÅ¾na. Ti si dovoljna. Ti zasluÅ¾ujeÅ¡.",
      body: [
        "Godinama sam bila osoba koja Ä‡e sve stiÄ‡i, sve zapamtiti i svakome biti oslonac. U toj ulozi bilo je neÄega poznatog i sigurnog, ali i neÄega Å¡to me polako udaljavalo od mene same. Kad je tijelo poÄelo traÅ¾iti predah, shvatila sam koliko dugo ignoriram vlastite granice.",
        "Prvo sam uÄila zastati bez osjeÄ‡aja krivnje. To nije doÅ¡lo preko noÄ‡i. Bilo je potrebno puno malih odluka: odmoriti kad sam umorna, odbiti ono Å¡to ne mogu nositi i priznati da mi treba pomoÄ‡. Svaki put kada sam izabrala sebe, Äinilo mi se da radim neÅ¡to neobiÄno. S vremenom je taj izbor postao njeÅ¾niji i prirodniji.",
        "NajveÄ‡a promjena nije bila izvana nego iznutra. PoÄela sam jasnije Äuti Å¡to mi treba, Å¡to me umiruje i uz koga mogu ostati svoja. Danas i dalje uÄim, ali viÅ¡e ne mislim da ljubav prema drugima mora znaÄiti odustajanje od sebe. Upravo suprotno: kada sebe stavim na prvo mjesto, imam viÅ¡e snage za sve koje volim.",
      ],
    },
    {
      title: "Iz tame prema svjetlu",
      slug: "iz-tame-prema-svjetlu",
      excerpt:
        "Nekad sam mislila da se iz najteÅ¾ih trenutaka ne moÅ¾e izaÄ‡i. Danas znam da je svaki korak, ma koliko malen, korak prema slobodi.",
      coverImage: "../assets/images/sandra_zekic_tomas.jpg",
      publishDate: "2024-04-09",
      authorSlug: "maja-h",
    },
    {
      title: "PrihvaÄ‡anje je bio moj poÄetak",
      slug: "prihvacanje-je-bio-moj-pocetak",
      excerpt:
        "Prihvatiti ono Å¡to se dogodilo nije znaÄilo odustati. Za mene je to bio poÄetak ozdravljenja.",
      coverImage: "../assets/images/placeholder.png",
      publishDate: "2024-04-05",
      authorSlug: "petra-l",
    },
    {
      title: "Mali koraci, velike promjene",
      slug: "mali-koraci-velike-promjene",
      excerpt:
        "Nisam preko noÄ‡i postala jaÄa. Dan po dan, korak po korak, gradila sam svoju novu priÄu.",
      coverImage: "../assets/images/tu_smo2D.png",
      publishDate: "2024-04-01",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam nauÄila traÅ¾iti pomoÄ‡",
      slug: "kad-sam-naucila-traziti-pomoc",
      excerpt:
        "NajveÄ‡a promjena dogodila se kad sam priznala da ne mogu sve sama i dopustila drugima da mi budu oslonac.",
      coverImage: "../assets/images/podrska_upoznaj.png",
      publishDate: "2024-03-28",
      authorSlug: "marija-b",
    },
    {
      title: "Tijelo koje ponovno uÄim voljeti",
      slug: "tijelo-koje-ponovno-ucim-voljeti",
      excerpt:
        "Pogled u ogledalo dugo mi je bio teÅ¾ak. S vremenom sam nauÄila gledati sebe s viÅ¡e njeÅ¾nosti i manje straha.",
      coverImage: "../assets/images/tu_smo_3D.png",
      publishDate: "2024-03-24",
      authorSlug: "jelena-r",
    },
    {
      title: "Rituali koji su mi vratili mir",
      slug: "rituali-koji-su-mi-vratili-mir",
      excerpt:
        "ÄŒaj ujutro, kratka Å¡etnja i nekoliko dubokih udaha postali su moje sidro u danima kada je sve bilo previÅ¡e.",
      coverImage: "../assets/images/bg_main.webp",
      publishDate: "2024-03-18",
      authorSlug: "katarina-p",
    },
    {
      title: "Kad sam prestala skrivati emocije",
      slug: "kad-sam-prestala-skrivati-emocije",
      excerpt:
        "Godinama sam glumila snagu. Prava snaga doÅ¡la je tek kada sam si dopustila ranjivost i suze.",
      coverImage: "../assets/images/tu_smo.png",
      publishDate: "2024-03-11",
      authorSlug: "ivana-k",
    },
    {
      title: "Ponovno vjerujem svom tijelu",
      slug: "ponovno-vjerujem-svom-tijelu",
      excerpt:
        "Nakon lijeÄenja trebalo mi je vrijeme da prestanem tijelo doÅ¾ivljavati kao neprijatelja i poÄnem ga sluÅ¡ati.",
      coverImage: "../assets/images/podrska_strucni.png",
      publishDate: "2024-03-04",
      authorSlug: "maja-h",
    },
    {
      title: "Moja obitelj i ja uÄile smo zajedno",
      slug: "moja-obitelj-i-ja-ucile-smo-zajedno",
      excerpt:
        "Nitko od nas nije znao kako Ä‡e izgledati oporavak, ali upravo nas je to zajedniÄko neznanje zbliÅ¾ilo viÅ¡e nego ikad.",
      coverImage: "../assets/images/podrska_info.png",
      publishDate: "2024-02-25",
      authorSlug: "marija-b",
    },
    {
      title: "Snaga njeÅ¾nih dana",
      slug: "snaga-njeznih-dana",
      excerpt:
        "Nekada su najhrabriji dani bili upravo oni najtiÅ¡i, kada sam birala odmor umjesto forsiranja.",
      coverImage: "../assets/images/clanarina.png",
      publishDate: "2024-02-17",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam ponovno poÅ¾eljela planirati buduÄ‡nost",
      slug: "kad-sam-ponovno-pozeljela-planirati-buducnost",
      excerpt:
        "Dugo nisam mogla gledati dalje od sljedeÄ‡eg pregleda. Onda su se polako vratili Å¾elje, planovi i radoznalost.",
      coverImage: "../assets/images/doniraj.png",
      publishDate: "2024-02-08",
      authorSlug: "petra-l",
    },
    {
      title: "ZaÅ¡to piÅ¡em ovaj blog",
      slug: "zasto-pisem-ovaj-blog",
      excerpt:
        "Htjela sam otvoriti prostor za iskren pogled iznutra: o radu udruge, Å¾enama koje susreÄ‡emo i trenucima koji nas mijenjaju.",
      coverImage: "../assets/images/story_img.jpeg",
      publishDate: "2024-05-06",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
      quote:
        "Pisati znaÄi ostaviti trag iskustva koji nekome drugome moÅ¾e postati oslonac baÅ¡ onda kada mu je najpotrebniji.",
      body: [
        "Ovaj blog nastao je iz potrebe da uz sluÅ¾bene informacije postoji i prostor za osobniji glas. U radu udruge svakodnevno susreÄ‡em priÄe koje nose hrabrost, umor, nadu i neizgovorena pitanja. Å½eljela sam mjesto na kojem se o tome moÅ¾e govoriti mirno, iskreno i bez Å¾urbe.",
        "Kada vodite udrugu, Äesto ste izmeÄ‘u svijeta organizacije i svijeta emocija. Jedan dan pripremate sastanak, drugi dan nekome odgovarate na poruku koja dolazi usred straha ili neizvjesnosti. Oboje je vaÅ¾no. Oboje traÅ¾i prisutnost. Upravo zato ovaj blog nije samo pregled aktivnosti, nego i zapis o ljudima, odnosima i onome Å¡to uÄimo jedni od drugih.",
        "Ako ove objave nekome pomognu da se osjeti viÄ‘enom, razumljenom ili barem malo manje samom, onda je ovaj prostor ispunio svoju svrhu. To je i razlog zaÅ¡to piÅ¡em: da iskustvo ne ostane zatvoreno, nego postane most prema drugima.",
      ],
    },
    {
      title: "Kad podrÅ¡ka nije velika gesta nego tiha prisutnost",
      slug: "kad-podrska-nije-velika-gesta",
      excerpt:
        "Najdublju razliku Äesto naprave male stvari: poruka u pravo vrijeme, odlazak na pregled zajedno i osjeÄ‡aj da nisi sama.",
      coverImage: "../assets/images/podrska_upoznaj.png",
      publishDate: "2024-04-24",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
    },
    {
      title: "Å to me Å¾ene iz CasperÐµ uÄe o hrabrosti",
      slug: "sto-me-zene-iz-caspere-uce-o-hrabrosti",
      excerpt:
        "Hrabrost rijetko izgleda glasno. NajÄeÅ¡Ä‡e je vidim u strpljenju, ranjivosti i odluci da se ide dalje korak po korak.",
      coverImage: "../assets/images/tu_smo.png",
      publishDate: "2024-04-16",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
    },
    {
      title: "ZaÅ¡to zajednica mijenja iskustvo bolesti",
      slug: "zasto-zajednica-mijenja-iskustvo-bolesti",
      excerpt:
        "Kad postoji mjesto na kojem te netko razumije bez puno objaÅ¡njavanja, teret postaje lakÅ¡i, a oporavak manje usamljen.",
      coverImage: "../assets/images/tu_smo_3D.png",
      publishDate: "2024-04-03",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
    },
    {
      title: "IzmeÄ‘u administracije i emocija: stvarni rad udruge",
      slug: "izmedju-administracije-i-emocija",
      excerpt:
        "VoÄ‘enje udruge nije samo organizacija i planiranje. To je i stalno balansiranje izmeÄ‘u praktiÄne pomoÄ‡i i ljudske blizine.",
      coverImage: "../assets/images/podrska_info.png",
      publishDate: "2024-03-21",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
    },
    {
      title: "Kako saÄuvati njeÅ¾nost kad je svakodnevica teÅ¡ka",
      slug: "kako-sacuvati-njeznost-kad-je-svakodnevica-teska",
      excerpt:
        "NjeÅ¾nost nije slabost. Ona je naÄin da ostanemo prisutne, briÅ¾ne i povezane sa sobom i drugima i onda kad je najteÅ¾e.",
      coverImage: "../assets/images/bg_main.webp",
      publishDate: "2024-03-08",
      authorSlug: "sonja",
      sectionLabel: "Sonjin blog",
      sectionHref: "sonjin-blog.html",
    },
  ]);

  const authorLookup = new Map(storyAuthors.map((author) => [author.slug, author]));
  const formatDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

  const getStoryContent = (story, author) => {
    if (story.body && story.quote) {
      return normalizeMojibakeData(story);
    }

    return normalizeMojibakeData({
      ...story,
      quote:
        "Svaki mali korak prema sebi vrijedi viÅ¡e nego Å¡to mislimo dok ga tek uÄimo napraviti.",
      body: [
        `${story.excerpt} Trebalo mi je vremena da prihvatim da oporavak nema ravnu liniju i da se snaga Äesto krije u tihim, svakodnevnim odlukama.`,
        `${author.name} svoju je priÄu gradila polako, uz podrÅ¡ku ljudi kojima vjeruje i uz sve viÅ¡e prostora za odmor, njeÅ¾nost i iskrenost prema sebi.`,
        "Danas znam da se promjena ne dogaÄ‘a odjednom. DogaÄ‘a se u malim pomacima, u naÄinu na koji razgovaramo sa sobom i u tome koliko si dopuÅ¡tamo traÅ¾iti mir kada nam je najpotrebniji.",
      ],
    });
  };

  const params = new URLSearchParams(window.location.search);
  const selectedSlug = params.get("story");
  const selectedStory =
    storyArticles.find((story) => story.slug === selectedSlug) ?? storyArticles[0];
  const author = authorLookup.get(selectedStory.authorSlug);
  const story = getStoryContent(selectedStory, author);
  const currentUrl = window.location.href;

  const breadcrumbCurrent = storyDetailPage.querySelector(
    "[data-story-breadcrumb-current]"
  );
  const breadcrumbSectionLink = storyDetailPage.querySelector(
    "[data-story-breadcrumb-section-link]"
  );
  const heroImage = storyDetailPage.querySelector("[data-story-hero-image]");
  const imageCaption = storyDetailPage.querySelector("[data-story-image-caption]");
  const title = storyDetailPage.querySelector("[data-story-title]");
  const authorName = storyDetailPage.querySelector("[data-story-author-name]");
  const publishDate = storyDetailPage.querySelector("[data-story-publish-date]");
  const body = storyDetailPage.querySelector("[data-story-body]");
  const quote = storyDetailPage.querySelector("[data-story-quote]");
  const shareFacebook = storyDetailPage.querySelector("[data-share-facebook]");
  const shareLink = storyDetailPage.querySelector("[data-share-link]");
  const shareEmail = storyDetailPage.querySelector("[data-share-email]");
  const authorCardImage = storyDetailPage.querySelector("[data-story-author-image]");
  const authorCardName = storyDetailPage.querySelector("[data-story-author-card-name]");
  const authorCardBio = storyDetailPage.querySelector("[data-story-author-card-bio]");

  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = story.title;
  }

  if (breadcrumbSectionLink) {
    breadcrumbSectionLink.textContent = normalizeMojibakeText(
      story.sectionLabel ?? "Moja priÄa"
    );
    breadcrumbSectionLink.href = story.sectionHref ?? "moja-prica.html";
  }

  if (heroImage) {
    heroImage.src = story.coverImage;
    heroImage.alt = normalizeMojibakeText(
      `Naslovna fotografija priÄe ${story.title}`
    );
  }

  if (imageCaption && author) {
    imageCaption.textContent = normalizeMojibakeText(
      `Osobna priÄa autorice ${author.name}`
    );
  }

  if (title) {
    title.textContent = story.title;
  }

  if (authorName && author) {
    authorName.textContent = author.name;
  }

  if (publishDate) {
    publishDate.dateTime = story.publishDate;
    publishDate.textContent = formatDate(story.publishDate);
  }

  if (body) {
    body.innerHTML = normalizeMojibakeText(
      story.body.map((paragraph) => `<p>${paragraph}</p>`).join("")
    );
  }

  if (quote) {
    quote.textContent = story.quote;
  }

  if (shareFacebook) {
    shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  }

  if (shareLink) {
    shareLink.href = currentUrl;
  }

  if (shareEmail) {
    shareEmail.href = `mailto:?subject=${encodeURIComponent(`Caspera | ${story.title}`)}&body=${encodeURIComponent(currentUrl)}`;
  }

  if (authorCardImage && author) {
    authorCardImage.src = author.image;
    authorCardImage.alt = `Portret autorice ${author.name}`;
  }

  if (authorCardName && author) {
    authorCardName.textContent = author.name;
  }

  if (authorCardBio && author) {
    authorCardBio.textContent = normalizeMojibakeText(
      `${author.bio} ${author.name} svoju priÄu dijeli kako bi podrÅ¾ala druge Å¾ene koje prolaze kroz sliÄan put.`
    );
  }

  document.title = `Caspera | ${story.title}`;
}

normalizeRenderedDomText();
