import { createStore } from "redux";
import dataReducer from "./reducer";

let store = createStore(dataReducer)
export default store