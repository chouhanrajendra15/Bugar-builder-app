import React, { Component } from 'react'
import Layout from './Components/Layout.js';
import BurgarBuilder from './Containers/BurgarBuilder/BurgarBuilder.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
      <BurgarBuilder/>
        </Layout>
      </div>
    );
  }
}