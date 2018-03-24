import React, { Component } from 'react';
//kết nối dữ liệu trên store
import { connect } from 'react-redux';

//import để truyền dữ liệu đến Products và Product
import Products from './../components/Products';
import Product from './../components/Product';

//kiểm tra kiểu dữ liệu 
import PropTypes from 'prop-types';

import {actAddToCart, actChangeMessage } from './../actions/index';


// thằng này làm nhiệm vụ chính là lấy dữ liệu trên store về và truyền cho products
class ProductsContainer extends Component {
    
    render() {
        var { productsKey } = this.props;
        // console.log(productsKey);
        return (
            //truyền dữ liệu ra ngoài Products
            <Products>
                {this.showProduct(productsKey)}
            </Products>
        );
    }

    showProduct(productsprm){
        var result = 'Không có sản phẩm';
        var {onAddToCart,onChangeMessage} = this.props;
        // console.log(onAddToCart);
        
        // console.log(productsprm);
        //dùng vòng lặp để xuất từng object 
        if(productsprm.length > 0 ){
            result = productsprm.map((product, index) =>{
                return <Product key= {index} 
                                productsK = {product}
                                onAddToCart = {onAddToCart}
                                onChangeMessage = {onChangeMessage}
                        ></Product>
            });
        }
        return result;
    }
}

//kiểm tra kiễu dữ liệu
ProductsContainer.propTypes = {
    productsKey : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventoty : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart :PropTypes.func.isRequired,
    onChangeMessage : PropTypes.func.isRequired
}


//lấy dữ liệu store về (products.js)
const mapStateToProps = state => {
    return {
        productsKey : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
