/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";
import { getExpenseDetails } from "../api/expenseDetails";
import ExpenseTable from "./expenseTable/expenseTable";
import Heading from "./heading";

function ExpenseDetails(){
    const[expenseData,setExpenseData] = useState([]);
       const getExpenseData = async ()=>{
                try{
                    //call your service
                    const response = await getExpenseDetails();
                        console.log("response.data.length",response.data.length);
                        console.log("expens",expenseData.length);
                        if(response.data.length > expenseData.length)
                        {
                        setExpenseData([...response.data]);
                        }
                }catch(err){

                }
       } 
       //use Effect
       useEffect(()=>{
        getExpenseData();
    },[getExpenseData])
    
    return(
        <div id="expenseDetails">
            <Heading />
            <div>
               <ExpenseTable details={expenseData} />
            </div>
        </div>
    )
}
export default ExpenseDetails;