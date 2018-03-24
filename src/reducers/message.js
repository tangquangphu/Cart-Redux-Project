import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType';

var initialState = Message.MSG_WELCOME;

// thằng này làm nhiệm vụ khi click nào nút giỏ hàng thì xuất ra thông tin mua hàng
const message = (state = initialState, action) => {
    
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
        console.log(action);
        
            return action.message;

        default : return state;
    }
}

export default message;