import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartActions"

const initialState = {
    cart : []
}
export const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART :
            const newCart = [...state.cart, action.item]
            return {
                cart: newCart,
            }
            case REMOVE_FROM_CART :
                const remainingCart = state.cart.filter(item => item.id != action.id);
                return {
                    cart: remainingCart
                }

                default: return state;
    }

}