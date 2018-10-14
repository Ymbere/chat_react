import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }

  sendMessage = (messageObject) => {
    const newMessageArray = this.state.messages.slice()
    newMessageArray.push(messageObject)
    this.setState({messages: newMessageArray})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">

          <ChatWindow
            userSender={users[0]}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
          />
          <ChatWindow
            userSender={users[1]}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
