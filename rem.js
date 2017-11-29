(function(){
    var designWidth=750;
    var fontSize=100;
    function resize(){
        var width=document.documentElement.clientWidth;
        var bili=width/designWidth>1?1:width/designWidth;
        document.querySelector("html").style.fontSize=fontSize*bili+"px";
    }
    resize();
    window.onresize=resize;
})();
