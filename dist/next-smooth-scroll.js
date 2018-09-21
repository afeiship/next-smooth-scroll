(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxEaseout = nx.easeout || require('next-easeout');
  var DOC = document.body.scrollTop ? document.body : document.documentElement;

  var NxSmoothScroll = nx.declare('nx.SmoothScroll', {
    statics: {
      easeout: function (inTo, inRate) {
        nxEaseout(DOC.scrollTop, inTo, inRate, function (value) {
          DOC.scrollTop = value;
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSmoothScroll;
  }

}());
