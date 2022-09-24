import React, { Component } from 'react';
import Burgar from '../../Components/Burgar/Burgar'

import AAux from '../../hoc/AAux'



class BurgarBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad : 1,
      bacon : 1,
      cheese : 2,
      meat : 2
    }

  }

  render() {
    return (
     <AAux> 
       <Burgar ingredients = { this.state.ingredients}  />
     <div>Burgar Controls </div> 
      </AAux>
    );
  }
}

export default BurgarBuilder