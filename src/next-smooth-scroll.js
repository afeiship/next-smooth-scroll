(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.smoothScroll = function (inRate, inDistance) {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > inDistance) {
      global.requestAnimationFrame(nx.smoothScroll);
      global.scrollTo(inDistance, inRate * currentScroll);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.smoothScroll;
  }

}());
