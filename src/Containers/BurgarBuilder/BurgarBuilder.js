import React, { Component } from 'react';
import BuildControls from '../../Components/Burgar/BuildControls/BuildControls';
import Burgar from '../../Components/Burgar/Burgar'

import AAux from '../../hoc/AAux'



class BurgarBuilder extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: {
      salad : 0,
      bacon : 0,
      cheese : 0,
      meat : 0
    }

  }

  render() {
    return (
     <AAux> 
       <Burgar ingredients = { this.state.ingredients}  />
     <BuildControls />
      </AAux>
    );
  }
}

export default BurgarBuilder