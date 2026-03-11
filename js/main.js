const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Dropdown menu toggle
const navbarItems = document.querySelectorAll(".navbar__item");

navbarItems.forEach((item) => {
  const arrow = item.querySelector(".navbar__arrow");
  const dropdown = item.querySelector(".navbar__drop");

  if (arrow && dropdown) {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      navbarItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherDropdown = otherItem.querySelector(".navbar__drop");
          if (otherDropdown) {
            otherDropdown.classList.remove("open");
          }
        }
      });

      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});