if (!self.define) {
  let e,
    s = {};
  const a = (a, t) => (
    (a = new URL(a + '.js', t).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[n]) return;
    let c = {};
    const r = (e) => a(e, n),
      d = { module: { uri: n }, exports: c, require: r };
    s[n] = Promise.all(t.map((e) => d[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-f1770938'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/TCl7bKCt_rehL1R1mySyt/_buildManifest.js',
          revision: '172e769da91baa11de9b258fb2d92f86',
        },
        {
          url: '/_next/static/TCl7bKCt_rehL1R1mySyt/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/231-a873686908e60eba.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/232-9df964e7362211f3.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/320-b026cfa115bfd0b7.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/538-5e1aa1a9b790739e.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/997-0b74e1fb8c2296e5.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/bento/page-ae95b6addf605bc8.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/layout-4e8af9786e4a9454.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/page-6787d63e3cd1a8cf.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-f59dbafe99b55c3c.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/layout-b6ecf402127673b7.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/app/page-f4b04997c2db9eb2.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/fd9d1056-ac4882dfaefa3d62.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/framework-00a8ba1a63cfdc9e.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/main-729489d0de42a25d.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/main-app-a31892bbf2456781.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/pages/_app-15e2daefa259f0b5.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/pages/_error-28b803cb2479b966.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-0f8fa2486116ec7e.js',
          revision: 'TCl7bKCt_rehL1R1mySyt',
        },
        {
          url: '/_next/static/css/05b225c6679dddcb.css',
          revision: '05b225c6679dddcb',
        },
        {
          url: '/_next/static/css/2727127b85953e67.css',
          revision: '2727127b85953e67',
        },
        {
          url: '/_next/static/css/6be4eb308c5b77bf.css',
          revision: '6be4eb308c5b77bf',
        },
        {
          url: '/_next/static/media/0912b6f5b5f18160-s.p.woff2',
          revision: 'f60e515ad97a8802a34e7df5f40db1d3',
        },
        {
          url: '/_next/static/media/1dbd71bee75dcbe2-s.p.woff2',
          revision: '86ea30dc5a24eecb773b4db7397a4a69',
        },
        {
          url: '/_next/static/media/3e521957c464c122-s.p.woff2',
          revision: '5b8edcc8852bbb0b07a3b69c3cfe40e1',
        },
        {
          url: '/_next/static/media/585969283d20b6b5.p.woff2',
          revision: '043d2b633d470833b79d05d7d6514bd4',
        },
        {
          url: '/_next/static/media/5b17810d8f5e92ae-s.p.woff2',
          revision: 'ca6c37945ee0d8fc00f29628c40b211d',
        },
        {
          url: '/_next/static/media/69a390d3fcb2378e-s.p.woff2',
          revision: 'accdc6fa8d0201f8c8a747c9b04e381f',
        },
        {
          url: '/_next/static/media/6aa0280f6054384f.p.woff2',
          revision: '449ccdf47999b2770bad507cb358635a',
        },
        {
          url: '/_next/static/media/92ddaa093d00abf9.p.woff2',
          revision: '4cee12e53eff9fd2cf5ec984072c95cc',
        },
        {
          url: '/_next/static/media/939391cfa93e8d25-s.p.woff2',
          revision: 'e6e007d697d70ec77b1cd41c65b6d43e',
        },
        {
          url: '/_next/static/media/b0a3f7573432c7ef-s.p.woff2',
          revision: '40d94fb56977de3dcb930625d593916c',
        },
        {
          url: '/_next/static/media/b2f4711c55f17d21.p.woff2',
          revision: '59c1c3e2d87e6cb023ba778f5bfb9332',
        },
        {
          url: '/_next/static/media/c1257d7db5a6288f.p.woff2',
          revision: '06a2594da9a9912eadbdceb8191cc4b8',
        },
        {
          url: '/_next/static/media/c848758d77f1aebb-s.p.woff2',
          revision: '0812c1ba102b5f1ecf542d5be0f966a9',
        },
        {
          url: '/_next/static/media/d13238683f37b6cc.p.woff2',
          revision: 'e6b7842340fe814668e1db1d71c0f416',
        },
        {
          url: '/_next/static/media/de728c3f576bec66.p.woff2',
          revision: 'c56199b1c354104683e29746f9996d25',
        },
        {
          url: '/_next/static/media/e11418ac562b8ac1-s.p.woff2',
          revision: '0e46e732cced180e3a2c7285100f27d4',
        },
        {
          url: '/_next/static/media/e3434d0986b06b4b-s.p.woff2',
          revision: '2d873d23ac1ab03f25af35af84392cc5',
        },
        {
          url: '/_next/static/media/e6d758f16580c953.p.woff2',
          revision: 'e76883bd8aa03a58b4f4d1fd0991f858',
        },
        {
          url: '/_next/static/media/fd0d78546c6508e9.p.woff2',
          revision: '3922784401ea371618282699d4e5e034',
        },
        { url: '/favicon.svg', revision: 'c7bf473b30e5d81722ea0acf3a11a107' },
        {
          url: '/fonts/Geist-Bold.otf',
          revision: 'd3e1d3dc690224fd330969af598a9c31',
        },
        {
          url: '/icon-192x192.png',
          revision: 'f88f56f5de5dd5d06048ba493f7c1412',
        },
        {
          url: '/icon-256x256.png',
          revision: '23c7bb30e4217404da476396866c28a8',
        },
        {
          url: '/icon-384x384.png',
          revision: '20b544a964160a5041d32e8c3bc2ed3f',
        },
        {
          url: '/icon-512x512.png',
          revision: '0662c0f014b0122039042e060f971ea4',
        },
        { url: '/manifest.json', revision: '3bc84c64b5812f34ee5f486826f81992' },
        {
          url: '/manifest.webmanifest',
          revision: '10936e4608d3f6d3f2699ddb6aa9051c',
        },
        {
          url: '/swe-worker-5c72df51bb1f6ee0.js',
          revision: '5a47d90db13bb1309b25bdf7b363570e',
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith('/api/auth/callback') || !s.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        a &&
        !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
