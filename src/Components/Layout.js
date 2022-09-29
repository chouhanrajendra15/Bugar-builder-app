import React, { Component } from 'react';
import AAux from '../hoc/AAux';

import classes from './Layout.module.css';

import Toolbar from './Navigation/Toolbar/Toolbar';

import SideDrawer from './Navigation/SideDrawer/SideDrawer';


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