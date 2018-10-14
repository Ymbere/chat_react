import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatWindow = props => {

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{props.userSender.username}</div>
            <MessageList
                messages={props.messages}
                userSender={props.userSender}
            />
            <ChatInput
                userSender={props.userSender}
                sendMessage={props.sendMessage}
            />
        </div>
    );

}

ChatWindow.propTypes = {
    userSender: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired,
}
export default ChatWindow;