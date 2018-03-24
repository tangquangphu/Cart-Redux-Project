import * as Types from './../constants/ActionType';

var data =JSON.parse(localStorage.getItem('localkey'));

var initialState = data ? data : [];

// thằng này làm nhiệm vụ khi click nào nút giỏ hàng thì xuất ra thông tin mua hàng
const cart = (state = initialState, action) => {
    var { product, quantity} = action;
    var index = -1; //không tìm thấy bằng -1
    switch(action.type) {
        //thêm vào giỏ
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if(index !== -1) {
                state[index].quantity += quantity;

            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('localkey', JSON.stringify(state));
            return [...state];
        //xóa giỏ
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('localkey', JSON.stringify(state));
            return [...state];
        //cập nhật giỏ
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('localkey', JSON.stringify(state));
            return [...state];
        default : return [...state];
    }
}
var findProductInCart = (cart, product) => {
    var index = -1;
    if( cart.length > 0) {
        for (var i = 0; i <cart.length; i++ ) {
            if( cart[i].product.id === product.id){
                index =i;
                break;
            }
        }
    }
    return index;
}
export default cart;