/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/static/css/main.1strdop8f3g.css",
    "revision": "3eb2068f9dd3c95b620692aed148f33c"
  },
  {
    "url": "/static/css/separate-css/separate-css-sample.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "/static/fonts/stylesheet.css",
    "revision": "aba61c2e4709dc871f8baacabd6dcc99"
  },
  {
    "url": "/static/js/advertise.1strdop8f3g.js",
    "revision": "99f1d3fb50e9c7bd10cdee27d6f2e90c"
  },
  {
    "url": "/static/js/books.1strdop8f3g.js",
    "revision": "c75bfbb2dd74159b00d5d9ea5cfdea7f"
  },
  {
    "url": "/static/js/content-search.1strdop8f3g.js",
    "revision": "de87802b7110cf0c583063e83e184b7f"
  },
  {
    "url": "/static/js/filter-search.1strdop8f3g.js",
    "revision": "75856afd1539ae92bedd7e2f31104c5d"
  },
  {
    "url": "/static/js/filter-search~map-search.1strdop8f3g.js",
    "revision": "890996487794c3c53df4d1f9828a8b2c"
  },
  {
    "url": "/static/js/filter.1strdop8f3g.js",
    "revision": "c30c6e131c150cfc6b9ef3bc15908afe"
  },
  {
    "url": "/static/js/infrastructure.1strdop8f3g.js",
    "revision": "dc8982816d27ccbdd4a2f4cce551272c"
  },
  {
    "url": "/static/js/item-card.1strdop8f3g.js",
    "revision": "97cb9570308127a2f8a649137fdcdb74"
  },
  {
    "url": "/static/js/landings-zhk.1strdop8f3g.js",
    "revision": "5c94b15724170e0d98020e3489605313"
  },
  {
    "url": "/static/js/main.1strdop8f3g.js",
    "revision": "e4623a8a1d064386c00f121a4d33f109"
  },
  {
    "url": "/static/js/map-search.1strdop8f3g.js",
    "revision": "084bee090b86af1b9899b848aadd819b"
  },
  {
    "url": "/static/js/reviews.1strdop8f3g.js",
    "revision": "a63f5f2ecf8366b73b88966260b9ae33"
  },
  {
    "url": "/static/js/vendors~books.1strdop8f3g.js",
    "revision": "2b3beb8754cb38e23289a4daee6b07a1"
  },
  {
    "url": "/static/js/vendors~main.1strdop8f3g.js",
    "revision": "5326967888681b7095d63cc28bbae537"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
