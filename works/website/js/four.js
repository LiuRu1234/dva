$(".main .menu .menu-name li").click(function () {
    var index=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(".mainbox>ul>li").css("display","none").eq(index).css("display","block");
})