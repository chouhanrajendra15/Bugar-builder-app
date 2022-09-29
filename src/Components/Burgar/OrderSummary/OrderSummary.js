import React from 'react';
import AAux from '../../../hoc/AAux';
import Button from '../../UI/Button/Button';



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
     <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
     <p>Continue  to Checkout?</p>
     <Button btnType="Danger" clicked= {props.purchaseCancelled}>CANCEL</Button>
     <Button btnType="Success" clicked= {props.purchaseContinued}>CONTINUE</Button>
       </AAux>
    );


};

export default OrderSummary;