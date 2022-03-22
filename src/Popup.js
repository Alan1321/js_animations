import React, {useState} from "react";
import './Popup.css'

const Popup = (props) =>{

    const val = 'left';
    const color = 'black';
    const [active, setActive] = useState(true);

    const clickHandler = () =>{
        setActive(false);
    }

    return(
        <>
        {active &&
            <div className="modal">
                <div style={{color:'white'}}>{props.value}</div>
                <div><button onClick={clickHandler}>&#10006;</button></div>
            </div>
        }
        </>
    )
}

export default Popup;