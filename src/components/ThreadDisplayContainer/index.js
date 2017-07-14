import React from 'react'
import store from '../../store'
import Thread from '../Thread'

export default class ThreadDisplay extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    const { activeThreadId: threadId } = state
    const activeThread = state.threads.find(thread => thread.id === threadId)

    return (
      <Thread
        thread={activeThread}
        onMessageClick={(id) => (
          store.dispatch({
            type: 'DELETE_MESSAGE',
            id,
          })
        )}
        onMessageSubmit={(text) => (
            store.dispatch({
              type: 'ADD_MESSAGE',
              text,
              threadId,
            })
          )}
      />
    )
  }
}