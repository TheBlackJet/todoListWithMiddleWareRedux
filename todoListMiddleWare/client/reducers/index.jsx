import { combineReducers } from 'redux';
import { todoListAsynsReducer } from './todoListAsynsReducer.jsx';


export const rootReducer =  combineReducers({

      todoListAsyns: todoListAsynsReducer

});
