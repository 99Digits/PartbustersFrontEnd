import axios from "axios";
export const CommonRequest=async(methods,url,body,header)=>{
    let config={
        method:methods,
        url,
        data:body,
        headers:header?header:{"content-type":"application/json"}
    }
    return axios(config).then((data)=>{
        return data
    }).catch((err)=>{
        return err
    })
}