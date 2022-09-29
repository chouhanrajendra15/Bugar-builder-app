import React from 'react';
import AAux from '../hoc/AAux';

import classes from './Layout.module.css';

import Toolbar from './Navigation/Toolbar/Toolbar';

import SideDrawer from './Navigation/SideDrawer/SideDrawer';


const Layout = (props) =>(
    <AAux>
<Toolbar />
<SideDrawer />

<main className={classes.Content}>
    {props.children}
</main>
</AAux>
);

export default Layout;