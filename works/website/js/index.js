let dians=$(".banner .point li");
let banners=$(".banner .list li");
let bannersPic=$(".banner .list li .bannerPic");
let smallbanners=$(".banner li .reset");
console.log(bannersPic)
let menu=$(".menu");
// 轮播开始
dians.click(function () {
    var index=$(this).index();
    dians.filter(".active").removeClass("active").end().eq(index).addClass("active");
    smallbanners.filter(".on").removeClass("on").end().eq(index).addClass("on");
    banners.filter(".active").fadeOut(200).removeClass("active").end().eq(index).fadeIn(400).addClass("active");
    if(index===2||index===3){
        bannersPic.eq(index).animate({left:"-30px"},4600,function () {
            $(this).css("left",0);
        });
    }else {
        bannersPic.eq(index).animate({top:"-30px"},4600,function () {
            $(this).css("top",0);
        });
    }
    num=index;
})
var num=0;
function move() {
    num++;
    if(num===dians.length){
        num=0;
    }
    dians.filter(".active").removeClass("active").end().eq(num).addClass("active");
    smallbanners.filter(".on").removeClass("on").end().eq(num).addClass("on");
    banners.filter(".active").fadeOut(200).removeClass("active").end().eq(num).fadeIn(400).addClass("active");
    if(num===2||num===3){
        bannersPic.eq(num).animate({left:"-30px"},4600,function () {
            $(this).css("left",0);
        });
    }else {
        bannersPic.eq(num).animate({top:"-30px"},4600,function () {
            $(this).css("top",0);
        });
    }
}
let st=setInterval(move,4000);
if(num===0){
    bannersPic.eq(0).animate({top:"-30px"},4600,function () {
        $(this).css("top",0);
    });
}
$(document).focus(function () {
    st=setInterval(move,4000);
})
$(document).blur(function () {
    clearInterval(st);
})

// 小框
var flag=1;
smallbanners.hover(function(){
    clearInterval(st);
    if(flag){
        flag = 0;
        $('.reset .txt').slideDown(400);
        $('.reset h3').slideUp(400,function(){
            flag = 1;
        })
    }
},function(){
    st=setInterval(move,4000);
    if(flag){
        flag = 0;
        $('.reset .txt').slideUp(400);
        $('.reset h3').slideDown(400,function(){
            flag = 1;
        })
    }
})
// 左边
menu.hover(function () {
    $(".menu .menutop").fadeIn(400);
    $(".menu .menubottom").fadeIn(400);
    $(".menu .menupic").fadeOut(400);
},function () {
    $(".menu .menutop").fadeOut(400);
    $(".menu .menubottom").fadeOut(400);
    $(".menu .menupic").fadeIn(400);
});

//第二张图不动，
//闪屏
//下切换时图片先到起始点才切换
// 所有的图片一起动
// 后三张图片动一半重新动，最后一张上下左右动
//圆点点击后图片不动





