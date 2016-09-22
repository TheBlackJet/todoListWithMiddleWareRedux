import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//import rootReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';

//import { Images } from '../import/api/images.js';


Meteor.startup(() => {


  render(
		<div>
	  		<App />
		</div>
	  ,

	  document.getElementById('root')

	)




});
