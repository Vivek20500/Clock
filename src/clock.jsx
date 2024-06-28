import React,{useState} from "react";
import Marking from "./marking";
import Small from "./small-marking";
function Watch(){
    var time,data,h,m,s;
    var hourAngle,minuteAngle,secondAngle;
  function changeTime(){
    var d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    var ampm="AM";
    if(h>12){
      ampm="PM";
      h=h-12;
    }
    // console.log(h)
    hourAngle=(360/12)*h;
    minuteAngle=(360/60)*m;
    secondAngle=(360/60)*s;

    data={hour:h,minute:m, second:s}
    time=`${h}:${m}:${s} ${ampm}`
    setTime1(time);
    document.querySelector('.digital').innerHTML=time
    document.querySelector(".hour").style.rotate=`${hourAngle}deg`;
    document.querySelector(".minute").style.rotate=`${minuteAngle}deg`;
    document.querySelector(".second").style.rotate=`${secondAngle}deg`;
  }
  const [time1,setTime1]=useState();
  setInterval(()=>{changeTime()}, 1000);
    return(
        <div key={1}>
            <div className="digital text-3xl text-center">{time?time1:`00:00:00`}</div>
            
            <div className="marking  z-20">
                <Small/>
            </div>
            <div className="marking  z-20">
                <Marking/>
            </div>
            <div className="clock text-white">
                <div className="hour hands h-1 w-16 sm:w-28 bg-red-600"></div>
                <div className="minute hands h-1 w-24 sm:w-36 bg-blue-600"></div>
                <div className="second hands h-1 w-32 sm:w-44 bg-green-300"></div>
            </div>
        </div>
    )
}
export default Watch;