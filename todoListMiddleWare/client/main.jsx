import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import rootReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';
import { rootReducer } from './reducers/index.jsx';

//import { Images } from '../import/api/images.js

const openWeatherApiKey = "8e66bb9ab01bb3f28205c83f9034db62";

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

Meteor.startup(() => {


  render(
		<div>
    <Provider store={store}>
	  		<App store={store} />
    </Provider>
		</div>
	  ,

	  document.getElementById('root')

	)




});
