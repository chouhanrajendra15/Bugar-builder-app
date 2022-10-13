import React, { Component } from 'react'
// import Layout from '/Containers/Layout/Layout';
import Layout from './hoc/Layout/Layout.js';
import BurgarBuilder from './Containers/BurgarBuilder/BurgarBuilder.js';
import Checkout from './Containers/Checkout/Checkout.js';


export default class App extends Component {
//   state = {
//      show: true
//   };

//  componentDidMount () {
//   setTimeout(()=> {
//     this.setState({show: false});
//   },5000);
//  }

  render() {
    return (
      <div>
        <Layout>
     < BurgarBuilder/> 
     <Checkout />
        </Layout>
      </div>
    );
  }
}