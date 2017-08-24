//判断限制字数的部分
$("#text").on("keydown keyup",function () {
    var l=$(this).val().length;
    if(l>40){
        l=40;
        $(this).val(function(index,val){
            return val.slice(0,40);
        });
        alert("您输入的内容超出字数限制")
    }
    $("#notice").text(function () {
        return l<10?"0"+l:l;
    });
})
//点击提交
$("#submit").click(function () {
    var val=$("#text").val();
    if(val===""){
        $(".addPrompt").fadeIn(400);
        $(".addPrompt input").on("click",function () {
            $(".addPrompt").fadeOut(400);
        })
        return;
    }
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time,isDone:false,isStar:false,isDelete:false});
    $(".addSure").fadeIn(400);
    $(".addSure input").on("click",function () {
        saveData(data);
        $(".addSure").fadeOut(400);
        reWrite();
        $("#text").val("");
        $("#notice").text("00");
    })
});
//关闭添加界面
$(".close").click(function () {
    $(".add").slideUp(600);
    $(".wait").delay(600).slideDown(600)
})
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
                    <input type="checkbox">
                    <p>${value.text}</p>
                    <time>
                        <i class="iconfont">&#xe60b;</i>
                        ${time(value.time)}
                    </time>
                    `;
            if(value.isStar){
                str1+='<i class="iconfont xing active">&#xe614;</i></li>';
            }else {
                str1+='<i class="iconfont xing">&#xe614;</i></li>';
            }
        }else {
            str2+=`<li id="${index}">
                    <input type="checkbox">
                    <p>${value.text}</p>
                    <time>
                        <i class="iconfont">&#xe60b;</i>
                        ${time(value.time)}
                    </time>
                    `;
            if(value.isStar){
                str2+='<i class="iconfont xing active">&#xe614;</i></li>';
            }else {
                str2+='<i class="iconfont xing">&#xe614;</i></li>';
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
    console.log(day)
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
//跳转到添加页面
$(".addList").click(function () {
    $(".done").hide();
    $(".wait").hide();
    $(".add").fadeIn(400);
});
//选项卡
$("#toDone").click(function () {
    $(".add").hide();
    $(".wait").hide();
    $(".done").slideDown(400);
})
$("#toWait").click(function () {
    $(".add").hide();
    $(".done").hide();
    $(".wait").slideDown(400)
})
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
//内容过长弹出框
$(".wait ul").on("click","li p",function () {
    setTooltip($(this).text());
});
$(".done ul").on("click","li p",function () {
    setTooltip($(this).text());
});
function setTooltip(text){
    $(".tooltipMask").fadeToggle(400).find(".overText").text(text);
}
$(".tooltipMask").on('click',function(){
    $(this).fadeOut(400);
})
$(".tooltipMask .overText").on('click',function(e){
    e.stopPropagation();
})


