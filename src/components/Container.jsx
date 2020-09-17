import React from 'react'
import NavBar from '../components/shared/NavBar'
import { Routes } from "../routes"
import firebase from "firebase"

export default class Container extends React.Component {
    constructor(props) {
        super(props)

        



        this.state = {
            user: null
        }
        // this.onChange = this.onChange.bind(this)
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(firebase.auth().currentUser.displayName)
            }
            else {
                console.log('nope')
            }
        })
    }


    setUser = user => this.setState({ user });
    clearUser = () => this.setState({ user: null })


    render() {

        const { user } = this.state;
        return (
            <>
                <header className="navbar">
                    <NavBar 
                    user={user}
                    // displayName={firebase.auth().currentUser.displayName}
                     />
                </header>
                {/* main */}
                <main>
                    {/* Routes Comp */}
                    <Routes
                        user={user}
                        setUser={this.setUser}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }
}
