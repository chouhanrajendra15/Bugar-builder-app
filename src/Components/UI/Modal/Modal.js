import React, { Component } from "react";

import AAux from "../../../hoc/AAux/AAux";

import Backdrop from "../Backdrop/Backdrop";

import classes from './Modal.module.css'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children ;        
    }

    componentDidUpdate () {
        console.log('[Modal] WillUpdate');
        // componentWlllUpdate has been renamed to componentDidUpdate
    }

    render() {
        return(<AAux>
    <Backdrop  show = {this.props.show} clicked={this.props.modalClosed} />
<div
 className={classes.Modal}
 style={{ 
    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: this.props.show ? '1' : '0'
 }}
>
    {this.props.children}
</div>
</AAux>
)
    }
} 

export default Modal;