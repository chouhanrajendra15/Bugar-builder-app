import React from 'react';
import AAux from '../../../hoc/AAux';

// import AAux from '../../hoc/AAux';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys( props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <AAux >
    <h3>Your Order</h3>
    <p> A delicious burgar with the following ingredients:</p>

     <ul>
     {ingredientSummary}
     </ul>
     <p>Continue  to Checkout?</p>
       </AAux>
    );


};

export default OrderSummary;