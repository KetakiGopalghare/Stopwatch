let hour=document.getElementById('hh')
let minute=document.getElementById('mm')
let second=document.getElementById('ss')
hh=0;
mm=0;
ss=0;
let stopInterval

function stopWatch()
{
    
    stopInterval=setInterval(()=>{
        ss++
        second.innerText=ss;
        if(ss==59)
        {
            mm++
            ss=1;
            minute.innerText=mm;
            if(mm==60){
                hh++
                mm=0
                hour.innerText=hh
            }
        }
    },100);
}

let starttime=document.getElementById('starttime');
starttime.addEventListener('click',stopWatch);

let stoptime=document.getElementById('stoptime')
stoptime.addEventListener('click',()=>{
    clearInterval(stopInterval);
})

let resetinterval

function resetbutton(){
    resetinterval=setInterval(()=>{
        clearInterval(stopInterval);
        ss=0
        second.innerText=ss
        mm=0
        minute.innerText=mm
        hh=0
        hour.innerText=hh
    },0)
}

let resetInterval=document.getElementById('resetInterval')
resetInterval.addEventListener('click',resetbutton)

starttime.addEventListener('click',()=>{
    clearInterval(resetinterval)
})