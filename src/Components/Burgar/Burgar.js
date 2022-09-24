import React from "react";

import classes from './Burgar.module.css';
import BurgarIngredient from "./BurgarIngredient/BurgarIngredient";

const Burgar = (props) => {
    let  transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgarIngredient key ={igKey + i} type= {igKey} />;
              } );
    } ) 

   .reduce((arr , el) => {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0){
         transformedIngredients = <p>Please start ingredient !! </p>;
    }
    
    // console.log(transformedIngredients);
        
    return (
        <div className={classes.Burgar}>
            <BurgarIngredient type="bread-top" />
            {transformedIngredients}
            <BurgarIngredient type="bread-bottom" />

        </div>
    );
    };

export default Burgar;