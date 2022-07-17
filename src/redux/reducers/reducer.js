const INIT_STATE = {
    carts: []
};

export const cartreducer2 = (state = 0, action) => {

if(action.type==="Increment"){
    return state + action.payload
}
else if(action.type==="Decrement"){
    return state - action.payload
}
else{return state;}
}

export const cartreducer3 = (state = 0, action) => {

    if(action.type==="Addition"){
        return state + action.payload
    }
    else{return state;}
    }




export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case "ADD_CART":

            return {
            ...state,
            carts:[...state.carts , action.payload]
            }

        case "Delete":
            const data =state.carts.filter((el)=>el.id !==action.payload)

            return{
                ...state,
                carts:data
            }
default: return state
}
}