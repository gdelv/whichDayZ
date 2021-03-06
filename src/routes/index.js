import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Default from '../screens/Default';


export const Routes = () => {
    return (
        <Switch>
            {/* Home Route */}
            <Route exact path='/' component={Home}/>
            {/* About Route */}
            <Route exact path='/about' component={About}/>
            {/* Page not found */}
            <Route component={Default}/>
        </Switch>
    )
}
