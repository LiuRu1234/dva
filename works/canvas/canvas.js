{
    let createBtn=document.querySelector("#create");
    let main=document.querySelector(".main")
    let alertBox=document.querySelector(".alert");
    let submit=document.querySelector("#submit");
    let cal=document.querySelector("#cal");
    let width=document.querySelector("#width");
    let height=document.querySelector("#height");
    let shape=document.querySelector("#shape");
    let lineWidth=document.querySelector("#linewidth");
    let type=document.querySelectorAll("[name=type]");
    let color=document.querySelector("#color");
    let backColor=document.querySelector("#backColor");
    let cancel=document.querySelector("#cancel");
    let clearBtn=document.querySelector("#clear");
    let linenum=document.querySelector("#linenum");
    // let pencil=document.querySelector("#pencil");
    let earser=document.querySelector("#earser");
    let cobj,canvas,h,w,canvasHistory=[],s="line",lw=2,t="stroke",c,bg,n=3;

    linenum.onchange = function () {
        n = linenum.value;
    }
    //形状
    shape.onchange=function () {
        s=shape.value;
    }
    //线宽
    lineWidth.onchange=function () {
        lw=lineWidth.value;
    }
    //描边，填充
    type.forEach(function (ele) {
        ele.onclick=function () {
            t=this.value;
        }
    })
    //字体和图形颜色
    color.onchange=function () {
        c=this.value;
    }
    //背景颜色
    backColor.onchange=function () {
        bg=this.value;
        canvas.style.background=bg;
    }
    //撤销
    cancel.onclick=function () {
        canvasHistory.pop();
        cobj.clearRect(0,0,w,h);
        if(canvasHistory.length!==0){
            cobj.putImageData(canvasHistory[canvasHistory.length-1],0,0,0, 0,w,h);
        }
    }
    //清空
    clearBtn.onclick=function () {
        cobj.clearRect(0,0,w,h);
        canvasHistory=[];
    }
    //橡皮
    earser.onclick=function () {
        canvas.onmousedown=function () {
            canvas.onmousemove=function (e) {
                let [ox,oy]=[e.offsetX,e.offsetY]
                cobj.clearRect(ox-5,oy-5,10,10);
            }
            canvas.onmouseup=function () {
                canvas.onmousemove=null;
                draw();
            }
        }
        cobj.clearRect(0,0,w,h);
        if(canvasHistory.length!==0){
            cobj.putImageData(canvasHistory[canvasHistory.length-1],0,0,0, 0,w,h);
        }
    }

    //创建画布
    createBtn.onclick=function () {
        alertBox.style.display="block";
        alertBox.classList.add("bounceIn");
    }
    //创建新画布的确定
    submit.onclick=function () {
        canvas=document.createElement("canvas");
        alertBox.style.display="none";
        w=width.value;
        h=height.value;
        canvas.width=w;
        canvas.height=h;
        canvas.style.border="1px solid #666";
        main.appendChild(canvas);
        draw();
    }
    //创建新画布的取消
    cal.onclick=function () {
        alertBox.style.display="none";
    }

    
    function draw() {
        canvas.style.background="#fff";
        canvas.onmousedown=function (e) {
            var [sx,sy]=[e.offsetX,e.offsetY];
            cobj=canvas.getContext("2d");
            let draw=new Draw(cobj,{lw,t,c,n});
            canvas.onmousemove=function (e) {
                var [mx,my]=[e.offsetX,e.offsetY];
                cobj.clearRect(0,0,w,h);
                if(canvasHistory.length!==0){
                    cobj.putImageData(canvasHistory[canvasHistory.length-1],0,0);
                };
                draw[s](sx,sy,mx,my);
            }
            canvas.onmouseup=function () {
                let data=cobj.getImageData(0,0,w,h);
                canvasHistory.push(data);
                canvas.onmousemove=null;
            }
            document.onmouseup=function () {
                canvas.onmousemove=null;
            }
        }
    }





}