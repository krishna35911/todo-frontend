import { backendurl } from "./backendurl"
import { headerapi } from "./headerapi"

export const addtodo=async(body)=>
{
    return await headerapi('POST',`${backendurl}/add`,body,"")
}

export const gettodo=async()=>
{
    return await headerapi('GET',`${backendurl}/gettodo`)
}