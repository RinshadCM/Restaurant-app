// Data File

import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

// Create Reducer
const reducers=combineReducers({
    restaurantReducer:restaurantListReducer
})

// Create Middleware
const middleware=[thunk]

// Create Store
const store=createStore(reducers,applyMiddleware(...middleware)) //  ... is spread operator used to add two or more middlewares


export default store