import React, { Component } from 'react';

import * as Message from './../constants/Message';

class CartItem extends Component {

    render() {
        var {item} = this.props;
        // console.log(item);
        var {quantity} = item;
        console.log(quantity);
        
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label  className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                onClick= {()=> {this.onUpdateQuantity(item.product, item.quantity-1)} }
                        >
                            <a>—</a>
                        </label>
                        <label  className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                onClick= {()=> {this.onUpdateQuantity(item.product, item.quantity+1)} }
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" 
                            className="btn btn-sm btn-primary waves-effect waves-light" 
                            data-toggle="tooltip" 
                            data-placement="top"  title="" 
                            data-original-title="Remove item"
                            onClick= { () => {this.onDelete(item.product)}}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    //tính tổng giá giỏ hàng ( đơn giá nhân số lượng)
    showSubTotal =(price, quantity)=> {
        return price * quantity;
    }

    //xóa giỏ hàng
    onDelete(product){
        console.log(product);
        var { onDeleteProductInCart, onChangMessage } = this.props;
        onDeleteProductInCart(product);
        onChangMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    //cập nhật giỏ hàng
    onUpdateQuantity= (product, quantity) => {
        var {onUpdateProductInCart,onChangMessage} = this.props;
        if(quantity > 0 ){
            
            onUpdateProductInCart(product, quantity);
            onChangMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
    }
}

export default CartItem;
