import React from 'react'
import { connect } from 'react-redux'
import { deleteMessage, addMessage, openThread } from './actions'
import Thread from '../Thread'
import Tabs from '../Tabs'

class App extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <Tabs
          tabs={this.props.tabs}
          openThread={this.props.openThread}
        />
        <Thread
          thread={this.props.thread}
          onMessageClick={this.props.onMessageClick}
          onMessageSubmit={this.props.onMessageSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const tabs = state.threads.map(t => (
    {
      title: t.title,
      active: t.id === state.activeThreadId,
      id: t.id,
    }
  ))

  return {
    thread: state.threads.find(
      t => t.id === state.activeThreadId
    ),
    tabs,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    onMessageClick: (id) => dispatch(deleteMessage(id)),
    openThread: (id) => dispatch(openThread(id)),
    dispatch,
  }
)

const mergeProps = (stateProps, dispatchProps) => (
  {
    ...stateProps,
    ...dispatchProps,
    onMessageSubmit: (text) => dispatchProps.dispatch(addMessage(text, stateProps.thread.id)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)
