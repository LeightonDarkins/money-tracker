/* globals caches, self, fetch */

var CACHE_NAME = `money-tracker-cache-${process.env.BUILD_DATE_STAMP}`

const ENABLE_CACHE = process.env.MONEY_TRACKER_ENV !== 'development'

var urlsToCache = ENABLE_CACHE ? [
  '/manifest.json',
  '/app.js',
  '/styles.css',
  '/assets/fontawesome-webfont.eot',
  '/assets/fontawesome-webfont.woff2',
  '/assets/fontawesome-webfont.woff',
  '/assets/fontawesome-webfont.ttf',
  '/assets/fontawesome-webfont.svg',
  '/assets/money-tracker-192.png',
  '/assets/money-tracker-256.png',
  '/assets/money-tracker-384.png',
  '/assets/money-tracker-512.png'
] : []

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
      .catch(function (error) {
        console.error(error)
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }

        return fetch(event.request)
      }
    )
  )
})

self.addEventListener('activate', function (event) {
  var cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
