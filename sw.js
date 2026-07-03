const CACHE_NAME = "nanshun-temple-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/styles.css",
  "./assets/script.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/images/logo.jpg",
  "./assets/images/hero.jpg",
  "./assets/images/recent-reel.jpg",
  "./assets/images/gallery-01.jpg",
  "./assets/images/gallery-02.jpg",
  "./assets/images/gallery-03.jpg",
  "./assets/images/gallery-04.jpg",
  "./assets/images/gallery-05.jpg",
  "./assets/images/gallery-06.jpg",
  "./assets/images/gallery-07.jpg",
  "./assets/images/gallery-08.jpg",
  "./assets/images/gallery-09.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match("./index.html"));
    })
  );
});
