import { DELETE, DETDOGS, FILT_API, FILT_DOGS, GETDOGS, GET_TEMP, ORDER_DOG, ORDER_WE, SEARCH_DOG } from "./actions_type"
import axios from "axios"

const URL = "https://daniel-pi-dogs.onrender.com/dogs"

let variable = true

export const getdogs = () =>{

    if (variable=== true)
    return async (dispatch) =>{
        const apiData = await axios(URL)
        const data = apiData.data
        return dispatch(
            {
                type:GETDOGS,
                payload:data
            }
        )
    }
    else{
        variable = true
        return{
            type:"default",
        }
    }
}

export const detdogs = (id) =>{
    if(id===undefined) return {type:DETDOGS, payload:[]}
    return async (dispatch) =>{
        const apiData =await axios(`${URL}/${id}`)
        const data = apiData.data
        return dispatch(
            {
                type:DETDOGS,
                payload:data
            }
        )
    }
}

export const Searchdogs = (name) => {
    
    return async(dispatch) =>{
        try {
            variable = false
            const search = await axios (`${URL}/name?name=${name}`)
            const data = search.data
            return dispatch(
                {
                    type:SEARCH_DOG,
                    payload:data
                }
            )
            
        } catch (error) {
            console.log("problemas en el search")
        }
    }
}

export const getTemp = () => {

    return async(dispatch) =>{
        const temps = await axios (`https://daniel-pi-dogs.onrender.com/temperaments`)
        const data= temps.data
        return dispatch(
            {
                type:GET_TEMP,
                payload:data
            }
        )
    }
}


export const orderDog= (order) =>{
    return {type:ORDER_DOG, payload:order}
}

export const orderWeight = (order) =>{
    return {type: ORDER_WE, payload:order}
}

export const filtDogs = (filter) =>{
    return {type:FILT_DOGS, payload:filter}
}

export const filtapi = (filter) =>{
    return {type:FILT_API, payload:filter}
}

export const deleter = (id) =>{
    return {type:DELETE, payload:id}
}
