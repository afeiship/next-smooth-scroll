(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxEaseout = nx.easeout || require('next-easeout');
  var DOC = document.body.scrollTop ? document.body : document.documentElement;

  var NxSmoothScroll = nx.declare('nx.SmoothScroll', {
    properties: {
      bottomToScroll: {
        get: function () {
          // https://stackoverflow.com/questions/34874658/get-the-scroll-distance-from-bottom-to-scroll
          var scrollPosition = window.pageYOffset;
          var windowSize = window.innerHeight;
          var bodyHeight = document.body.offsetHeight;
          return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
        }
      }
    },
    statics: {
      config: function(inAccessor){
        this.accessor= inAccessor || {
          set: function(inValue){
            DOC.scrollTop = inValue;
          },
          get: function(){
            return DOC.scrollTop
          }
        }
      },
      easeout: function (inTo, inRate, inCallback) {
        var callback = inCallback || nx.noop;
        nxEaseout(this.accessor.get(), inTo, inRate, function (inValue, inRet) {
          this.accesgsor.set(inValue);
          inRet && callback();
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSmoothScroll;
  }

}());
