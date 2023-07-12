import Base_url from '../service/Base_url'
import { CommonRequest } from './CommonRequest'

export const userRegister=async(body)=>{
    return await CommonRequest("POST",`${Base_url}/register`,body)

}

export const userLogin=async(body)=>{
    return await CommonRequest("POST",`${Base_url}/login`,body)
}