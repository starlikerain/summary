/**
 * Created by StarLikeRain on 26/11/2016.
 */
(function (global, factory) {
    factory(global);
})(window, function (window, global) {
    var SLR = function (selector, context) {
        return new SLR.prototype.init(selector, context)
    }
    SLR.fn = SLR.prototype = {
        constractor: SLR,
        init: function (selector, context) {
            this.selector = selector;
            this.context = context;
        },
        toArray: function () {
            return slice.call(this)
        }
    }
    SLR.extend({
        isArray: Array.isArray
    })
    window.SLR = window.$ = SLR;
    return SLR;
})
