import {INCREMENT, DECREMENT, RESET} from '../action/counterActions'
const initialState = {
    count: 10
}

export const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT :
            return{
                count: state.count + 1
            }
        case DECREMENT : 
            return {
                count : state.count -1
            }
        case RESET :
            return {
                count: 0
            }
        default: return state; 
    }

}