//import { createStore, applyMiddleware } from "redux";
//import { ping } from './anhancers/ping';
//export const store = createStore(rootReducer, applyMiddleware(ping));
import {rootReducer} from "../reducers";
import { createStore } from "redux";

export const store = createStore(rootReducer);