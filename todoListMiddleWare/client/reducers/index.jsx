import { combineReducers } from 'redux';
import { todoListAsynsReducer } from './todoListAsynsReducer.jsx';
import { weatherAsynsReducer } from './weatherApiReducer.jsx';


export const rootReducer =  combineReducers({

      todoListAsyns: todoListAsynsReducer,
      weatherResult: weatherAsynsReducer


});
