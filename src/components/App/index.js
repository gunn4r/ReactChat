import React from 'react'
import store from '../../store'
import ThreadDisplay from '../ThreadDisplayContainer'
import ThreadTabs from '../ThreadTabsContainer'

export default class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    const { activeThreadId, threads } = state
    const activeThread = threads.find((t) => t.id === activeThreadId)
    const tabs = threads.map(t => (
      {
        title: t.title,
        id: t.id,
        active: t.id === activeThreadId,
      }
    ))

    return (
      <div className="ui segment">
        <ThreadTabs tabs={tabs} />
        <ThreadDisplay thread={activeThread} />
      </div>
    );
  }
}
