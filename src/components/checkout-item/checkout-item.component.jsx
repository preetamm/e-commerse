import React from 'react'

import './checkout-item.styles.scss'
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'
const checkoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {


    const { name, imageUrl, price, quantity } = cartItem
    return (

        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> removeItem(cartItem)}>&#10094;</div>
                 <span className="value">{quantity}</span>
                 <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem : item => dispatch(removeItem(item)),
    addItem : item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(checkoutItem);