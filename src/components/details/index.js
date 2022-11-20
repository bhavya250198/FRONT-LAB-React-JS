/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from "react";
import { getExpenseDetails } from "../api/expenseDetails";
import ExpenseTable from "./expenseTable/expenseTable";
import Heading from "./heading";
import TotalDetails from "./total";

function ExpenseDetails(){
    const[expenseData,setExpenseData] = useState([]);
    const [expenseDataByName,setExpenseDataByName]= useState([]);
       const getExpenseData = async ()=>{
                try{
                    //call your service
                    const response = await getExpenseDetails();
                        //filter the names with unique values 
                        //filter the names 
                        let arrayFilter= response.data.filter((item,index)=>
                        response.data.findIndex(obj => obj.name === item.name) === index)
                        console.log("arrayFilter",arrayFilter);
                      let arrayExpenses=[]
                        for(var i =0;i<arrayFilter.length;i++)
                            {   
                                let name = arrayFilter[i].name;
                                let price = 0;
                                let priceDetails=0;
                                for( var j =i;j<response.data.length;j++)
                                    {
                                        
                                        if(response.data[j].name === name)
                                            {
                                                priceDetails+=response.data[j].price;
                                            }
                                           
                                    }
                                    price+=priceDetails;
                                    let obj={
                                        name:name,
                                        price:price
                                    }
                                    arrayExpenses.push(obj);
                            }
                            console.log(arrayExpenses);
                        if(response.data.length > expenseData.length)
                        {
                        setExpenseData([...response.data]);
                        setExpenseDataByName([...arrayExpenses]);
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
            <div>
                <TotalDetails details={expenseData} detailsByName={expenseDataByName}/>
            </div>
        </div>
    )
}
export default ExpenseDetails;