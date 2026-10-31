function initializeMobileMenu() {
  const menuButton = document.querySelector(".menu-mobile");
  const navLinks = document.querySelector(".nav-links");

  if (!menuButton || !navLinks) {
    return;
  }

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

function initializeSectionAnimations() {
  const sections = document.querySelectorAll(".section");

  function showVisibleSections() {
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showVisibleSections);
  showVisibleSections();
}

export function initializeUi() {
  initializeMobileMenu();
  initializeSectionAnimations();
}
