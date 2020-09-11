import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Default from '../screens/Default';
import FirebaseSignIn from '../screens/Firebase/FirebaseSignIn'


export const Routes = ({ user, setUser, clearUser }) => {
    return (
        <Switch>
            {/* Home Route */}
            <Route exact path='/' 
            render={props => <Home {...props} user={user}/>}/>
            {/* About Route */}
            <Route exact path='/about' component={About}/>
            {/* Page not found */}
            <Route exact path='/SignIn' 
            render={props => <FirebaseSignIn {...props} setUser={setUser}/>}/>
            <Route component={Default}/>
        </Switch>
    )
}
