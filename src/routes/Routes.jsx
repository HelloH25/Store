import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Users from '../page/Users';
import Productos from '../page/Productos';
import Ventas from '../page/Ventas';
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/Productos', '/Users','/Ventas', '/Profile']}>
                  <Switch> 
                    <Route path='/Productos'>
                        <Productos/>           
                    </Route>
                    <Route path='/Users'>
                        <Users/>
                    </Route>
                    <Route path='/Ventas'>
                        <Ventas/>
                    </Route>
                  </Switch>
                </Route> 
            </Switch>
        </Router>
    )
}

export default Routes
