import { ActionTypes } from "../contants/action-type";
export const addTodo = (data) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        },
    }
};
export const deleteTodo = (id) => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: id,
    }
};
export const updateTodo = (id, data) => {
    return {
        type: ActionTypes.UPDATE_TODO,
        payload: {
            id: id,
            data: data,
        },
    }
};

// export const viewList = (id, data) => {
//     return {
//         type: ActionTypes.VIEWLIST,
//         payload: {
//             id: id,
//             data: data,
//         },
//     }
// };