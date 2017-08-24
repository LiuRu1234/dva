class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.cobj.lineWidth=option.lw;
        this.type=option.t;
        this.color=option.c;
        this.side=option.n;
        cobj.fillStyle=this.color;
        cobj.strokeStyle=this.color;
    }
    
    line(sx,sy,mx,my){
        let cobj=this.cobj;
        cobj.beginPath();
        cobj.moveTo(sx,sy);
        cobj.lineTo(mx,my);
        cobj.stroke();
    }
    rect(sx,sy,mx,my){
        let cobj=this.cobj;
        cobj.beginPath();
        cobj.rect(sx,sy,mx-sx,my-sy);
        cobj[this.type]();
    }
    circle1(sx,sy,mx,my){
        let cobj=this.cobj;
        cobj.beginPath();
        let r=Math.abs(mx-sx)>Math.abs(my-sy)?Math.abs(my-sy)/2:Math.abs(mx-sx)/2;
        cobj.arc(mx-sx>0?sx+r:sx-r,my-sy>0?sy+r:sy-r,r,0,2*Math.PI);
        cobj[this.type]();
    }
    circle2(sx,sy,mx,my){
        let cobj=this.cobj;
        cobj.beginPath();
        let r=Math.abs(mx-sx)>Math.abs(my-sy)?Math.abs(mx-sx)/(2*Math.cos(45*Math.PI/180)):Math.abs(my-sy)/(2*Math.cos(45*Math.PI/180));
        let m=Math.cos(45*Math.PI/180)*r;
        cobj.arc(mx-sx>0?sx+m:sx-m,my-sy>0?sy+m:sy-m,r,0,2*Math.PI);
        cobj[this.type]();
    }
    poly(sx,sy,mx,my,n){
        n=this.side;
        let cobj=this.cobj;
        let r=Math.sqrt((mx-sx)*(mx-sx)+(my-sy)*(my-sy))/2;
        cobj.save();
        cobj.translate(sx,sy);
        let x=r*Math.cos(Math.PI/n);
        let y=r*Math.sin(Math.PI/n);
        cobj.beginPath();
        cobj.rotate(Math.PI/2)
        cobj.moveTo(x,-y);
        for(let i=0;i<n;i++){
            cobj.save();
            cobj.rotate(i*2*Math.PI/n);
            cobj.lineTo(x,y);
            cobj.restore();
        }
        cobj[this.type]();
        cobj.restore();
    }
}