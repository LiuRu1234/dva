class Game{
    constructor(left,scor,state,life,phb){
        this.left=left;
        this.scor=scor;
        this.state=state;
        this.life=life;
        this.phb=phb;
        this.flag=true;
        this.height=window.innerHeight;
        this.bestscor=localStorage.scor?JSON.parse(localStorage.scor):[];
        this.updatephb();
    }

    //方法重复执行，步骤多且独立，对象外部可直接调用

    _int(){
        this.left.innerHTML="";
        this.statenum=1;
        this.state.innerHTML=1;
        this.scornum=0;
        this.scor.innerHTML=0;
        this.lifenum=5;
        this.life.innerHTML=5;
        this.num=3;
        this.speed=5;
        this.obj={};
        this.st=null;
    }

    start(){//开始创建字母
        this._int();
        for(let i=0;i<this.num;i++){
            this._createLetter();
        }
        this._move();
        this._keydown();
    }
    _createLetter(){//创建字母的功能，加下划线表示内部使用

        let newdiv=document.createElement("div");
        newdiv.className="letter";

        //字母不重复
        do{
        let randomNum=Math.floor(Math.random()*26)+65;//获取随机字母65-90
        var randomLetter=String.fromCharCode(randomNum);
        }while (this.obj[randomLetter]);

        //位置不重复
        do{
            var randomLeft=Math.random()*720;
        }while (this._checkLeft(randomLeft));

        this.obj[randomLetter]={left:randomLeft,ele:newdiv};//真值即可，核心(获得的随机字母作为变量，对象[变量名]=键值对儿)

        newdiv.style.left=randomLeft+"px";

        let randomTop=-Math.random()*100;//负值，看不到它？
        newdiv.style.top=randomTop+"px";
        // newdiv.innerHTML=randomLetter;

        newdiv.style.backgroundImage=`url(img/${randomLetter}.png)`//引入字母图片

        this.left.appendChild(newdiv);
    }

    _checkLeft(left){
        for (let i in this.obj){
            if(left>this.obj[i].left-80&&left<this.obj[i].left+80){
                return true;
            }
        }
        return false;
    }

    _move(){
        this.st=setInterval(function () {
            for (let i in this.obj){
                let top=this.obj[i].ele.offsetTop;
                top+=this.speed;
                this.obj[i].ele.style.top=top+"px";
                if(top>this.height){
                    this.lifenum--;
                    this.life.innerHTML=this.lifenum;
                    this.left.removeChild(this.obj[i].ele);
                    delete this.obj[i];
                    this._createLetter();
                    if(this.lifenum===0){
                        this._gameover();
                    }
                }
            }
        }.bind(this),100)//匿名函数中修改this指针
    }
    _keydown(){
        this.keydownHandler=function (e) {
            let kc=e.keyCode;
            let letter=String.fromCharCode(kc);
            if(this.obj[letter]){
                this.left.removeChild(this.obj[letter].ele);
                delete this.obj[letter];
                this._createLetter();
                this.scornum++;
                this.scor.innerHTML=this.scornum;
                if(this.scornum%10===0){
                    this._upstate();
                }
            }
        }.bind(this);
        document.addEventListener("keydown",this.keydownHandler)
    }

    _upstate(){
        this.statenum++;
        this.state.innerHTML=this.statenum;
        if(this.statenum<4){
            this._createLetter();
        }else{
            this.speed++;
        }
    }

    _gameover(){
        alert(`游戏结束 当前得分为${this.scornum}`);
        if(this.bestscor.length<3||this.scornum>this.bestscor[2].scor){
            let name;
            do {
                name = prompt("请输入姓名");
            } while (name === "")

            this.bestscor.push({name,scor:this.scornum});
            this.bestscor.sort(function (a,b) {
                if(a.scor>b.scor){
                    return -1;//从大往小排
                }else {
                    return 1;
                }
            });
            if(this.bestscor.length>3){
                this.bestscor.pop();//删除最后一个，保证只有三个
            };
            localStorage.scor = JSON.stringify(this.bestscor);
            this.updatephb();
        }
        this._int();
        clearInterval(this.st);
        this.flag=true;
    }

    updatephb(){
        this.bestscor.forEach(function (v,i) {
            this.phb[i].innerHTML=v.name+"-"+v.scor;
        }.bind(this));
    }

    pause(){
        clearInterval(this.st);
        document.removeEventListener("keydown",this.keydownHandler);
    }
    run(){
        this._move();
        this._keydown();
    }

}
let left=document.querySelector(".left");
let scor=document.querySelector("#scor");
let state=document.querySelector("#state");
let life=document.querySelector("#life");
let pausebtn=document.querySelector("#pause");
let startbtn=document.querySelector("#start");
let phb=document.querySelectorAll(".phb span");
let game=new Game(left,scor,state,life,phb);
let flag=true;

startbtn.onclick=function () {
    if(game.flag){
        game.flag=false;
        game.start();
    }
}

pausebtn.onclick = function () {
    if(flag){
        game.pause();
        this.innerHTML="继续";
    }else {
        game.run();
        this.innerHTML="暂停";
    }
    flag=!flag;
}


/*let bestscor=game.bestscor;
bestscor.forEach(function (v,i) {
    phb[i].innerHTML=v.name+"-"+v.scor;
})*/



