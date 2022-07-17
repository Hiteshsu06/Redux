import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import { cartreducer2 } from "./reducer";
import { cartreducer3 } from "./reducer";


const rootred = combineReducers({
    cartreducer, cartreducer2,cartreducer3
});


export default rootred