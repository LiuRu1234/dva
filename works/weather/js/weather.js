/*1.以getScript方法发送请求获取当前位置的具体信息，信息包括所在位置的省，市
2.在获取到当前位置的具体信息后，用$.ajax方法请求全国的省市信息，并以数组的形式存在全局变量data中
3.对全国省市信息进行筛选，将省市名称添加到html中，并根据之前获取的当前位置信息设置显示的省市名称
4.对html中的option设置change事件，当事件触发时，重新设置市级菜单并且请求天气信息*/
$.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
    var CITY=remote_ip_info.city;
    var PRO=remote_ip_info.province;

var provinces=[];
var citys=[];
var data=[];
$.ajax({
    url:"http://api.jisuapi.com/weather/city?appkey=8c9c310aeb971277",
    dataType:"jsonp",
    success:function (r) {
        console.log(r)
        data=r.result;
        provinces=$.grep(r.result,function (value) {
            if(value.parentid==="0"){
                return true;
            }
        })
        $.each(provinces,function (index,value) {
            if(value.city == PRO){
                $("<option>").html(value.city).val(value.cityid).prop('selected','selected').appendTo("#provinces");
                citys=$.grep(data,function (v) {
                    if(v.parentid == value.cityid){
                        return true;
                    }
                })
                $.each(citys,function (index,value) {
                    if(value.city == CITY){
                        $("<option>").html(value.city).val(value.city).prop('selected','selected').appendTo("#citys");
                    }else{
                        $("<option>").html(value.city).val(value.city).appendTo("#citys");
                    }
                })
            }else{
                $("<option>").html(value.city).val(value.cityid).appendTo("#provinces");
            }
        })
    }
});
getWeather(CITY);
$("#provinces").on("change blur",function () {
    var id=$(this).val();
    citys=$.grep(data,function (value) {
        if(value.parentid===id){
            return true;
        }
    })

    $("#citys").empty();
    $.each(citys,function (index,value) {
        $("<option>").html(value.city).val(value.city).appendTo("#citys");
    })
})

$("#citys").on("change blur",function () {
    var city=$(this).val();
    console.log(city)
    getWeather(city);
})
    function getWeather(city) {
        $.ajax({
            url: "http://api.jisuapi.com/weather/query?appkey=8c9c310aeb971277&city=" + city,
            dataType: "jsonp",
            success: function (r) {
                console.log(r);
                if (r.status == "0") {
                    var src = "img/weathercn02/" + r.result.img + ".png";
                    $(".weatherIcon").attr("src", src);
                    $(".zhiliang").text(r.result.aqi.aqi + r.result.aqi.quality);
                    $(".zhiliang").css({background: r.result.aqi.aqiinfo.color});
                    $(".date").text(r.result.date);
                    $(".city").text(r.result.city);
                    $(".week").text(r.result.week);
                    $(".temp").text(r.result.temp + "℃");
                    $(".weather").text(r.result.weather);
                    $(".wind").text(r.result.winddirect + r.result.windpower + "风");
                    $(".temparr").text(r.result.templow + "~" + r.result.temphigh + "℃");

                    var dates = r.result.daily;
                    $(dates).each(function (index, value) {
                        $(".weekly").each(function (i, v) {
                            var i = i + 1;
                            $(this).find(".week").text(dates[i].week).end()
                                .find(".dates").text(dates[i].date);
                            var day = dates[i].day;
                            var night = dates[i].night;
                            var src1 = "img/weathercn02/" + day.img + ".png";
                            $(this).find(".weatherIcon").attr("src", src1);
                            $(this).find(".weather").text(day.weather);
                            $(this).find(".wind").text(day.winddirect + day.windpower);
                            $(this).find(".temparr").text(night.templow + "~" + day.temphigh + "℃");
                        })

                        var src2 = "img/weathercn02/" + dates[0].day.img + ".png";
                        $(".weatherIconDay").attr("src", src2);
                        $(".weatherday").text(dates[0].day.weather);
                        $(".windday").text(dates[0].day.winddirect + dates[0].day.windpower);
                        $(".tempday").text(dates[0].day.temphigh + "℃");

                        var src3 = "img/weathercn/" + dates[0].day.img + ".png";
                        $(".weatherIconNight").attr("src", src3);
                        $(".weathernight").text(dates[0].night.weather);
                        $(".windnight").text(dates[0].night.winddirect + dates[0].night.windpower);
                        $(".tempnight").text(dates[0].night.templow + "℃");

                    })


//                    实时
                    var hourly = r.result.hourly;
                    $(hourly).each(function (index, value) {
                        $(".weather").text(value.weather);
                        $(".temp").text(value.temp + "℃");
                        var src = "img/weathercn02/" + value.img + ".png";
                        $(".weatherIcon").attr("src", src);
                    })
                }
            }
        })
    }
});