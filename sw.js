const CACHE_NAME = 'ngong-mawien-v1';
const urlsToCache = [
  '/Gabriel-The-Great-Poster/',
  '/Gabriel-The-Great-Poster/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
