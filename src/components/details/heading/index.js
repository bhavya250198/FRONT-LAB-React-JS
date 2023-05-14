import React,{useState} from "react";
import {Button} from "antd";
import "./styles.scss";
import 'antd/dist/antd.css';
import ModalDetails from "../forms/modal";

function Heading({addDetailsParent}){
    const [showForm,setShowForm] = useState(false);
    const addRecord =()=>{
        debugger;
        setShowForm(prevForm=> !prevForm);
    }
    //cancelling a record
    const hideModal =()=>{
        setShowForm(false);
    }
   const addDetails=(values)=>{
    console.log("values",values);
    addDetailsParent(values);
   }
    
    return(
        <div id="heading">
            <h2>Expense Details</h2>
                <Button className="add" onClick={()=>{addRecord()}}>Add</Button>
                {showForm && 
                
                    <ModalDetails sendValues={addDetails} visibleForm={showForm} closeForm={hideModal}/>
                }
        </div>
    )
}
export default Heading;