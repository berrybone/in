// Service worker installation
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          'css/style.css',
          'script/script.js',
          'https://cdn.lordicon.com/lordicon-1.2.0.js',
          // 'https://kit.fontawesome.com/02c149104d.js',
          // 'https://unpkg.com/swiper/swiper-bundle.min.js',
          'img/logo.png'
          // Add other assets (HTML, CSS, JS, images, etc.) that you want to cache
        ]);
      })
    );
  });
  
  // Service worker activation
  self.addEventListener('activate', (event) => {
    // Clean up old caches if needed
  });
  
  // Fetch event (caching strategy)
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  