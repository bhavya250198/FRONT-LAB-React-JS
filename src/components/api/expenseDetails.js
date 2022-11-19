import {AjaxService} from "../utils/AjaxService";
import {dataURL} from "../constants/apibaseurl";

// to fetch the necessary records in the screen

export const getExpenseDetails =()=>{
    return AjaxService.get(
        dataURL+"/data",

    ).then(
        //after the success then is called 
        (res)=>res,
        (error)=>{
            throw error.response.data
        }
    )
}

//add an expense record

export const addExpenses =(queryParam)=>{
    return   AjaxService.post(
        dataURL+"/data",
        JSON.stringify(queryParam)       
    ).then(
        (res)=>res,
        (error) => {
            throw error.response.data;
        }
    )
}