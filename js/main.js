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

const storiesPage = document.querySelector("[data-stories-page]");

if (storiesPage) {
  const authors = [
    {
      slug: "ana-m",
      name: "Ana M.",
      image: "../assets/images/ana_glavina.jpg",
      bio: "Piše o malim koracima i povratku svakodnevici.",
    },
    {
      slug: "ivana-k",
      name: "Ivana K.",
      image: "../assets/images/ivana_juric.jpg",
      bio: "Dijeli iskustva o postavljanju granica i slušanju sebe.",
    },
    {
      slug: "petra-l",
      name: "Petra L.",
      image: "../assets/images/Petra Lozančić_edited.jpg",
      bio: "Bilježi put prihvaćanja i ozdravljenja.",
    },
    {
      slug: "maja-h",
      name: "Maja H.",
      image: "../assets/images/Marja Ban.jpg",
      bio: "Otvara teme straha, tišine i ponovnog pronalaska nade.",
    },
    {
      slug: "marija-b",
      name: "Marija B.",
      image: "../assets/images/Marija Selak.jpg",
      bio: "Piše o odnosima, podršci i povratku povjerenja.",
    },
    {
      slug: "jelena-r",
      name: "Jelena R.",
      image: "../assets/images/Lara Radošević.jpg",
      bio: "Dijeli iskustva o tijelu, identitetu i hrabrosti.",
    },
    {
      slug: "katarina-p",
      name: "Katarina P.",
      image: "../assets/images/Nikolina Dragošević.jpg",
      bio: "Piše o nježnosti, rutini i pronalasku mira u malim stvarima.",
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
      image: "../assets/images/Barbara Matijević_edited.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "iva-d",
      name: "Iva D.",
      image: "../assets/images/Iva Teklić.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "snjezana-r",
      name: "Snježana R.",
      image: "../assets/images/Snježana Pušćenik_edited.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
    {
      slug: "zlata-t",
      name: "Zlata T.",
      image: "../assets/images/Zlata Benzia.jpg",
      bio: "Placeholder autorica za testiranje slidera.",
    },
  ];

  const stories = [
    {
      title: "Kad sam sebe ponovno stavila na prvo mjesto",
      slug: "#",
      excerpt:
        "Dugo sam brinula o svima, osim o sebi. Tek kad sam naučila reći 'ne', počela sam ponovno čuti svoj glas.",
      coverImage: "../assets/images/story_img.jpeg",
      publishDate: "2024-04-12",
      authorSlug: "ivana-k",
    },
    {
      title: "Iz tame prema svjetlu",
      slug: "#",
      excerpt:
        "Nekad sam mislila da se iz najtežih trenutaka ne može izaći. Danas znam da je svaki korak, ma koliko malen, korak prema slobodi.",
      coverImage: "../assets/images/sandra_zekic_tomas.jpg",
      publishDate: "2024-04-09",
      authorSlug: "maja-h",
    },
    {
      title: "Prihvaćanje je bio moj početak",
      slug: "#",
      excerpt:
        "Prihvatiti ono što se dogodilo nije značilo odustati. Za mene je to bio početak ozdravljenja.",
      coverImage: "../assets/images/placeholder.png",
      publishDate: "2024-04-05",
      authorSlug: "petra-l",
    },
    {
      title: "Mali koraci, velike promjene",
      slug: "#",
      excerpt:
        "Nisam preko noći postala jača. Dan po dan, korak po korak, gradila sam svoju novu priču.",
      coverImage: "../assets/images/tu_smo2D.png",
      publishDate: "2024-04-01",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam naučila tražiti pomoć",
      slug: "#",
      excerpt:
        "Najveća promjena dogodila se kad sam priznala da ne mogu sve sama i dopustila drugima da mi budu oslonac.",
      coverImage: "../assets/images/podrska_upoznaj.png",
      publishDate: "2024-03-28",
      authorSlug: "marija-b",
    },
    {
      title: "Tijelo koje ponovno učim voljeti",
      slug: "#",
      excerpt:
        "Pogled u ogledalo dugo mi je bio težak. S vremenom sam naučila gledati sebe s više nježnosti i manje straha.",
      coverImage: "../assets/images/tu_smo_3D.png",
      publishDate: "2024-03-24",
      authorSlug: "jelena-r",
    },
    {
      title: "Rituali koji su mi vratili mir",
      slug: "#",
      excerpt:
        "Čaj ujutro, kratka šetnja i nekoliko dubokih udaha postali su moje sidro u danima kada je sve bilo previše.",
      coverImage: "../assets/images/bg_main.webp",
      publishDate: "2024-03-18",
      authorSlug: "katarina-p",
    },
    {
      title: "Kad sam prestala skrivati emocije",
      slug: "#",
      excerpt:
        "Godinama sam glumila snagu. Prava snaga došla je tek kada sam si dopustila ranjivost i suze.",
      coverImage: "../assets/images/tu_smo.png",
      publishDate: "2024-03-11",
      authorSlug: "ivana-k",
    },
    {
      title: "Ponovno vjerujem svom tijelu",
      slug: "#",
      excerpt:
        "Nakon liječenja trebalo mi je vrijeme da prestanem tijelo doživljavati kao neprijatelja i počnem ga slušati.",
      coverImage: "../assets/images/podrska_strucni.png",
      publishDate: "2024-03-04",
      authorSlug: "maja-h",
    },
    {
      title: "Moja obitelj i ja učile smo zajedno",
      slug: "#",
      excerpt:
        "Nitko od nas nije znao kako će izgledati oporavak, ali upravo nas je to zajedničko neznanje zbližilo više nego ikad.",
      coverImage: "../assets/images/podrska_info.png",
      publishDate: "2024-02-25",
      authorSlug: "marija-b",
    },
    {
      title: "Snaga nježnih dana",
      slug: "#",
      excerpt:
        "Nekada su najhrabriji dani bili upravo oni najtiši, kada sam birala odmor umjesto forsiranja.",
      coverImage: "../assets/images/clanarina.png",
      publishDate: "2024-02-17",
      authorSlug: "ana-m",
    },
    {
      title: "Kad sam ponovno poželjela planirati budućnost",
      slug: "#",
      excerpt:
        "Dugo nisam mogla gledati dalje od sljedećeg pregleda. Onda su se polako vratili želje, planovi i radoznalost.",
      coverImage: "../assets/images/doniraj.png",
      publishDate: "2024-02-08",
      authorSlug: "petra-l",
    },
  ];

  const storiesPerPage = 4;
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
        ? "priča pronađena"
        : "priče pronađene";

    return `${count} ${ending}`;
  };

  const formatDate = (dateValue) =>
    new Intl.DateTimeFormat("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateValue));

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

    button.innerHTML = `
      <span class="stories-page__author-chip-circle">
        ${
          isAllStories
            ? '<img class="stories-page__author-chip-avatar" src="../assets/images/sve_price.png" alt="Prikaz svih priča" />'
            : `<img class="stories-page__author-chip-avatar" src="${author.image}" alt="Profilna fotografija autorice ${author.name}" />`
        }
      </span>
      <span class="stories-page__author-chip-label">${author.name}</span>
    `;

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

    const authorItems = [{ slug: "all", name: "Sve priče" }, ...authors];
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
    previousButton.textContent = "‹";
    previousButton.setAttribute("aria-label", "Prethodna stranica");
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
        ellipsis.textContent = "…";
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
    nextButton.textContent = "›";
    nextButton.setAttribute("aria-label", "Sljedeća stranica");
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
      storiesList.innerHTML =
        '<p class="stories-page__empty">Trenutačno nema priča za odabranu autoricu. Pokušajte s drugim odabirom.</p>';
      return;
    }

    storiesList.innerHTML = pageStories
      .map((story) => {
        const author = authorLookup.get(story.authorSlug);

        if (!author) {
          return "";
        }

        return `
          <article class="stories-page__story-card">
            <a class="stories-page__story-link" href="${story.slug}">
              <div class="stories-page__story-media">
                <img class="stories-page__story-image" src="${story.coverImage}" alt="Naslovna fotografija priče ${story.title}" />
              </div>
              <div class="stories-page__story-content">
                <div class="stories-page__story-meta">
                  <img class="stories-page__story-avatar" src="${author.image}" alt="Profilna fotografija autorice ${author.name}" />
                  <span class="stories-page__story-author">${author.name}</span>
                  <time class="stories-page__story-date" datetime="${story.publishDate}">${formatDate(story.publishDate)}</time>
                </div>
                <h2 class="stories-page__story-title">${story.title}</h2>
                <p class="stories-page__story-excerpt">${story.excerpt}</p>
                <span class="stories-page__story-cta">Čitaj više</span>
              </div>
            </a>
          </article>
        `;
      })
      .join("");
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
