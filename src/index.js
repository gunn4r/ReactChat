import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import './index.css'
import './semantic-dist/semantic.min.css'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
