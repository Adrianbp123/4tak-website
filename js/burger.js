
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".nav-menu");

const menuOverlay = document.querySelector(".menu-overlay");

if (hamburgerBtn && navMenu) {
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  // Åpner eller lukker menyen
  function setMenuOpen(isOpen) {
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    hamburgerBtn.setAttribute(
      "aria-label",
      isOpen ? "Lukk meny" : "Åpne meny"
    );

    navMenu.classList.toggle("is-open", isOpen);
    menuOverlay.classList.toggle("is-open", isOpen);
  }

  // Åpner og lukker menyen ved klikk
  hamburgerBtn.addEventListener("click", () => {
    const isOpen = hamburgerBtn.getAttribute("aria-expanded") === "true";

    setMenuOpen(!isOpen);
  });

  // Lukker menyen med Escape
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      hamburgerBtn.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      hamburgerBtn.focus();
    }
  });

  // Lukker menyen når man klikker utenfor
  document.addEventListener("click", (event) => {
    if (
      !hamburgerBtn.contains(event.target) &&
      !navMenu.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // Lukker menyen når en lenke velges
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuOpen(false);
    });
  });

  // Lukker menyen når tastaturfokus flyttes ut
  document.addEventListener("focusin", (event) => {
    if (
      !hamburgerBtn.contains(event.target) &&
      !navMenu.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // Nullstiller menyen ved overgang til desktop
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
}
