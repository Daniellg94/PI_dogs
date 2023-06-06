import { DETDOGS, GETDOGS } from "./actions_type"
import axios from "axios"

const URL = "http://localhost:3001/dogs"

export const getdogs = () =>{

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
}

export const detdogs = (id) =>{
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