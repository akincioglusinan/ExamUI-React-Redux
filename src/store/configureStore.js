import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import examReducer from '../reducers/exam';
import message from '../reducers/message'
const configureStore = () => {
    const store = createStore(
        combineReducers({
          auth: authReducer,
          exam: examReducer,
          message
        }), applyMiddleware(thunk)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;
}

export default configureStore
