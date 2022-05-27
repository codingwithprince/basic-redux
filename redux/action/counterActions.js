export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = "RESET";

export const incrementValue = () =>{
    return{
        type: INCREMENT,
    }
}

export const decrementValue = () =>{
    return{
        type: DECREMENT,
    }
}

export const resetValue = () =>{
    return{
        type: RESET,
    }
}

