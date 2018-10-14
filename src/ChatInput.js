import React from 'react';
import PropTypes from 'prop-types';

class ChatInput extends React.Component {
    state = {
        message: '',
    }

    isDisabled = () => {
        if (this.state.message === ''){return true}
    };

    hangleOnChange = event => {
        this.setState(({message: event.target.value}))
        this.isDisabled()
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.sendMessage(this.createObject())
        this.setState({message: ''})
    }

    createObject = () => {
        const messageObject = {
            username: this.props.userSender.username,
            text: this.state.message,
        }

        return messageObject
    }

    render () {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleOnSubmit}>
                    <input
                        type="text" className="form-control"
                        placeholder="Enter your message..."
                        value={this.state.message}
                        onChange={this.hangleOnChange}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

ChatInput.propTypes = {
    userSender: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
}
export default ChatInput;