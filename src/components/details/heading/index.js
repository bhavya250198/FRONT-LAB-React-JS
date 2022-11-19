import React,{useState} from "react";
import {Button} from "antd";
import "./styles.scss";
import 'antd/dist/antd.css';
import ModalDetails from "../forms/modal";

function Heading(){
    const [showForm,setShowForm] = useState(false);
    const addRecord =()=>{
    
        setShowForm(true);
    }
    //cancelling a record
    const hideModal =()=>{
        setShowForm(false);
    }
   
    
    return(
        <div id="heading">
            <h2>Expense Details</h2>
                <Button className="add" onClick={()=>{addRecord()}}>Add</Button>
                {showForm && 
                
                    <ModalDetails visibleForm={showForm} closeForm={hideModal}/>
                }
        </div>
    )
}
export default Heading;