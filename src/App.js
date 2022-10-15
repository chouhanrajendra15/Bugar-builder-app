import React, { Component } from 'react'
// import Layout from '/Containers/Layout/Layout';
import Layout from './hoc/Layout/Layout.js';
import BurgarBuilder from './Containers/BurgarBuilder/BurgarBuilder.js';
import Checkout from './Containers/Checkout/Checkout.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div> <Router>
        <Layout>
         
          <Routes>
     <Route exact path="/"  element={<BurgarBuilder />}/>
     <Route exact path="/checkout" element={<Checkout />}/>
     </Routes>
     
       </Layout> </Router>
      </div>
    );
  }
}
