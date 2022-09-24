import React from 'react';
import AAux from '../hoc/AAux';

import classes from './Layout.module.css';


const Layout = (props) =>(
    <AAux>
<div>Toolbar, SideDrawer, Backdrop</div>

<main className={classes.Content}>
    {props.children}
</main>
</AAux>
);

export default Layout;