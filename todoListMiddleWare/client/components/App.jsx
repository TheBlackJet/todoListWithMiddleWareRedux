
import React, { Component } from 'react';
import InputField from './InputField.jsx';
import ItemList from './ItemList.jsx';


class App extends Component{


    render(){

        return (

            <div>
              <div className = "container">
                <div className="row">
                  <div className="col-xs-12">
                    <InputField store={this.props.store} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <ItemList />
                  </div>
                </div>
              </div>
            </div>

        );

    }


}

export default App;
