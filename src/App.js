import React, { Component } from 'react'
// import Layout from '/Containers/Layout/Layout';
import Layout from './hoc/Layout/Layout.js';
import BurgarBuilder from './Containers/BurgarBuilder/BurgarBuilder.js';


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
        </Layout>
      </div>
    );
  }
}