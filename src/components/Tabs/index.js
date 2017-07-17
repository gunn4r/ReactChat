import React from 'react'

const Tabs = (props) => (
  <div className='ui top attached tabular menu'>
    {
      props.tabs.map((tab, index) => (
        <div
          key={index}
          className={tab.active ? 'active item' : 'item'}
          style={{ cursor: 'pointer' }}
          onClick={() => props.openThread(tab.id)}
        >
          {tab.title}
        </div>
      ))
    }
  </div>
)

export default Tabs
