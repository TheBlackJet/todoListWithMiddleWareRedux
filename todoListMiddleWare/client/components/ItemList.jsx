import React , { Component } from 'react';
import { connect } from 'react-redux';


class ItemList extends Component{


    listRender(){

      if (this.props.list.length > 0){
        return this.props.list.map((item, index) => (
          <div key={index}>{item.text}</div>
        ));
      }

      return "";



    }

    render (){

        console.log(this.props);



        return(
          <div>
              {this.listRender()}
          </div>

        );

    }

}

//export default ItemList;


const mapStateToProps = (state) =>  {
  return {
    list: state.todoListAsyns
  };
}

export default connect(mapStateToProps)(ItemList);
