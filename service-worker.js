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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0721995c8f21913deced98ae6aba1522"
  },
  {
    "url": "api.html",
    "revision": "d1fccd513eb6c1b016346703b65c5c56"
  },
  {
    "url": "assets/css/0.styles.d4c04ef5.css",
    "revision": "cec0279db1ca883af34159a86e3b6a2d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b9fa6a1e.js",
    "revision": "27ec2881572c5b2f5f652314654fca8d"
  },
  {
    "url": "assets/js/2.056a12d8.js",
    "revision": "b7786ebb47130d119af3f1645678a25a"
  },
  {
    "url": "assets/js/3.ad1e1797.js",
    "revision": "62ac904ae94f4d792b39f5f41d2e6cb9"
  },
  {
    "url": "assets/js/4.84a4c35b.js",
    "revision": "4cddb715c96d4130436592d3a3591feb"
  },
  {
    "url": "assets/js/5.d8b9aef6.js",
    "revision": "a118cb7ed54d8f75e96e461936354d6d"
  },
  {
    "url": "assets/js/6.d4b41953.js",
    "revision": "4c8f759a53aaca26a60927b9272307bf"
  },
  {
    "url": "assets/js/7.bc49aa56.js",
    "revision": "011a60f3666a6ad6dfc188463a371629"
  },
  {
    "url": "assets/js/app.170aea8d.js",
    "revision": "f2c296ce7bc06c2c61aab2a23374b7ce"
  },
  {
    "url": "examples.html",
    "revision": "65dc08a3638adeb891632d2c51efec68"
  },
  {
    "url": "guide/binding.html",
    "revision": "150acadee61995ad8d56ea36b3d51936"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5f67bb650ec140ec77a71c982e3c69ec"
  },
  {
    "url": "guide/index.html",
    "revision": "8176e71b4ceb2501144f96fc50743cff"
  },
  {
    "url": "index.html",
    "revision": "756134942b4edb152cfe2d389e27b98b"
  },
  {
    "url": "verte.png",
    "revision": "62230e64c80e22d25f2ccd33dbd427ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
