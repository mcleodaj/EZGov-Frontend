/*jshint esversion: 6 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from './Components/App'
import BannersContainer from './Components/BannersContainer'
import State from './Components/State'
import USMap from './Components/USMap'
import store from './store'

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={BannersContainer}></IndexRoute>
        <Route path="/states" component={USMap}></Route>
        <Route path="/states/:stateId" component={State}></Route>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'))
