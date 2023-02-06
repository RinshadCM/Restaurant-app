// Data File

import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Create Reducer
const reducers=combineReducers({

})

// Create Middleware
const middleware=[thunk]

// Create Store
const store=createStore(reducers,applyMiddleware(...middleware)) //  ... is spread operator used to add two or more middlewares


export default store