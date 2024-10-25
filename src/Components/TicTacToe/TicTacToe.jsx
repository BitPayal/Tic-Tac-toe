import React,{useRef, useState} from 'react'
import './TicTacToe.css'
import circle_icon from '../circle.png'
import cross_icon from '../cross.png'

let data=["","","","","","","","",""];

const TicTacToe = () => {
  let [count,setCount]=useState(0);
  let [lock,setLock]=useState(false);
  let titleRef=useRef(null);

  let box0=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);

  const box_array=[box0,box1,box2,box3,box4,box5,box6,box7,box8];
  
  const reset=()=>{
    setCount(0);
    setLock(false);
    data=["","","","","","","","",""];
    titleRef.current.innerHTML=`Tic Tac Toe In <span>React</span>`
    box_array.forEach((e)=>{
      e.current.innerHTML="";
    });
  };
const win =(d)=>{
    if(d==="x"){
     titleRef.current.innerHTML=`Congratulations:<img src=${cross_icon} alt="" />`
    }
    else{
      titleRef.current.innerHTML=`Congratulations:<img src=${circle_icon} alt="" />`
    }
   setLock(true);
}
  const checkwin=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=""){
           win(data[0]);
    }
    else if(data[3]===data[4]&&data[5]===data[4]&&data[5]!=""){
      win(data[3]);
    }
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=""){
      win(data[6]);
    }
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=""){
      win(data[0]);
    }
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=""){
      win(data[1]);
    }
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=""){
      win(data[2]);
    }
    else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=""){
      win(data[0]);
    }
    else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=""){
      win(data[2]);
    }
  }
  const ToggleEvent=(e,num)=>{
    if(lock)return 0;
    if(count&1){
      e.target.innerHTML=`<img src="${circle_icon}"alt="" />`;
         data[num]="o";
         setCount(++count);
    }
    else{
      e.target.innerHTML=`<img src="${cross_icon}"alt="" />`;
      data[num]="x";
      setCount(++count);
    }
    checkwin();
  };
  return (
    <div className="container">
      <h2 className="title" ref={titleRef}>Tic-Tac-Toe <span>InReact</span></h2>
      <div className="border">
        <div className="row1">
          <div className="boxes" ref={box0}onClick={(e)=>{ToggleEvent(e,0)}}></div>
          <div className="boxes" ref={box1} onClick={(e)=>{ToggleEvent(e,1)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{ToggleEvent(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box3} onClick={(e)=>{ToggleEvent(e,3)}}></div>
          <div className="boxes" ref={box4} onClick={(e)=>{ToggleEvent(e,4)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{ToggleEvent(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box6} onClick={(e)=>{ToggleEvent(e,6)}}></div>
          <div className="boxes" ref={box7} onClick={(e)=>{ToggleEvent(e,7)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{ToggleEvent(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
};

export default TicTacToe
