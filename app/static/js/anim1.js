window.addEventListener("load", mbox);
window.addEventListener("load", box1);
window.addEventListener("load", box2);
window.addEventListener("load", box3);
window.addEventListener("load", box4);
function mbox(){
    var elem=document.getElementById("mbox");
    var elem1=document.getElementById("mmbox");
    var baba=document.getElementById("baba");
    var baba1=document.getElementById("baba1");
    var w=screen.width;
    if(w<=1000){
        elem.style.display="none";
        baba.style.display="none"
        }
        else{
        baba1.style.display="none"
        elem1.style.display="none";

        }

}
function box1(){
    var elem=document.getElementById("box1");
    var elem1=document.getElementById("box11");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =   125 - 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem.style.left =  125 - 250*Math.sin((Math.PI*pos)/180)+ 'px';
        elem1.style.top =   125 - 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem1.style.left =  125 - 250*Math.sin((Math.PI*pos)/180)+ 'px';

        }
    }
}

function box2(){
    var elem=document.getElementById("box2");
    var elem1=document.getElementById("box22");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =   125 - 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem.style.left =  125 + 250*Math.cos((Math.PI*pos)/180)+ 'px';
        elem1.style.top =   125 - 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem1.style.left =  125 + 250*Math.cos((Math.PI*pos)/180)+ 'px';

        }
    }
}
function box3(){
    var elem=document.getElementById("box3");
    var elem1=document.getElementById("box33");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =   125 + 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem.style.left =  125 - 250*Math.cos((Math.PI*pos)/180)+ 'px';
        elem1.style.top =   125 + 250*Math.sin((Math.PI*pos)/180) + 'px';
        elem1.style.left =  125 - 250*Math.cos((Math.PI*pos)/180)+ 'px';

        }
    }
}
function box4(){
    var elem=document.getElementById("box4");
    var elem1=document.getElementById("box44");
    var pos=0;
    var id = setInterval(frame,50);
    function frame(){
        if(pos==-1){
            clearInterval(id);
        }
        else{
        pos++;

        elem.style.top =   125 + 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem.style.left =  125 + 250*Math.sin((Math.PI*pos)/180)+ 'px';
        elem1.style.top =   125 + 250*Math.cos((Math.PI*pos)/180) + 'px';
        elem1.style.left =  125 + 250*Math.sin((Math.PI*pos)/180)+ 'px';

        }
    }
}

function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};
