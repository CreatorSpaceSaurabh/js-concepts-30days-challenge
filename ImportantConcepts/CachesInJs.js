// *****Caches in Javascript******

let isCacheSupported = "caches" in window;
let cacheName = "userSettings";
let url = "/api/get/usersettings"; // Request for /api/get/usersettings url is sent to server, once the data is received, the response will be cached
// add method
caches.open(cacheName).then((cache) => {
  cache.add(url).then(() => {
    console.log("Data cached ");
  });
});
