import React, { Component } from 'react';
// import AAux from '../../hoc/AAux';
// import AAux from '../AAux/AAux/AAux.js';
import AAux from '../AAux/AAux.js';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer.js';

import classes from './Layout.module.css';




class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

sideDrawerToogleHandler = () => {
    this.setState( (prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer};
    });
}

    render() {
      return (
         <AAux>
<Toolbar DrawerToggleClicked={this.sideDrawerToogleHandler}/>
<SideDrawer 
 open = {this.state.showSideDrawer}
 closed = {this.sideDrawerClosedHandler}/>

<main className={classes.Content}>
    {this.props.children}
</main>
</AAux>
      )
    }
}

export default Layout;