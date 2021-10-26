import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Productos from './components/page/Productos'
import Ventas from './components/page/Ventas'
import Users from './components/page/Users'
import Tablas from './components/Tablas'

const App = () => {
  return (
    <div>
      <div className='App'>

        
        <Router>
          <Navigation/>
        
          <Switch>
            <Route path='/Ventas'><Ventas /></Route>
            <Route path='/Productos'><Productos /></Route>
            <Route path='/Users'><Users /></Route>
          </Switch>
      </Router>


    </div>
    </div >
  )
}

export default App
