import React from 'react'
import store from '../../store'
import Tabs from '../Tabs'

export default class ThreadTabs extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const state = store.getState()
    const tabs = state.threads.map(t => (
      {
        title: t.title,
        active: t.id === state.activeThreadId,
        id: t.id,
      }
    ))

    return (
        <Tabs
          tabs={tabs}
          onClick={
            (id) => {
              store.dispatch({
                type: 'OPEN_THREAD',
                id
              })
            }
          }
        />
    )
  }
}