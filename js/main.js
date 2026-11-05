const navToggle = document.getElementById("navToggle");
const menu = document.getElementById("menu");
const currentYear = document.getElementById("currentYear");

// NAVIGATION

function closeMenu() {
  navToggle.classList.remove("active");
  menu.classList.remove("active");

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    navToggle.classList.add("active");
    menu.classList.add("active");

    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation");
  }
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// FOOTER

currentYear.textContent = new Date().getFullYear();