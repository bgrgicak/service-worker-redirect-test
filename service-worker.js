self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if ('/redirect-to-absolute-url.html' === url.pathname) {
    event.respondWith(new Response(null, { status: 302, headers: { Location: url.origin + '/response.html' } }));
  }
  if ('/redirect-to-relative-url.html' === url.pathname) {
    event.respondWith(new Response(null, { status: 302, headers: { Location: '/response.html' } }));
  }
  if ("/redirect-using-response-redirect.html" === url.pathname) {
    event.respondWith(Response.redirect("/response.html"));
  }
  return;
});