document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const footerYear = document.querySelector(".footer-bottom span");

  if (footerYear) {
    footerYear.textContent = `© ${currentYear} Health`;
  }
});
