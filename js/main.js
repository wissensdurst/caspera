const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Dropdown menu toggle
const navbarItems = document.querySelectorAll(".navbar__item");

navbarItems.forEach((item) => {
  const button = item.querySelector("button");
  const arrow = item.querySelector(".navbar__arrow");
  const dropdown = item.querySelector(".navbar__drop");

  if (arrow && dropdown) {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      // Close all other dropdowns
      navbarItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherDropdown = otherItem.querySelector(".navbar__drop");
          if (otherDropdown) {
            otherDropdown.classList.remove("open");
          }
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle("open");
    });

    // Close dropdown when clicking elsewhere
    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});
