window.addEventListener("load", box1);
window.addEventListener("load", box2);
window.addEventListener("load", box3);
window.addEventListener("load", box4);
function preventBack(){window.history.forward();}
setTimeout("preventBack()", 0);
window.onunload=function(){null};
function box1(){

    var elem=document.getElementById("box1");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =   250 - 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem.style.left =  250 - 250*Math.sin((Math.PI*pos)/180)+ 'px';

        }
    }
}
function box2(){
    var elem=document.getElementById("box2");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =  150+ 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem.style.left = 250+ 250*Math.sin((Math.PI*pos)/180)+ 'px';

        }
    }
}
function box3(){
    var elem=document.getElementById("box3");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =  50+ 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem.style.left = 250- 250*Math.cos((Math.PI*pos)/180)+ 'px';

        }
    }
}
function box4(){
    var elem=document.getElementById("box4");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =  -50- 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem.style.left = 250+ 250*Math.cos((Math.PI*pos)/180)+ 'px';

        }
    }
}

