'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aae41d4c9d1810cb548ee0871f06d970",
"index.html": "21ad109bd04c865a2c19896e7b13fd04",
"/": "21ad109bd04c865a2c19896e7b13fd04",
"main.dart.js": "9cf62743d28bd032f0b2591bd5e3b1fb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "517046948acb6c8c6a1e7cd192738f38",
".git/config": "4031b667ad55a28abf69f83cb0e8f7b2",
".git/objects/93/79d63b72d5f67c8963934d3ff17e40c04ed8fb": "e73655fde83a79f2f1aa655fc406fb71",
".git/objects/02/b7f5fd174e77049c38c5340b7fec545da11082": "a251975b715b5973e0332c88c6e2b668",
".git/objects/ad/530267c78293b36ab893646a3d2eb20acc2990": "3952072ddc189036b519aa11527ea504",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/da/ef98d1721f08ead5f350536cd2ceeba19906db": "16940f9d3d58d71a220bd674de18b4d2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/27/f670ee5eb287bdb2ca58fbbe704f1dd22fddaf": "b9ddda809a35ee30f666150278f857c2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/73/4051ab25f691a5a1ff0b6f44a66d2ef1a1b6a1": "2b0d019542fe7222e042fbcb451e6a00",
".git/objects/80/54965a2327146e35767dc372b70eadcaae3304": "f556cf974090415be4bd701d0368e3af",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/4e38cc6ae026329594a2c987b3ba54e465f468": "f7e6959434b00cac3ac60869b5bc76dd",
".git/objects/26/9dfe3be0deabf111c47b20a566cf2a857c8f64": "7efda7abc4516d20279b053ccb3fbc94",
".git/objects/4d/235e21bde153495d4e8e28eb396233a565f513": "e3a02d9946e605c49ca2ed78f8344bbb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/5f5107ec2c3bcaf19656c69f5f2963e80ac645": "112b4d1da25cf7e312b0897494330e17",
".git/objects/09/7bb0fe45c73e13391357f1ab045c0f823af6e4": "cf3b09c59aa0e2af45cb5499415a6d3a",
".git/objects/91/9ce0bee58aed953a407a016ecefdefaa2452db": "06dd77a6ad76bcbea6f67d4fa9c135e3",
".git/objects/54/6ff63e718796e1394e377d874c030ea2207095": "1ce6102d9169e1dd182b1333170e69ee",
".git/objects/98/313cdcfccc987706375a80d0c09f97cace7cba": "fe426fd8210b7fd7fb150dcd788dd75b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/08/5f2535b302a510135a831809b121b68404a7b4": "7b075a88022ab0efaa00bcd53042545a",
".git/objects/39/d01579a98204f3a6ce0f8d83970f4a311180e6": "b5ab3ccca3807d909bd47d34d545c03c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/bf/69a3a038366f4425068888e47033ce4522a808": "f0fff4a88ffa649e7625e809c855f6ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/02c86fe5806fded8b22832f7caeddb0035a12d": "fab69baeaf83924d750208e671f57109",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/3117db9b2387834c53ad355153daa2b1072b86": "cc96ae7c41fd203c0dfcce218bd87f46",
".git/objects/f6/2b8798033992bac80b7b6310839add82dfd381": "e75a29161f07d4e9f28430a13ecef4e9",
".git/objects/e7/64bcdf5fc5b1d14b4eef8a79d081b66c7f6b29": "f8bacb7a434f71a520af934d255458a6",
".git/objects/cb/46d1173d41b68d5c2a826922fdc2b848807441": "f5486362fa7c54518f1a4038a486d6f4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/3bbc132dfdca9da70a2ae0b127a977ace42b22": "162d36e516f4d1e6e1312b2525c4c06b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/2a8af46f7b12e3e26a35fbb4d4ca1aef6c5c2e": "24131e32064e9eb22d908ba5d789374d",
".git/objects/14/23206459c0f9447b62c8e1b693f517eb786894": "e644f512dca26db9416e227334c0919e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f379ad783a3f74b5a063a0cba187a027",
".git/logs/refs/heads/main": "4aebd856e25375620886da17268a7ad7",
".git/logs/refs/remotes/origin/main": "f3b2b6eaa1ee790551ea37e309ec9cc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "200225ca48a685c305c426f4e90af298",
".git/refs/remotes/origin/main": "200225ca48a685c305c426f4e90af298",
".git/index": "64b43f73c78f2722483045b114ddf0d9",
".git/COMMIT_EDITMSG": "1c2925a8897c22817e61f29b2e3696d6",
"assets/AssetManifest.json": "179fbbdf95e4a701c38fc7f05486aecf",
"assets/NOTICES": "26fdf24897388497c93b5702cb25f9a0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "504d138a54581c9ce683ad01869bdc75",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/letter.png": "81b6fdbebddf3887790dca206b7b9573",
"assets/assets/images/led.png": "96b2555bbc16b4440468e0ab42cbcc8a",
"assets/assets/images/santa.png": "d57eccde64520da9a4b5789f02368c39",
"assets/assets/images/snowman.png": "4802ea2bc7f4463a23af9b7476f838fa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
