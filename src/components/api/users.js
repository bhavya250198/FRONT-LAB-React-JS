import {AjaxService} from "../utils/AjaxService";
import {dataURL} from "../constants/apibaseurl";

// to fetch the necessary records in the screen

export const getUserDetails =()=>{
    return AjaxService.get(
        dataURL+"/users",

    ).then(
        //after the success then is called 
        (res)=>res,
        (error)=>{
            throw error.response.data
        }
    )
}
