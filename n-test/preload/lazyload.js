(function (w, d) {
  var b = d.getElementsByTagName("body")[0];
  var s = d.createElement("script");
  var v = !("IntersectionObserver" in w) ? "8.17.0" : "10.19.1";
  s.async = true; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
  s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
  w.lazyLoadOptions = { elements_selector: ".lazy" };
  b.appendChild(s);
  w.addEventListener("LazyLoad::Initialized", function (e) {
    w.lazyloadInstance = e.detail.instance;
  }, false);
}(window, document));
