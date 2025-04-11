import { thunk } from "redux-thunk";
import { applyMiddleware,  createStore } from "redux";
import reducers from  "./reducers/index";
const store = createStore(
    reducers, {}, applyMiddleware(thunk)
)

export default store;