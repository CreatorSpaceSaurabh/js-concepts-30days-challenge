// *****Caches in Javascript******

let isCacheSupported = "caches" in window;
if (isCacheSupported) {
  // create caches using 3 methods - add, addAll, put
  let cacheName = "userSettings";
  let url = "/api/getData"; // Request for /api/get/usersettings url is sent to server, once the data is received, the response will be cached
  // add method
  caches.open(cacheName).then((cache) => {
    cache.add(url).then(() => {
      console.log("Data cached successfully");
    });
  });

  // all method - addAll accepts an array of URL , and returns a promise when all the resources are cached.

  let urls = ["/get/userSettings?userId=1", "/get/userDetails"];
  caches.open(cacheName).then((cache) => {
    cache.addAll(urls).then(() => {
      console.log("Data cached successfully");
    });
  });

  //   put method - put adds a key/value pairs to current Cache object.In put we need to manually fetch the request and set the value.
  fetch(url).then((res) => {
    return caches.open(cacheName).then((cache) => {
      return cache.put(url, res);
    });
  });
}
