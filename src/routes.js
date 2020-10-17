import React from 'react'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  )
}

export default Routes