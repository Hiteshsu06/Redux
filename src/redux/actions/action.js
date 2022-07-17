export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}
export const DEL = (id) => {
    return {
        type: "Delete",
        payload: id
    }
}
export const INC = (counter) => {
    return {
        type: "Increment",
        payload: counter
    }
}
export const DEC = (counter) => {
    return {
        type: "Decrement",
        payload: counter
    }
}
export const ADDING = (quantity) => {
    return {
        type: "Addition",
        payload: quantity
    }
}
