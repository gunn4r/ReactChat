import React from 'react'

const MessageList = (props) => (
  <div className="ui comments">
    {
      props.messages.map((message, index) => (
        <div
          className="comment"
          key={index}
          onClick={() => props.onClick(message.id)}
        >
          <div className="text">
            {message.text}
            <span className="metadata"> @ {message.timestamp}</span>
          </div>
        </div>
      ))
    }
  </div>
)

export default MessageList
// store.dispatch({
//       type: 'ADD_MESSAGE',
//       text: this.state.value,
//       threadId: this.props.threadId,
//     });