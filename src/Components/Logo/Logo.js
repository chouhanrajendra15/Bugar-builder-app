import React from 'react';

// import burgerLogo from '../../assets/images/burger-logo.png';

import burgerLogo from '../../assets/images/133 burger-logo.png'

import classes from './Logo.module.css';

const Logo = (props) => (
<div className={classes.Logo}>
    <img src={burgerLogo} alt="MYBurger" />
</div>
);

export default Logo;