(function () {
    for (var i=0;i<20;i++){
        for (var j=0;j<20;j++){
            $("<div></div>").addClass("block").attr("id",j+"-"+i).appendTo(".scene")
        }
    }
    var snakeArr=[{x:0,y:0},{x:1,y:0},{x:2,y:0}];
    var snakeHead=snakeArr[snakeArr.length-1];

    //创造蛇
    function drawSnake() {
        $(".snakebody").removeClass("snakebody");
        $(".snakehead").removeClass("snakehead");
        $.each(snakeArr,function (index,value) {
            $("#"+value.x+"-"+value.y).addClass("snakebody");
        });
        $("#"+snakeHead.x+"-"+snakeHead.y).addClass("snakehead");
    }
    drawSnake();
    //蛇的移动方向
    var dir="r";
    function move() {
        switch (dir){
            case "r":snakeHead={x:snakeHead.x+1,y:snakeHead.y};break;
            case "l":snakeHead={x:snakeHead.x-1,y:snakeHead.y};break;
            case "t":snakeHead={x:snakeHead.x,y:snakeHead.y-1};break;
            case "b":snakeHead={x:snakeHead.x,y:snakeHead.y+1};break;
        }
        snakeArr.push(snakeHead);
        var head=$("#"+snakeHead.x+"-"+snakeHead.y);
        //游戏结束弹出框
        if(head.hasClass("snakebody")||head.length===0){
            $(".alert").show();
            clearInterval(st)
            // location.reload();
        }
        //蛇吃食物
        if(head.hasClass("food")){
            head.removeClass("food");
            createFood();
        }else {
            snakeArr.shift();
        }
        drawSnake();
    }
    let st;
    //键盘控制蛇方向
    $(document).keydown(function (e) {
        switch (e.keyCode){
            case 65:
            case 37:dir="l";break;
            case 87:
            case 38:dir="t";break;
            case 68:
            case 39:dir="r";break;
            case 83:
            case 40:dir="b";break;
        }
    });
    //创造食物
    function createFood() {
        do {
            var rx = Math.floor(Math.random() * 20);
            var ry = Math.floor(Math.random() * 20);
        }while ($("#"+rx+"-"+ry).hasClass("snakebody"));
        $("#"+rx+"-"+ry).addClass("food");
    }
    createFood();


    //游戏重新开始
    $("#submit").click(function () {
        $(".alert").hide();
        location.reload();//重新加载页面
        st=setInterval(move,300);
    })
    $(document).keydown(function (e) {
        console.log(e.keyCode)
        if(e.keyCode===13){
            $(".alert").hide();
            location.reload();//重新加载页面
            st=setInterval(move,300);
        }
    })
    //开始按钮
    $("#start").click(function () {
        st=setInterval(move,300);
    })
    $(document).keydown(function (e) {
        console.log(e.keyCode)
        if(e.keyCode===32){
            st=setInterval(move,300);
        }
    })
    //暂停
    $("#pause").click(function () {
        clearInterval(st);
    })
    //得分
    $("#state").html(function (index,n) {
        return n;
    })
    console.log(snakeHead)












})();