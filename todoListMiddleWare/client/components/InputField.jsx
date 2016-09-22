import React , { Component } from 'react';


class InputField extends Component{


  submit(e){

      this.props.store.dispatch({type: 'FORM_SUBMIT', data: this.refs.inputForm.inp.value});

      e.preventDefault();

  }


    render (){


        return(
          <form className="" ref="inputForm" onSubmit={(e) => { this.submit(e); }}>
          <div>

              <div className="btn-group">

                  <input type="text" name="inp" className="btn" />
                  <button className="btn">Enter</button>

              </div>

          </div>
          </form>

        );

    }

}

export default InputField;
