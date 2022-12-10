'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aae41d4c9d1810cb548ee0871f06d970",
"index.html": "36df5f2b9a022f125a2b5928b39df501",
"/": "36df5f2b9a022f125a2b5928b39df501",
"main.dart.js": "5ce8607c397ac01d0447e02543853b1c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "7a2ce20faed5e2ff828ecf7b62d3ef22",
"icons/Icon-192.png": "c0a9a3fe9bc8cb8b16f0983b9ff74a65",
"icons/Icon-maskable-192.png": "c0a9a3fe9bc8cb8b16f0983b9ff74a65",
"icons/Icon-maskable-512.png": "c1edde22725357c365c21830db3a3dcf",
"icons/Icon-512.png": "c1edde22725357c365c21830db3a3dcf",
"manifest.json": "517046948acb6c8c6a1e7cd192738f38",
".git/config": "4031b667ad55a28abf69f83cb0e8f7b2",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/72073162f1bf4571979b8b8bf7201a626d6910": "b5f0b84398f4bbc07b3a368f58a7143f",
".git/objects/04/22168101bc351ad8ca7829dea8072b9eb116b7": "f78bf2d200e29b7c8d833de17914b9ea",
".git/objects/6a/59be5268e9eed59deb8ffda708b8d26853f49e": "b1ea4c14e0f6b663d8b579a4b1837335",
".git/objects/6a/3970e10304a04a10809112cfe0ce8bbceae2dd": "6ea84a3d9b9731ccb1e89159459f900b",
".git/objects/58/8cfc8c6c9838ff09df01445e2a415e184d5d72": "3348c5b20c255d5a1cb616ac3d3642fb",
".git/objects/93/79d63b72d5f67c8963934d3ff17e40c04ed8fb": "e73655fde83a79f2f1aa655fc406fb71",
".git/objects/05/8f3b54f1533a12f5fea550d067d8ec16279ab4": "54dfe5a7eeadbe5b14ba7ccfbf674027",
".git/objects/02/b7f5fd174e77049c38c5340b7fec545da11082": "a251975b715b5973e0332c88c6e2b668",
".git/objects/ac/65d30b3944b5e6f8b19c79f3ef24a00b58115c": "0d94e23f1399228aeed3e1f71ac3f6f5",
".git/objects/ad/530267c78293b36ab893646a3d2eb20acc2990": "3952072ddc189036b519aa11527ea504",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/df/a1c8cd234e97bb24f5d7ad5af526c35c640776": "9663acca2fe39fd1c1743767915696f4",
".git/objects/da/ef98d1721f08ead5f350536cd2ceeba19906db": "16940f9d3d58d71a220bd674de18b4d2",
".git/objects/a2/b01b245a73b0f4421d84483aafadfecdec38da": "a6e40acf51da6fed3369936999e4aa60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/a2f323088bf7ae8749d42f66d3621360fa412e": "cced080ef1ed037edaa275f2fd4934a6",
".git/objects/27/f670ee5eb287bdb2ca58fbbe704f1dd22fddaf": "b9ddda809a35ee30f666150278f857c2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/8b1ab0503483ec4254188b0135337119bf4a60": "bf49ced6f46df28d59108a0929f1a030",
".git/objects/89/f685a8200f831704d783e050f8a075a2aefc49": "d1e3f93589c53b2811c5483d7c595689",
".git/objects/73/4051ab25f691a5a1ff0b6f44a66d2ef1a1b6a1": "2b0d019542fe7222e042fbcb451e6a00",
".git/objects/80/54965a2327146e35767dc372b70eadcaae3304": "f556cf974090415be4bd701d0368e3af",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/12f27c1d570d54f69d4430fb321a8aa8939e7e": "0267fe8e62b06ed760cfdf25f84f8f14",
".git/objects/10/6f9fa17ed105686232056e0fb48d2179fb87be": "eaf16f3dc21800efa9541a0e51f8a387",
".git/objects/19/35ddb02a7702d79ed11f17f264cff966abf802": "81c9cff521cf2a773acdd1908d1923c1",
".git/objects/26/07317f64d357b0a14a0e58d16fdc37b6374731": "71ec5dfd28fe3273a7a94dfe379fc0a2",
".git/objects/26/4e38cc6ae026329594a2c987b3ba54e465f468": "f7e6959434b00cac3ac60869b5bc76dd",
".git/objects/26/9dfe3be0deabf111c47b20a566cf2a857c8f64": "7efda7abc4516d20279b053ccb3fbc94",
".git/objects/4d/85629a7df401817e50d71c0acb01f26da7c570": "634980de23a4aba445982de7643e61e6",
".git/objects/4d/235e21bde153495d4e8e28eb396233a565f513": "e3a02d9946e605c49ca2ed78f8344bbb",
".git/objects/2a/abbe09552d4a6181c350d113c7a85d190d67a5": "84a4c5faa55ada802e504cd4f6fd85f6",
".git/objects/88/7eca31e0a42b40d6f0389c059a9673a6cf8a2f": "f75ffc2cc992f3ae5ed2090ceedca0fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/a1983082ee77c5bbb18905470bc51498836376": "5f54dd92326bef1067aaaa77970f8e08",
".git/objects/6e/5f5107ec2c3bcaf19656c69f5f2963e80ac645": "112b4d1da25cf7e312b0897494330e17",
".git/objects/09/7bb0fe45c73e13391357f1ab045c0f823af6e4": "cf3b09c59aa0e2af45cb5499415a6d3a",
".git/objects/5d/579a5c2bbe15acf47ecfe32360b18f14e8a249": "1d5ad99cd697fd2ebd2dea31c52bcdaf",
".git/objects/91/45f74177c1c1bf2be75f78840b53a7474ea286": "80c015658f1e9122b51e5bb456ad0e3b",
".git/objects/91/9ce0bee58aed953a407a016ecefdefaa2452db": "06dd77a6ad76bcbea6f67d4fa9c135e3",
".git/objects/65/74faa17e60c290368c65d3a62bd638f1ab3f90": "7ef1c2960872128e3d93c107030764f7",
".git/objects/54/6ff63e718796e1394e377d874c030ea2207095": "1ce6102d9169e1dd182b1333170e69ee",
".git/objects/98/313cdcfccc987706375a80d0c09f97cace7cba": "fe426fd8210b7fd7fb150dcd788dd75b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/95a30cde402555a67aa8f731459050ecdf1050": "0cc3257d98a4231a63dfb960bf57a543",
".git/objects/08/1e13a4e01afdc1bfecc190f8f90d4f1c856483": "3bb81ee028ba365bc6d1ec752a59239d",
".git/objects/08/5f2535b302a510135a831809b121b68404a7b4": "7b075a88022ab0efaa00bcd53042545a",
".git/objects/39/d01579a98204f3a6ce0f8d83970f4a311180e6": "b5ab3ccca3807d909bd47d34d545c03c",
".git/objects/99/61ec070c4ab2181d21c12c1c3e6c67a8a3c221": "d9f5b6493fa76f59036d624626737cce",
".git/objects/52/77a956b7573ffe1d3341ab2d121c0651a1d90a": "8d9836d19c31fbbadb0c693eaca31ce8",
".git/objects/97/0733add778a0df774366928efd254922bb5e09": "f01190a136c0c8fe41f6c33048f4c257",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0f/a8c53a086d32ce5272f34d96106f53dd5c131c": "af01bf5399fb56bae44d3663ab21a7d2",
".git/objects/bf/69a3a038366f4425068888e47033ce4522a808": "f0fff4a88ffa649e7625e809c855f6ec",
".git/objects/bf/91071e7eccb5d86948214e376cd3e23f61dd13": "92fd8e3c3cf69e05aa7063c30838e3d7",
".git/objects/d5/ba51ec9ad7e1f7258d1ce74d845ee687766fd8": "70356e054d59233d729ae786c2bc069c",
".git/objects/d5/57c29c3f807c9166c17a74856daacb1b737449": "2f0808338100c5cc88b270fce6aff160",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/02c86fe5806fded8b22832f7caeddb0035a12d": "fab69baeaf83924d750208e671f57109",
".git/objects/a8/d9e3b2501c7562d94325c80c9721a15fe17b8f": "8b5303c52603b17d6b2119093ebecca3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/9871075b1ba0db4e16d135717cf4f1cfe99be9": "65f75f4a67dafdb384ff892590c45bd2",
".git/objects/c4/5e0aaa297e22463e56b8c1c3c112397ce1a94c": "61f4faf5ce9677c9ef8af64caca0021c",
".git/objects/cd/bd5826b5b6b34ed52fc6f77a6b88a2b29e1df6": "c65ccbd0304afbbd9520901e532ad6e9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/3117db9b2387834c53ad355153daa2b1072b86": "cc96ae7c41fd203c0dfcce218bd87f46",
".git/objects/f7/8f862da137028aa3543e1239bf1d930d29b9c3": "773493396a5dc6deafd440b59749d843",
".git/objects/c2/2da9ec817d05b85e0985c4fd9f5de350c70a32": "6756dbe8bda6190a7a6b859065c513a9",
".git/objects/f6/2b8798033992bac80b7b6310839add82dfd381": "e75a29161f07d4e9f28430a13ecef4e9",
".git/objects/f1/b56f5181fa9ab10267272ecaea9feb20fafa51": "4921f0e058fd5449f0d199b9a6b2de29",
".git/objects/e7/0d5f2ef21a428d3c4ef88b0dd1aa577b2bb362": "ed1ed29a8306a1ee6517f92ece6bdf3c",
".git/objects/e7/64bcdf5fc5b1d14b4eef8a79d081b66c7f6b29": "f8bacb7a434f71a520af934d255458a6",
".git/objects/cb/46d1173d41b68d5c2a826922fdc2b848807441": "f5486362fa7c54518f1a4038a486d6f4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f17e7ec92c8051dc7c74fb76e632d6fc097586": "b70c26e8eb618dc0f507e6d57ecdc1e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/e1d4781dce3cebeff4e187942b770215d9297a": "745df21acf8bccc8793b1442697de278",
".git/objects/1b/c8b37d9088513ea9208502a0e77223269c9b3e": "0aa8aa0cbc2d15bb8e609499024f0dce",
".git/objects/48/3bbc132dfdca9da70a2ae0b127a977ace42b22": "162d36e516f4d1e6e1312b2525c4c06b",
".git/objects/8d/e9fff9ee2734c06f2946dbb1cac2650dfe76be": "2bb502e8312998e8303c52fdc42e9995",
".git/objects/15/89488589feeb4bb27e16d1aa1ecb43687f1940": "1a1f2c4d7d6997ce6105bfc52462d425",
".git/objects/12/f97f5faa2e2b0190991ad2b2ba3adc505bb03a": "cade5a41a9ded9c3413db79f1c737c61",
".git/objects/76/72b4785eead5071f7d55e9d46f89bef1e4b8b1": "512941a1e179926d7bd6d96595f10269",
".git/objects/40/3816460a98c90d3d6029a04ec1c1761b436b67": "e2198b753039da6c5af5872d5b0f3581",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/2a8af46f7b12e3e26a35fbb4d4ca1aef6c5c2e": "24131e32064e9eb22d908ba5d789374d",
".git/objects/14/23206459c0f9447b62c8e1b693f517eb786894": "e644f512dca26db9416e227334c0919e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34407dbf95edddfcfb31cbc8b4796f76",
".git/logs/refs/heads/main": "4b340fb90cb4b97e4e902a067e7bb396",
".git/logs/refs/remotes/origin/main": "7a4b4b913659d85a12284fba533e289c",
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
".git/refs/heads/main": "105e01217148a8d1665b2e782cbd3d1d",
".git/refs/remotes/origin/main": "105e01217148a8d1665b2e782cbd3d1d",
".git/index": "aa6e83cda72960966923f84b0b380d28",
".git/COMMIT_EDITMSG": "38b503b2de34a97b29ef35a885b2c1c0",
"assets/images/boy/4.png": "8296e6bf442a31d8cc6156776cae0b74",
"assets/images/boy/5.png": "44294c118b91e4d962da3e570d9481c1",
"assets/images/boy/7.png": "57bf77d43975464aa789f43aa06bbf0b",
"assets/images/boy/6.png": "b6f090d48498c3a1122bcc123d7304a5",
"assets/images/boy/2.png": "0dbdfddda5b1967c55845f0cf0f7c69c",
"assets/images/boy/3.png": "bde7d5c40f9373b3f458b4322ff2bc3c",
"assets/images/boy/1.png": "702c61b2c4020bc0cc921b641bcfb38b",
"assets/images/girl/4.png": "b4d3ec36c4a8bb04113cfc64050b1947",
"assets/images/girl/5.png": "7b5ccb571e1da3227d5d50a5142cc3c2",
"assets/images/girl/7.png": "da97aaa304d82f5745310f47b65bfa3a",
"assets/images/girl/6.png": "8bc0df90c11b9dd0e8f9d9b819279010",
"assets/images/girl/2.png": "75f770f88cc6331849eedf4454acdd20",
"assets/images/girl/3.png": "94b9c509a47b574b189ea5b25e5facd5",
"assets/images/girl/1.png": "cf78ba6f95c050996261cf6d85ae25f0",
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
