import { createStore } from "redux";
import reducerFn from "../Reducer/Reducer";

const store = createStore(reducerFn);

export default store;