import React, { Component } from 'react';
//kết nối dữ liệu trên store
import { connect } from 'react-redux';
//kiểm tra kiểu dữ liệu 
import PropTypes from 'prop-types';

import Message from './../components/Message';


class MessageContainer extends Component {
    
    render() {
        var message = this.props.messagekey;
        console.log(message);
        
        return (
            <Message messagek= {message}></Message>
        );
    }
    
}

MessageContainer.propTypes = {
    messagekey : PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        messagekey : state.message
    }
}


export default connect(mapStateToProps,null)(MessageContainer);
