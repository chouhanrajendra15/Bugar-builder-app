import React from "react";

import classes from './Burgar.module.css';
import BurgarIngredient from "./BurgarIngredient/BurgarIngredient";

const Burgar = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgarIngredient key ={igKey + i} type= {igKey} />;
              });
    });
        
    return (
        <div className={classes.Burgar}>
            <BurgarIngredient type="bread-top" />
            {transformedIngredients}
            <BurgarIngredient type="bread-bottom" />

        </div>
    );
};

export default Burgar;