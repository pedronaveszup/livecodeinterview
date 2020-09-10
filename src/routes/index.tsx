import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DynamicRoute from 'components/DynamicRoute'

const Family = DynamicRoute(() => import('containers/Family' /* webpackChunkName: 'sign-up' */))

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Family} />
  </Switch>
)

export default Routes
