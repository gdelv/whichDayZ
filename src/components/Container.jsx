import React from 'react'
import NavBar from '../components/shared/NavBar'
import { Routes } from "../routes"


export default class Container extends React.Component {
    constructor(props) {
        super(props)



        this.state = {
            user: null
        }
    }


    setUser = user => this.setState({ user });
    clearUser = () => this.setState({ user: null })


    render() {

        const { user } = this.state;
        return (
            <>
                <header className="navbar">
                    <NavBar user={user} />
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
