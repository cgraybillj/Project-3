import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

import TaskApp from "./taskApp"

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TaskApp />
  </Provider>,
  rootElement
)
