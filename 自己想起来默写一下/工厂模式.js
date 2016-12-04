// //发布订阅的写法精髓
// var EventCenter = (function () {
// //这个events会在页面一开始的时候，就注入EventCenter.on所产生的对象
//     var events = {};
//     function fire(evt, args) {
//         if (!events[evt]) {
//             return;
//         }
//         for (var i = 0; i < events[evt].length; i++) {
//             events[evt][i].handler(args);
//             //优化的写法，可以调用多个参数
//             events[evt][i].handler([].slice.call(arguments,1));
//         }
//
//     }
//     function on(evt, handler2) {
//         events[evt] = events[evt] || [];
//         events[evt].push({
//             handler: handler2
//         });
//     }
//     return {
//         on: on,
//         fire: fire
//     }
// })();
//
// EventCenter.fire('roll');
//
// EventCenter.on('roll', function (data) {
//     console.log(data);
//     console.log("got you ROLL!!!")
// })
//
var events = {};
EventManager = (function () {

    function on(evt, handle) {
        events[evt] = events[evt] || [];
        events[evt].push(handle);  //{事件1:[函数1,函数2]}
    }

    function fire(evt) {
        if (!events[evt]) {
            console.log("未绑定此事件");
            return
        }
        for (var i = 0; i < events[evt].length; i++) {
            events[evt][i]([].slice.call(arguments, 1))
        }
    }

    function off(evt) {
        delete events[evt];
    }

    return {
        on: on,
        fire: fire,
        off: off
    }
}());

EventManager.on('text:change', function (val) {
    console.log('text:change...  now val is ' + val);
});
EventManager.fire('text:change', 'jirengu');
EventManager.off('text:change')
EventManager.fire('text:change', 'jirengu');