// single accodrian
import data from "./data";
import { useState } from "react";
import './styles.css';

//multiple accordian



export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentID){
        setSelected(getCurrentID === selected ? null : getCurrentID)
    }

    function handleMultiSelection(getCurrentID){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentID)        
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(copyMultiple)
    }

    console.log(selected, multiple);

    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
            Enable Multi Selection
        </button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div className="item"> 
                    <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div> 
                    {
                        enableMultiSelection ?
                        multiple.indexOf(dataItem.id) !== -1 &&
                        <div className="contect">{dataItem.answer}</div> :
                        selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                    }
                    {/* {
                        selected === dataItem.id ||
                        multiple.indedxOf(dataItem.id) !== -1 ? 
                        (<div className="content"> {dataItem.answer} </div>)
                        : null
                    } */}
                </div>)
                : <div>no data found!</div>
            }
        </div>
         </div>
}