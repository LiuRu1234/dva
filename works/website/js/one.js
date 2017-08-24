// 遮罩层开始
$(".main-left").each(function (i,v) {
    $(this).hover(function () {
        $(this).find(".mask").fadeIn(400);
    },function () {
        $(this).find(".mask").slideUp(400);
    })
});

// 楼层跳转
var floors=$(".main .mainbox>li");
var btnsbox=$(".menubar")
var btns=$(".menubar ul li");
var menubtns=$(".menu1 ul li");
$(window).scroll(function () {
    var st=$(window).scrollTop();
    if(st>800){
        btnsbox.show();
    }else {
        btnsbox.hide();
    }
})
btns.on("click",function () {
    var index=$(this).index();
    var ot=floors.eq(index).offset().top-80;
    $("html,body").animate({scrollTop:ot});
    btns.removeClass("active");
    btns.eq(index).addClass("active");
    menubtns.removeClass("active");
    menubtns.eq(index).addClass("active");
})
menubtns.on("click",function () {
    var index=$(this).index();
    var ot=floors.eq(index).offset().top-80;
    $("html,body").animate({scrollTop:ot});
    menubtns.removeClass("active");
    menubtns.eq(index).addClass("active");
    btns.removeClass("active");
    btns.eq(index).addClass("active");
})



