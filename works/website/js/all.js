var first=$(".first li.navnask");
var second=$(".second ul");
first.each(function () {
    var index=$(this).index()-2;
    $(this).hover(function () {
        $(".second").animate({height:60},"easing")
        $(".second ul").hide().eq(index).show();

        $(".second").hover(function () {
            $(".second").css("height","60px")
            $(".second ul").hide().eq(index).show();
        },function () {
            $(".second").css("height","0px")
            $(".second ul").hide();
        })
    },function () {
        $(".second").css("height","0px")
        $(".second ul").hide();
    })
})