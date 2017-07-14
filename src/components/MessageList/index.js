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
            <span className="metadata"> @ {new Date(message.timestamp).toString()}</span>
          </div>
        </div>
      ))
    }
  </div>
)

export default MessageList
