// 图片按需加载
{
    let imgs=document.images;
    Array.from(imgs).forEach(function (ele) {
        if(window.innerHeight>getPosition(ele)){
            ele.src=ele.getAttribute("data-src");
        }
    })
    window.addEventListener("scroll",function () {
        let st=document.body.scrollTop;
        Array.from(imgs).forEach(function (ele) {
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src");
            }
        })
    })

    console.log(imgs[0].offsetParent);
    //具有定位属性的父元素
    function getPosition(obj) {
        let ot=obj.offsetTop;
        let parent=obj.offsetParent;
        while (parent!=null&&parent.nodeName!="BODY"){
            ot+=parent.offsetTop;
            parent=parent.offsetParent;
        }
        return ot;
    }

}

// 直播中开始
{
    const big=document.querySelectorAll(".zhibo-left-top .zhiboPic");
    const small=document.querySelectorAll(".zhibo-left-middle .zhiboPic4");
    const masks=document.querySelectorAll(".zhibo-left-middle .zhiboMask");
    small.forEach(function (ele,index) {
        ele.onmouseover=function () {
            big.forEach(function (ele,index) {
                // ele.style.zIndex=1;
                ele.style.display="none";
                masks[index].style.display="none";
            })
            // big[index].style.zIndex=2;
            big[index].style.display="block";
            masks[index].style.display="block";
        }
    })
}
// 直播中右边
{
    const items=document.querySelectorAll(".zhibo-right li");
    const masks=document.querySelectorAll(".zhibo-right li .yincang");
    items.forEach(function (ele,index) {
        ele.onmouseover=function () {
            masks[index].style.opacity=1;
        }
        ele.onmouseout=function () {
            masks[index].style.opacity=0;
        }
    })
}
// banner左边开始
{
    const items=document.querySelectorAll(".banner-left .bannerone");
    const masks=document.querySelectorAll(".banner-left li .bannerMask");
    /*items.forEach(function (ele,index) {
        items[index].onmouseover=function () {
            masks[index].style.display="block";
        }
        items[index].onmouseout=function () {
            masks[index].style.display="none";
        }
    })*/
    items.forEach(function (ele,index) {
        items[index].onmouseover=function () {
            masks[index].style.display="block";
        }
        items[index].onmouseout=function () {
            masks[index].style.display="none";
        }
        masks[index].onmouseout=function () {
            masks[index].style.display="none";
        }
        /*hover(ele,function () {
            items[index].onmouseover=function () {
                masks[index].style.display="block";
            },
            function () {
                items[index].onmouseout=function () {
                    masks[index].style.display="none";
                }
            }
        })*/
    })
}
// banner轮播图开始
{
    const bannerlist=document.querySelectorAll(".banner .bannerPicBox .bannerPic");
    const dianlist=document.querySelectorAll(".banner .lunbodian li");
    const boxcolor=document.querySelector(".bannerBOX");
    var colorarr=["#2191EF","#E8E8E8","#95CDEE","#E8E8E8","#438DE2","#D5D5D5"]
    dianlist.forEach(function (ele,index) {
        ele.onmouseover=function () {
            dianlist.forEach(function (ele,index) {
                ele.classList.remove("active");
                bannerlist[index].classList.remove("active");
            })
            ele.classList.add("active");
            bannerlist[index].classList.add("active");
            boxcolor.style.background=colorarr[index];
            num=index;
        }
    })

    let num=0;
    let move=function () {
        num++;
        if (num==dianlist.length){
            num=0;
        }
        dianlist.forEach(function (ele,index) {
            ele.classList.remove("active");
            bannerlist[index].classList.remove("active");
        })
        dianlist[num].classList.add("active");
        bannerlist[num].classList.add("active");
        boxcolor.style.background=colorarr[num];
    }
    let st=setInterval(move,3000);
    boxcolor.onmouseover=function () {
        clearInterval(st);
    }
    boxcolor.onmouseout=function () {
        st=setInterval(move,3000);
    }
    
}

// 直播下方文字的轮播
{
    const zhibolist=document.querySelector(".zhibo-text-inner");
    const  lilist=document.querySelectorAll(".zhibo-text-inner li");
    let lenght=lilist.length;
    let num=0;
    setInterval(function () {
        num++;
        if(num==lenght){
            num=0;
        }
        zhibolist.style.marginTop=-num*40+"px";
    },3000);
    
}
// 直播中中间轮播
{
    const zhibo=document.querySelector(".zhiboLM-inner");
    const prev=document.querySelector(".zhibo-left-middle .zhiboLM-left");
    const next=document.querySelector(".zhibo-left-middle .zhiboLM-right");
    prev.onclick=function () {
        zhibo.style.marginLeft="0";
        next.style.display="block";
        prev.style.display="none";
    }
    next.onclick=function () {
        zhibo.style.marginLeft="-488px";
        next.style.display="none";
        prev.style.display="block";
    }
}

// 头部红色悬框
{
    const topbar=document.querySelector(".topbar");
    let num=800;
    window.onscroll=function () {
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=num){
            topbar.style.top=0;
        }else{
            topbar.style.top="-50px";
        }
    }
}
// 右边返回顶层
{
    const totop=document.querySelector(".fuceng-right .fuR-btn");

    var elescroll=function (ele,num) {
        window.addEventListener("scroll",function () {
            // let num=600;
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            if(obj.scrollTop>=num){
                ele.style.display="block";
            }else{
                ele.style.display="none";
            }
        })
    }

    elescroll(totop,600);

    var toponclick=function (ele,time) {
        ele.onclick=function () {
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            let scrollt=obj.scrollTop;
            // let time=1000;
            let speed=scrollt/time*50;
            let st=setInterval(function () {
                scrollt-=speed;
                obj.scrollTop=scrollt;
                if(scrollt<=0){
                    clearInterval(st);
                    scrollt=0;
                }
            },50)
        }
    }
    toponclick(totop,1000);

 }
// 左边返回顶层
{
    
    const fuLeft=document.querySelector(".fuceng-left ul")
    window.addEventListener("scroll",function () {
        let num=600;
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=num){
            fuLeft.style.transform="scale(1)";
            // fuLeft.style.cssText="width:36px;height:295px";
        }else{
            fuLeft.style.transform="scale(0)";
            // fuLeft.style.cssText="width:0px;height:0px";
        }
    })

}
// 左边各个按钮
{
    // 返回顶层
    const lefttotop=document.querySelector(".youlike-totop");
    lefttotop.addEventListener("click",function () {
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        let scrolltop=obj.scrollTop;
        let time=1000;
        let speed=scrolltop/time*50;
        let st=setInterval(function () {
            scrolltop-=speed;
            obj.scrollTop=scrolltop;
            if(scrolltop<=0){
                clearInterval(st);
                scrolltop=0;
            }
        },50)

    })


    // 楼层跳转-位置对应
    //楼层跳转声明obj写在事件里头，否则刷新才会跳转
    const floors=document.querySelectorAll(".contant-box .floor");
    const btns=document.querySelectorAll(".fuceng-left .btn");

    btns.forEach(function (ele,index) {
        ele.addEventListener("click",function () {
            let obj=document.body.scrollTop==0?document.documentElement:document.body;
            var ot=floors[index].offsetTop-50;
            animate(obj,{scrollTop:ot},500);
        })
    })
    
    //楼层跳转-颜色对应
    let colorarr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#FF0036"]
    window.addEventListener("scroll",function () {
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        let st=obj.scrollTop;
        floors.forEach(function (ele,index) {
            if(st>=ele.offsetTop-150){
                btns.forEach(function (ele,index) {
                    ele.style.background="";
                })
                btns[index].style.background=colorarr[index];
            }
            if(st<ele.offsetTop-350){
                btns[index].style.background="";
            }
        })
    })
    
}
// 右边弹出
{
    const items=document.querySelectorAll(".fuceng-right .fuitems");
    const tips=document.querySelectorAll(".fuceng-right .futips");


    /*items.forEach(function (ele,index) {
        ele.onmouseover=function () {
            tips[index].style.display="block";
            animate(tips[index],{opacity:1,left:-100})
        }
        ele.onmouseout=function () {
            animate(tips[index],{opacity:0,left:-150},function () {
                tips[index].style.display="none"
            })
        }
    })*/

    let st;
    items.forEach(function (ele,index) {
        hover(ele,function () {
            items[index].style.background="#FF0036"
            clearTimeout(st);
            st=setTimeout(function () {
                tips[index].classList.add("flyIn");
            },1000)
        },function () {
            clearTimeout(st);
            if(tips[index].classList.contains("flyIn")){
                tips[index].classList.add("flyOut");
            }
            items[index].style.background=""
        })
    })
    tips.forEach(function (ele,index) {
        ele.addEventListener("animationend",function () {
            if(tips[index].classList.contains("flyOut")){
                tips[index].classList.remove("flyIn");
                tips[index].classList.remove("flyOut");
            }
        })
        ele.onmouseover=function (e) {
            //调兼容
            var e=e||window.event;
            if(e.stopPropagation){
                e.stopPropagation()
            }else{
                e.cancelBubble=true;
            }
        }
    })

}












