import React, { useState } from 'react';
import './switch.css';

const Switch = ({isOn,toggle}) => {
    
    var [color, setcolor] = useState('#191919');
  
    console.log(isOn);
   var buttonclick=()=>{
    isOn==='ON'?setcolor("#FFF323"):setcolor("#191919");
    toggle()
   }

    return (
        <div className='container'>
            <div className="buttonl">
                <button style={{background:color}}> </button>
              
            </div>
            <div className="buttons">
                <button onClick={buttonclick}  >{isOn} </button>
                
            </div>
            
        </div>
    );
};

export default Switch;