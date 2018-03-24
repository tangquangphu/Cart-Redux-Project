import React, { Component } from 'react';
//kết nối dữ liệu trên store
import { connect } from 'react-redux';
//kiểm tra kiểu dữ liệu 
import PropTypes from 'prop-types';

// truyền dữ liệu ra các cpn này
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

//import kiểu dữ liệu thông báo 
import * as Message from './../constants/Message';

import {actRemoveProductInCart, actChangeMessage ,actUpdateProductInCart} from './../actions/index';

class CartContainer extends Component {
    
    render() {
        var cart =this.props.cartkey;
        // console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showToTalAmount(cart)}
            </Cart>
        );
    }
    //truyền dữ liệu ra CartItem
    showCartItem =(cart)=> {
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        var {onDeleteProductInCart, onChangMessage, onUpdateProductInCart}= this.props;
        if( cart.length > 0) {
            result = cart.map((item, index)=> {
                return (
                    <CartItem   key = {index}
                                item = {item}
                                index = {index}

                                //dạng đặc biệt, nó chịu sự thay đổi của reducer
                                onDeleteProductInCart = {onDeleteProductInCart}
                                onChangMessage = {onChangMessage}
                                onUpdateProductInCart= {onUpdateProductInCart}
                    >
                    </CartItem>
                );
            });
        }
        return result;
    }
    //truyền dữ liệu ra ngoài CartResult để tính toán 
    showToTalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart}
            
                    ></CartResult>
        }
        return result;
    }
}

//kiểm tra kiểu dữ liệu trên state
CartContainer.propTypes = {
    cartkey : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventoty : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onChangMessage : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired,
}

//lấy dữ liệu trên store về ( cart.js )
const mapStateToProps = state => {
    return {
        cartkey : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
