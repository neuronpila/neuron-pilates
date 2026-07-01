const CACHE_NAME = 'pilatesflow-v4';
const BASE = self.registration.scope;
const URLS = [
  BASE + 'index.html',
  BASE + 'member.html',
  BASE + 'instructor.html',
  BASE + 'manifest.json',
  BASE + 'manifest-member.json',
  BASE + 'manifest-instructor.json',
  BASE + 'logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).catch(() =>
        caches.match(BASE + 'index.html').then(r => r || new Response('오프라인 상태입니다.', {status: 503, headers: {'Content-Type': 'text/plain;charset=utf-8'}}))
      );
    })
  );
});
