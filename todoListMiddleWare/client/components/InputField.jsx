import React , { Component } from 'react';


class InputField extends Component{

    render (){


        return(
          <div>
              <div className="btn-group">

                  <input type="text" className="btn" />
                  <button className="btn">Enter</button>

              </div>
          </div>

        );

    }

}

export default InputField;
