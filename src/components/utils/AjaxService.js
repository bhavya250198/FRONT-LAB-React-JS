import axios from "axios";

export const AjaxService={
    //get method
    get:(url,params,headers)=>{
        return axios({
            method:"GET",
            url:url,
            headers: headers || {"content-type":"application/json"},
            params:params||{}
        })
    },
    //post method
    post:(url,data,headers)=>{
       return axios({
        method: "POST",
        url: url,
        headers: headers || { "content-type": "application/json" },
        data: data,
       }) 
    },
    //delete method
    delete:(url,headers)=>{
        return axios({
            method:"DELETE",
            url:url,
            headers: headers || { "content-type": "application/json" }
        })
    },
    //put method
    put:(url,data,headers)=>{
        return axios({
         method: "POST",
         url: url,
         headers: headers || { "content-type": "application/json" },
         data: data,
        }) 
        }
}