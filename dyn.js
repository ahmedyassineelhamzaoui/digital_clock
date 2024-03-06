const hour=document.getElementById("hour");
const min=document.getElementById("minute");
const sec=document.getElementById("second");
const AP=document.getElementById("AP");


function update(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let amp="AM";
    if(h>12){
      amp="PM";
    }
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    AP.innerText=amp;
    setTimeout(() => {
        update();
    },1000);
}
update();

