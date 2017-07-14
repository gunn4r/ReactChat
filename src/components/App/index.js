import React from 'react'
import ThreadDisplay from '../ThreadDisplayContainer'
import ThreadTabs from '../ThreadTabsContainer'

export default class App extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <ThreadTabs />
        <ThreadDisplay />
      </div>
    );
  }
}
