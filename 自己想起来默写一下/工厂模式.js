/**
 * Created by StarLikeRain on 27/11/2016.
 */
// function createPerson(type, opts) {
//     var Person = {
//         name: opts.name || "deafult name"
//     }
//     Person.sayName = function () {
//         console.log(this.name)
//     }
//     if (type == "tab") {
//         return tab
//     }
//     return Person
// }
// var Jhon = createPerson({name: "Jhon"})

//发布订阅的写法精髓
var EventCenter = (function () {

    var events = {};
    console.log(events);

    function fire(evt, args) {
        if (!events[evt]) {
            return;
        }
        for (var i = 0; i < events[evt].length; i++) {
            events[evt][i].handler(args);
            //优化的写法，可以调用多个参数
            events[evt][i].handler([].slice.call(arguments,1));
        }

    }

    function on(evt, handler2) {
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler2
        });
    }

    return {
        on: on,
        fire: fire
    }
})();


EventCenter.on('roll', function (data) {
    console.log(data);
    console.log("got you ROLL!!!")
})