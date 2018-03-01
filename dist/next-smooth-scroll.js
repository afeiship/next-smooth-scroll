(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var timer = null;

  nx.smoothScroll = function (inDistance, inRate) {
    var distance = inDistance || 0;
    var rate = inRate || 0.8;
    var current = document.documentElement.scrollTop || document.body.scrollTop;
    if (current > distance) {
      timer && global.cancelAnimationFrame(timer);
      timer = global.requestAnimationFrame(function () {
        nx.smoothScroll(distance, rate);
      });
      global.scrollTo(distance, rate * current);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.smoothScroll;
  }

}());
