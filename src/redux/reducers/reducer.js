import { ActionTypes } from "../contants/action-type";
const initialState = {
    products: [],
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:

            return {
                ...state,
                products: [...state.products,
                {
                    id: action.payload.id,
                    data: action.payload.data,
                }],
            };
        case ActionTypes.DELETE_TODO:

            return {
                ...state,
                products: state.products.filter((data, i) => i !== action.payload)
            }

        case ActionTypes.UPDATE_TODO:
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload;

                    } else {

                        return item;
                    }
                })
            };
        default:
            return state;
    }
};
