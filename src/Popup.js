import React, {useState, useEffect} from "react";
import './Popup.css'


const Popups = () =>{

    const arr = ['im popup1','im popup2','im popup3','im popup4','im popup5']
    console.log('hello world')

    return(
    <div className="modal-outer-container">
        {arr.map((val)=><Popup value={val}/>)}
    </div>)
}

export default Popups;


const Popup = (props) =>{

    const val = 'left';
    const color = 'black';
    const [active, setActive] = useState(true);


    setTimeout(() => {
        setActive(false);
    }, 5000);

    const clickHandler = () =>{
        setActive(false);
    }

    return(
        <>
            {active &&
                <div className="modal-active" style={{backgroundColor:'red'}}>
                    <div style={{color:'white'}}>{props.value}</div>
                    <div><button onClick={clickHandler}>&#10006;</button></div>
                </div>
            }
        </>
    )
}

//export default Popup;