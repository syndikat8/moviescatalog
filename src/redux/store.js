import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import movies from './reducers/movies-reducer';
import search from "./reducers/search-reducer";

const rootReducer = combineReducers({
  movies,
  search
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
