const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeLightbox = document.querySelector(".lightbox-close");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    header.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".photo-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    const fullImage = button.dataset.full;
    const img = button.querySelector("img");
    if (!fullImage || !lightbox || !lightboxImage) return;
    lightboxImage.src = fullImage;
    lightboxImage.alt = img?.alt || "南順宮相片";
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    }
  });
});

closeLightbox?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
