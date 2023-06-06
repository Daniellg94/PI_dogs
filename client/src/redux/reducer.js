import { DETDOGS, GETDOGS } from "./actions_type";



const initialState ={
    getDogs:[],
    detDogs:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETDOGS:
            console.log(action)
            return{...state,getDogs:action.payload}
        
        case DETDOGS:
            return{...state,detDogs: action.payload}
    
        default:
            break;
    }

}

export default reducer