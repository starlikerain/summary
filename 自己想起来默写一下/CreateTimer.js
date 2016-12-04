var Exposure = (function(e){
    var clock;
    var flag = false;
    function isShow($ele){
        var distanceY = $ele.offset().top,
            winH = $(window).height(),
            scrollTop = $(window).scrollTop();

        return (distanceY>scrollTop)&&(distanceY<winH+scrollTop)
    }

    function bind($ele,handle){
        $(window).on('scroll',function(){
            if(clock)clearTimeout(clock);
            clock = setTimeout(function(){
                if(isShow($ele)){
                    handle();
                }
            },0)
        });
    }
    function one($ele,handle){
        $(window).on('scroll',function(){
            if(flag)return;
            if(isShow($ele)){
                handle();
                flag=true;
            }
        })
    }
    return{
        bind:bind,
        one:one
    }
})()
Exposure.bind($(".target1"),function () {
    console.log($(".exposure1"));
});
Exposure.one($(".target2"),function () {
    console.log($(".exposure2"));
})