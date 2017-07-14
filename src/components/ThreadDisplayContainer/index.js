import React from 'react'
import store from '../../store'
import MessageInput from '../MessageInput'
import Thread from '../Thread'

export default class ThreadDisplay extends React.Component {
  handleClick = (id) => {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      id,
    });
  };

  render() {
    const messages = this.props.thread.messages.map((message) => (
      <div
        className='comment'
        key={message.id}
        onClick={() => this.handleClick(message.id)}
      >
        <div className="text">
          {message.text}
          <span className="metadata"> @ {new Date(message.timestamp).toString()}</span>
        </div>
      </div>
    ))

    return (
      <div className='ui center aligned basic segment'>
        <div className='ui comments'>
          {messages}
        </div>
        <MessageInput threadId={this.props.thread.id} />
      </div>
    )
  }
}