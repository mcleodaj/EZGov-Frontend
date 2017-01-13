/*jshint esversion: 6 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from './Components/App'
import MapContainer from './Components/MapContainer'

import store from './store'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MapContainer}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'))
