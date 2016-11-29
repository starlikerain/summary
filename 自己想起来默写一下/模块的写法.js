/**
 * Created by StarLikeRain on 27/11/2016.
 */
var aa = (function () {
    var name = "StarLikeRain";
    var oo = {
        init: function (arguments0) {
            this.arguments[0] = "name StarLikeRain";
        },
        sayName: function () {
            console.log(name);
        },
        changeName: function () {
            name = arguments[0].toString();
        }
    }
    return {
        sayName : oo.sayName
    }
})()
