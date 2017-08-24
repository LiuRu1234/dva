(function(){
    var designWidth=750;
    var fontSize=100;
    function resize(){
        var width=document.documentElement.clientWidth;
        var bili=width/designWidth>1?1:width/designWidth;
        // var size=width/750*100;
        document.querySelector("html").style.fontSize=fontSize*bili+"px";
    }
    resize();
    window.onresize=resize;
})();
//判断限制字数的部分
$("#text").on("keydown keyup",function () {
    var l=$(this).val().length;
    if(l>80){
        l=80;
        $(this).val(function(index,val){
            return val.slice(0,80);
        });
    }
    $("#notice").text(function () {
        return l<10?"0"+l:l;
    });
})
//点击提交
$("#submit").click(function () {
    var val=$("#text").val();
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time,isDone:false,isStar:false,isDelete:false});
    saveData(data);
    reWrite();
    $("#text").val("");
    $("#notice").text("00");
});
//获取信息的函数
function getData() {
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else {
        return [];
    }
}
//保存信息的函数
function saveData(data) {
    localStorage.todo=JSON.stringify(data);
}
//重绘页面
function reWrite() {
    $(".item ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function (index,value) {
        if(value.isDone===false){
            str1+=`<li id="${index}">
                    <p>${value.text}</p>
                    <time>
                        <i class="iconfont">&#xe612;</i>
                        ${time(value.time)}
                    </time>
                    `;
            if(value.isStar){
                str1+='<i class="iconfont xing active">&#xe614;</i><input type="checkbox"></li>';
            }else {
                str1+='<i class="iconfont xing">&#xe614;</i><input type="checkbox"></li>';
            }
        }else {
            str2+=`<li id="${index}">
                    <p>${value.text}</p>
                    <time>
                        <i class="iconfont">&#xe612;</i>
                        ${time(value.time)}
                    </time>
                    `;
            if(value.isStar){
                str2+='<i class="iconfont xing active">&#xe614;</i><input type="checkbox""></li>';
            }else {
                str2+='<i class="iconfont xing">&#xe614;</i><input type="checkbox"></li>';
            }
        }
    });
    $(".done ul").html(str2);
    $(".wait ul").html(str1);
}
reWrite();
//处理时间格式
function time(ms) {
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDate());
    var hour=addZero(date.getHours());
    var min=addZero(date.getMinutes());
    var second=addZero(date.getSeconds());
    return year+"/"+month+"/"+day+" "+hour+":"+min+":"+second;
}
//加零
function addZero(num) {
    return num<10?"0"+num:num;
}
//移动到已完成
$(".movebtn").click(function () {
    var data=getData();
    $(".wait ul li").each(function (index,ele) {
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDone=true;
        }
    });
    saveData(data);
    reWrite();
})
//删除已完成事件
$(".clearbtn").on("click",function () {
    var data=getData();
    $(".done ul li").each(function (index,ele) {
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        };
    });
    data=data.filter(function (ele) {
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
});
//星号jQuery事件委派
$(".wait ul").on("click",".xing",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})
$(".done ul").on("click",".xing",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})
//选项卡
$(".ADDBox #addselect").on("click",function () {
    $(".wait").show(400).siblings().hide();
})


$(".bar #toWait").on("click",function () {
    $(".wait").show(400).siblings().hide();
});
$(".bar #toDone").on("click",function () {
    $(".done").show(400).siblings().hide();
});
$(".bar #toAdd").on("click",function () {
    $(".ADDBox").show(400).siblings().hide();
});
$(".bar").on("click",function () {
    $(this).hide();
    $(".wait").show();
});
$(".bar .leftbar").on('click',function(e){
    e.stopPropagation();
})


$(".done #doneToadd").on("click",function () {
    $(".ADDBox").show(400).siblings().hide();
})
$(".done #doneTobar").on("click",function () {
    $(".bar").fadeIn(400).siblings().hide();
});


$(".wait #waitToadd").on("click",function () {
    $(".ADDBox").show(400).siblings().hide();
})
$(".wait #waitTobar").on("click",function () {
    $(".bar").fadeIn(400).siblings().hide();
});

//文字超出弹出框
$(".wait ul").on("click","li p",function () {
    setTooltip($(this).text());
    $(".overtext #overTowait").click(function () {
        $(".overtext").hide();
        $(".wait").show();
    })
})
$(".done ul").on("click","li p",function () {
    setTooltip($(this).text());
    $(".overtext #overTowait").click(function () {
        $(".overtext").hide();
        $(".done").show();
    })
})
function setTooltip(text){
    $(".wait").hide();
    $(".done").hide();
    $(".overtext").fadeIn(400).find(".addbox").text(text);
}

//全选反选
$(".wait #waitAll").on("click",function(){
    if($(this).attr('data-checked') == 'false'){
        $(this).attr('data-checked','true')
        $(".wait #waitAll").val("全选");
        $(".wait .list input[type='checkbox']").prop("checked", false);
    }else{
        $(this).attr('data-checked','false')
        $(".wait #waitAll").val("全不选");
        $(".wait .list input[type='checkbox']").prop("checked", true);
    }
});
$(".done #doneAll").on("click",function(){
    if($(this).attr('data-checked') == 'false'){
        $(this).attr('data-checked','true')
        $(".done #doneAll").val("全选");
        $(".done .list input[type='checkbox']").prop("checked", false);
    }else{
        $(this).attr('data-checked','false')
        $(".done #doneAll").val("全不选");
        $(".done .list input[type='checkbox']").prop("checked", true);
    }
});

