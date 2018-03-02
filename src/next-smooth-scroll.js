(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.smoothScroll = function (inDistance, inRate, inCallback) {
    var distance = inDistance || 0;
    var rate = inRate || 0.8;
    var current = document.documentElement.scrollTop || document.body.scrollTop;
    var callback = inCallback || nx.noop;

    if (current > distance) {
      global.requestAnimationFrame(function () {
        nx.smoothScroll(distance, rate, callback);
      });
      global.scrollTo(distance, rate * current);
    } else {
      callback();
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.smoothScroll;
  }

}());
