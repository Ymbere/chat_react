import React from 'react';
import PropTypes from 'prop-types';

const MessageList = props => {
    const {messages, userSender} = props
    return (
        <ul className="message-list">
            {messages.map((message, index) => (
                <li
                    key={index}
                    className={
                    message.username === userSender.username ? 'message sender' : 'message recipient'
                    }
                >
                    <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
        </ul>
    );

}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    userSender: PropTypes.object.isRequired,
}

export default MessageList;