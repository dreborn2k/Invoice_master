const CACHE_NAME = 'invoice-master-pwa-v4';
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest'
];

// Generate valid PNG icon on the fly if icon-192.png / icon-512.png is not in repo yet
async function buildFallbackPngResponse(size) {
  if (typeof OffscreenCanvas !== 'undefined') {
    const canvas = new OffscreenCanvas(size, size);
    const ctx = canvas.getContext('2d');
    const r = Math.round(size * 0.22);

    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.lineTo(size - r, 0);
    ctx.quadraticCurveTo(size, 0, size, r);
    ctx.lineTo(size, size - r);
    ctx.quadraticCurveTo(size, size, size - r, size);
    ctx.lineTo(r, size);
    ctx.quadraticCurveTo(0, size, 0, size - r);
    ctx.lineTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, '#007AFF');
    grad.addColorStop(1, '#5856D6');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    const docW = Math.round(size * 0.46);
    const docH = Math.round(size * 0.58);
    const docX = Math.round((size - docW) / 2);
    const docY = Math.round((size - docH) / 2);
    ctx.fillRect(docX, docY, docW, docH);

    ctx.fillStyle = '#007AFF';
    const lx = docX + Math.round(docW * 0.18);
    const lw = Math.round(docW * 0.64);
    const lh = Math.max(3, Math.round(size * 0.032));
    ctx.fillRect(lx, docY + Math.round(docH * 0.28), lw, lh);
    ctx.fillRect(lx, docY + Math.round(docH * 0.48), lw, lh);
    ctx.fillRect(lx, docY + Math.round(docH * 0.68), Math.round(lw * 0.62), lh);

    const blob = await canvas.convertToBlob({ type: 'image/png' });
    return new Response(blob, {
      status: 200,
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=86400' }
    });
  }
  return new Response('', { status: 404 });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const reqUrl = event.request.url || '';
  if (reqUrl.includes('api.github.com')) return;

  const isIcon192 = reqUrl.endsWith('/icon-192.png');
  const isIcon512 = reqUrl.endsWith('/icon-512.png');

  event.respondWith(
    fetch(event.request)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return networkRes;
        }
        if (isIcon192) return buildFallbackPngResponse(192);
        if (isIcon512) return buildFallbackPngResponse(512);
        return networkRes;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (isIcon192) return buildFallbackPngResponse(192);
        if (isIcon512) return buildFallbackPngResponse(512);
        return new Response('Offline', { status: 503 });
      })
  );
});
