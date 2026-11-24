'use strict';

/**
 * SW.JS — Gerado pelo Construtor de Aulas. Estratégia network-first: busca
 * a versão mais nova na rede primeiro, e só usa o cache quando estiver
 * offline (o cache existe pra permitir abrir sem internet).
 */
const CACHE = 'app-estudos-v1';
const ARQUIVOS = [
  "./",
  "./index.html",
  "./css/inicio.css",
  "./js/inicio.mjs",
  "./js/cadernos.mjs",
  "./js/niveis.mjs",
  "./js/progresso.mjs",
  "./estudo.html",
  "./css/estudo.css",
  "./js/estudo.mjs",
  "./js/data/modulos.mjs",
  "./images/LEIA-ME.txt",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./manifest.json"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARQUIVOS.map(u => new Request(u, { cache: 'reload' }))))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(chaves => Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(resposta => {
        const copia = resposta.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copia));
        return resposta;
      })
      .catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
