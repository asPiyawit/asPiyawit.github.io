'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "44a9d1bbc2a086292d67667ee7815682",
".git/config": "979713f1c32d60274d27b193cd535609",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f483436255921098a24a2b518878a0fc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72fab49d60270ec3d17605b2ac39e988",
".git/logs/refs/heads/master": "72fab49d60270ec3d17605b2ac39e988",
".git/logs/refs/remotes/origin/master": "24394a9f08b4652b0e7b073b430059f4",
".git/objects/00/f5da202a5973fd6fe927804df693ff7cd1471b": "6f13ff9c296eeb0e3503f913a65bf2dd",
".git/objects/05/80b1281fafdcb478227b5beef154eef1cb7f37": "33bf56557c5a8643bf9817649ae20cfa",
".git/objects/13/004e7e17d8c93dece0cfd46ece7cd60cb3a064": "6d4722f5f62c6e6e4cf47490438baa12",
".git/objects/15/33ec7402e906d2e4d189c7163bd2290228c343": "1dd408e09571fdb137b86992a65e6933",
".git/objects/16/93fb25ec471bf345309a04907c69bd455154be": "1b82370c9af92c704dee6f95d9aab052",
".git/objects/17/9a9cf4e2396fca167ae808a4a959a0ddec8419": "9d841c78757a81db6afaf077ad7420bc",
".git/objects/1a/06d9eecff43462c64c0aaf5f7f81accdd25888": "a3508f0b7a8a3ce010969a7d8ade0569",
".git/objects/1a/27081b7e6bfdcf97b5123914ba9ec59f708490": "aaa1adfaa30f530a26206552d470bfc3",
".git/objects/1e/1a87da45134856eda79e1ff4cf5f2abab837e0": "c3ea23ff7627c61298709f43bc9dc43a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/cc9d01d82f1b1b81a088d18e476dae29dcb2b1": "09f5949126a3b7a578045922e9f83d91",
".git/objects/24/ad11567e15d6620c61c312fef8e6a84c9e795c": "6608dab836d36e5ae7e6b163cb3a4a45",
".git/objects/26/e111c6aeff2d8a47a1baa4d0174c8c1760680c": "b631825afc765e5ed4baf3d77f253d1a",
".git/objects/29/8574a5758a767b0cb1a19fc6122203d44510bd": "a42f528b00e5a1cd6f5a5aa6be51b81e",
".git/objects/2b/4a3fa9f098172899ac42db5765876f917a2af3": "21ab920a660825ce8669433411e40c91",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/59447e3ec7d78e98a4b0470249d795c2d5a623": "691cd5aef8d0cf884d84c5cf7b64641a",
".git/objects/32/ed99301ebd7d6542fd6b0ce384cf536912ce58": "a11f8d8cfbcaed52c6a562ecc69f643b",
".git/objects/5c/3b9f31ed4d41ea2f3b68a42a53c11f587888f5": "106a030c1acc97ef826c3cda069bc6e2",
".git/objects/6f/d3e39a3e255783d6b1e61d0b3367026a9d7f1b": "4903358700cabdbccf476866ba1b7b8d",
".git/objects/75/01af07eb704ee55f4662a34319dc3c7fa0f3e7": "e61cdd89c1f79a262cbf673a65905bbf",
".git/objects/75/fa6f4acd73b6d489fd2f6f6a0120c07120b536": "da0d978bc2b936d8bad26fa4a701831f",
".git/objects/76/391cd0a14fcc3a4e438ff01de6a3454a4535ea": "b214fc332171c2e2fe656f03ef50aa9f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/ef69f1f4ae5eb55343df92d2442be50f1d2b14": "d949424ccb4d8f856a95edcb8c5f71a7",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/58b508c60d41c7843b31a2da6fb384e4b50761": "44237972c76fe2ef225709d3e873cd43",
".git/objects/91/d4573ec38852cf806b3560c371ca173dd2516b": "3932fd8999c181b791623a80137e1db2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/fa23224729d24c78fad745f189098a4b851aae": "398603b882bcdf307ca05136bf3a4218",
".git/objects/a8/33401663a45307969f2148947b0958ced8e4d7": "3a69f5285ba3f1a012ea423e7b6fe407",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/b1/a028a7d49d6401c95984523f2b3169fe1eea62": "6ea308260601c2d68bceec4131f57f85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/9e4e7255cd03c048cf8360f2432414f1861f72": "bc12afa96cd6e4ebea8e85e37535732d",
".git/objects/c5/ae7fd56f52ff1f422585f410eb29099a46d8ba": "6e6d5dd0b4c55e0c97fe220e8c63bb17",
".git/objects/ca/a3e41440142e0ab61bc0fddaada5d799c7d470": "8c1d4deb4903d190851bbe2ca95c1208",
".git/objects/cc/9451fecaf34a919aba67790b2ea84abbe0855a": "9f3e96a2783bfcd06fc929bee2b2a1e5",
".git/objects/cf/892c488414823033b49ec24815df67790ecfbc": "fe72651b0508c7d4188e363324fd2318",
".git/objects/da/87a8a952a08a8d8f53b8cdb60d932bc1e92410": "54f1a6acb4e44ea23fb971024affa5c7",
".git/objects/dd/6e908f634ebed42d15f2d2918de9816972c392": "5bd662a2be541860bb4168139f86446e",
".git/objects/de/6c5aa17b6588c1d834ee97b198febc0970390a": "83a5e8ca0dc269edbe6fda32360ea57a",
".git/objects/e1/fd171c328aef72101103077b5222c88b11e5f9": "778120275287ef49a79044678c659738",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/93e7d6a183eb1981a2ce75b41aad0c17e94d00": "2902f90c7b0b2df3c62fd57f8d6b0598",
".git/objects/f3/3e18c94f61bcb37661a7a057ad6faf740c2a86": "fd951b9dd14fc77a3abb871fd4e492ba",
".git/objects/fd/4fbb2caffc40e9bfbd078ec9c84853685ccf6d": "927c2532742e50df0dd1d242d4799d32",
".git/objects/fe/79c12df2f55edc18df33471afa9adb701097f4": "40d9f54bdb022c2a47b7f0a55da8ccb4",
".git/refs/heads/master": "f614c6fbe3aa9b518159a13567661d39",
".git/refs/remotes/origin/master": "f614c6fbe3aa9b518159a13567661d39",
"assets/AssetManifest.json": "cebbb8fb47999d1822c846fd40fa6b2e",
"assets/assets/fonts/Anton-Regular.ttf": "7777f7f3f519eaedd41b8b9a8cd2666e",
"assets/assets/fonts/Arno-Pro-Display.ttf": "f7620f51ad0d0ab2cda1a5b3f0ca0b74",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/images/background.jpg": "4bf24c61af8a82e121dedf51e5250fec",
"assets/assets/images/contactpic.jpg": "17c81bcb0dbcce4fa252d3110816a806",
"assets/assets/images/cv.jpg": "f5dec1a7aba2a7f4dcfcf765d2fe17a7",
"assets/assets/images/em.jpg": "cc8e543c05a85048a997f69481bc7430",
"assets/assets/images/hardworker.png": "34d8fd993fef1a26a053cc2b6c8c9ef9",
"assets/assets/images/inuniform.jpg": "ac9fc7aeada5e005d0f93b2c782c9c67",
"assets/assets/images/profilepic.png": "bc57fa0d72e8f636a8fe07c12ae75569",
"assets/assets/images/TOEIC.jpg": "c4b3c689d1a2fa95de44254c2069f6f5",
"assets/FontManifest.json": "36930cb8e49a18a10d89eb1240f0ed2d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dfc4925739b435f7ae8decae587d24cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d38227e5026aa84749edd5b0c72239f",
"/": "0d38227e5026aa84749edd5b0c72239f",
"main.dart.js": "8e3fb6f249d802231d6a8232b47b0c47",
"manifest.json": "1ad6e62c5b3c7e2906bd02f2438573f8",
"version.json": "7dd58d0b4301681cd9fe694a0f333b81"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
