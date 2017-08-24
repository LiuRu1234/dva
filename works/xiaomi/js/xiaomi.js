// 轮播图开始
{
    const bannerlist = document.querySelectorAll(".banner .banner-pic li");
    const dianlist = document.querySelectorAll(".banner .lunbodian li");
    const left = document.querySelector(".banner .jiantou-left");
    const right = document.querySelector(".banner .jiantou-right");

    let num = 0;
    let move = function () {
        num++;
        if (num == dianlist.length) {
            num = 0;
        }
        if (num == -1) {
            num = dianlist.length - 1;
        }
        dianlist.forEach(function (ele, index) {
            ele.classList.remove("active");
            bannerlist[index].classList.remove("active");
        })
        dianlist[num].classList.add("active");
        bannerlist[num].classList.add("active");
    }
    let st = setInterval(move, 3000);

    dianlist.forEach(function (ele, index) {
        ele.onclick = function () {
            dianlist.forEach(function (ele, index) {
                ele.classList.remove("active");
                bannerlist[index].classList.remove("active");
            })
            ele.classList.add("active");
            bannerlist[index].classList.add("active");
            clearInterval(st);
        }
    });

    left.onclick = function () {
        num -= 2;
        move();
    }
    right.onclick = function () {
        move();
    }
}
// 小米明星单品开始

{
    const startinner = document.querySelector(".start .start-inner");
    const startbtn = document.querySelector(".start-head1");
    const startleft = document.querySelector("#singlePrev");
    const startright = document.querySelector("#singleNext");
    let num = 0;
    let move1 = function () {
        if (num == 0) {
            startinner.style.marginLeft = "-1240px";
            num = 1;
            startleft.classList.remove('orangeArrow');
            startright.classList.add('orangeArrow')
        }else if (num == 1) {
            startinner.style.marginLeft = 0;
            num = 0;
            startleft.classList.add('orangeArrow');
            startright.classList.remove('orangeArrow')
        }
    }
    let st1 = setInterval(move1, 5000);


    startbtn.onmouseover = function () {
        clearInterval(st1);
    }
    startbtn.onmouseout = function () {
        st1 = setInterval(move1, 5000);
    }

    startleft.onclick = function () {
        startinner.style.marginLeft = 0;
        startright.style.color = "#B1B0B0";
        startleft.style.color = "#E0E0E1";

        startleft.classList.remove('orangeArrow');
        startright.classList.add('orangeArrow')
    }
    startright.onclick = function () {
        startinner.style.marginLeft = "-1240px";
        startleft.style.color = "#B1B0B0";
        startright.style.color = "#E0E0E1";

        startleft.classList.add('orangeArrow');
        startright.classList.remove('orangeArrow')
    }

}
// 为你推荐开始
{
    const foryouinner = document.querySelector(".foryou .foryou-inner");
    const prev = document.querySelector("#foryouPre");
    const next = document.querySelector("#foryouNext");
    let num = 0;
    let flag = 1;
    let move = function (dir) {
        var marginLeftNow = parseInt(getStyle(foryouinner, 'marginLeft'))
        if (dir == 'right') {
            foryouinner.style.marginLeft = -1240 + marginLeftNow + "px";
        } else if (dir == 'left') {
            foryouinner.style.marginLeft = 1240 + marginLeftNow + "px";
        }
    }
    prev.onclick = function () {
        if (num > 0 && flag) {
            flag = 0;
            num--;
            move('left');
            next.style.color = '#B1B0B0';
            next.classList.add('orangeArrow')
            if (num == 0) {
                this.style.color = 'rgb(224, 224, 225)';
                this.classList.remove('orangeArrow')
            }
        }
    }
    next.onclick = function () {
        if (num < 3 && flag) {
            flag = 0;
            num++;
            move('right');
            prev.style.color = '#B1B0B0';
            prev.classList.add('orangeArrow')
            if (num == 3) {
                this.style.color = 'rgb(224, 224, 225)';
                this.classList.remove('orangeArrow')
            }
        }
    }
    foryouinner.addEventListener('transitionend', function () {
        flag = 1
    })

    function getStyle(element, attr) {
        if (element.currentStyle) {
            return element.currentStyle[attr];
        } else {
            return window.getComputedStyle(element, null)[attr];
        }
    }
}

// 内容开始
/*{
    const contentlist = document.querySelectorAll(".Content li .Content-middle-inner .Content-middle");
    const contentinner = document.querySelector(".Content li .Content-middle-inner");
    const dianlist = document.querySelectorAll(".Content-bottom .Con-lunbo");
    const contentprev = document.querySelector(".Content .Content-left");
    const contentnext = document.querySelector(".Content .Content-right");

    let num = 0; //当前banner-innner往左边动了几格
    let dir = "right";

    let move = function () {
        if (dir == "right") {
            num++;
        } else {
            num--;
        }
        contentinner.style.transition = "all 1s";
        contentinner.style.marginLeft = -num * 296 + "px";
    }
    contentinner.addEventListener("transitionend", function () {
        kaiguan = true;
        if (num == 2 || num == 0) {
            contentinner.style.transition = "none";
            kaiguan = false;
        }
    })

    let kaiguan = true;
    contentprev.onclick = function () {
        dir = "left";
        if (kaiguan) {
            // num-=2;
            kaiguan = false;
            move();
        }
    }
    contentnext.onclick = function () {
        dir = "right";
        if (kaiguan) {
            kaiguan = false;
            move();
        }
    }
    
}*/

{

    let connentmove=function (box) {
            const contentinner = box.querySelector(".Content-middle-inner");
            const dianlist = box.querySelectorAll(".Content-bottom .Con-lunbo");
            const contentprev = box.querySelector(".Content-left");
            const contentnext = box.querySelector(".Content-right");

            let now=0;
            dianlist.forEach(function (ele,index) {
                ele.addEventListener("click",function () {
                    contentinner.style.marginLeft=-index*296+"px";
                    dianlist[now].classList.remove("Con-lunbo1");
                    dianlist[index].classList.add("Con-lunbo1");
                    now=index;
                })
                ele.onmouseover=function () {
                    dianlist[index].style.background="#ff6700";
                }
                ele.onmouseout=function () {
                    dianlist[index].style.background="#b0b0b0";
                }
            })

            contentnext.onclick=function () {
                if(now==dianlist.length-1){
                    return;
                }
                now++;
                contentinner.style.marginLeft=-now*296+"px";
                dianlist.forEach(function (ele) {
                    ele.classList.remove("Con-lunbo1");
                })
                dianlist[now].classList.add("Con-lunbo1");
            }

            contentprev.onclick=function () {
                if(now==0){
                    return;
                }
                now--;
                contentinner.style.marginLeft=-now*296+"px";
                dianlist.forEach(function (ele) {
                    ele.classList.remove("Con-lunbo1");
                })
                dianlist[now].classList.add("Con-lunbo1");
            }
        }

    const contentlist=document.querySelectorAll(".Content li");
    contentlist.forEach(function (ele,index) {
        connentmove(ele)
    })
}

// 导航下拉
{
    const navs=document.querySelectorAll(".nav .nav-main .NavLi");
    const navchildren=document.querySelectorAll(".nav .nav-main .NavLi .nav-child");

    navs.forEach(function (ele,index) {
        ele.onmouseover=function () {
            navchildren[index].style.height="228px";
        }
        ele.onmouseout=function () {
            navchildren[index].style.height="1px";
        }
    })
}

// 家电，智能，搭配，配件，周边
{
    function Fn(box) {
        let toplist=box.querySelectorAll(".app-right a");
        let rightlist=box.querySelectorAll(".appliance-right .applianceOne");
        console.log(box)
        console.log(toplist)
        console.log(rightlist)
        toplist.forEach(function (ele,index) {
            ele.onmouseover=function () {
                toplist.forEach(function (ele,index) {
                    toplist[index].classList.remove("autofocus");
                    rightlist[index].classList.remove("appli");
                })
                toplist[index].classList.add("autofocus");
                rightlist[index].classList.add("appli");
            }
        })
    }
    let jiadian=document.querySelector(".jiadian");
    Fn(jiadian);

    let zhineng=document.querySelector(".zhineng");
    Fn(zhineng);

    let dapei=document.querySelector(".dapei");
    Fn(dapei);

    let peijian=document.querySelector(".peijian");
    Fn(peijian);

    let zhoubian=document.querySelector(".zhoubian");
    Fn(zhoubian);
}










