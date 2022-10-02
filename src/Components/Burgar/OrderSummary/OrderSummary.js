import React, { Component } from 'react';
import AAux from '../../../hoc/AAux';
import Button from '../../UI/Button/Button';



// import AAux from '../../hoc/AAux';

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

render () {
    const ingredientSummary = Object.keys( this.props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
         <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
         <p>Continue  to Checkout?</p>
         <Button btnType="Danger" clicked= {this.props.purchaseCancelled}>CANCEL</Button>
         <Button btnType="Success" clicked= {this.props.purchaseContinued}>CONTINUE</Button>
           </AAux>
           );
}

} 

export default OrderSummary;