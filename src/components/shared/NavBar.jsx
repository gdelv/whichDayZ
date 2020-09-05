import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import '../styles/NavBar.scss'
const logo = require('../../images/logo.png')



export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            buttonClassName: 'circle icon'
        }
    }
    changeClassName = () => {
        if(this.state.buttonClassName === 'circle icon') {
            this.setState({ buttonClassName: 'circle icon close' })
        }else if(this.state.buttonClassName === 'circle icon close') {
            this.setState({ buttonClassName: 'circle icon' })
        }
    }
    handleModal = () => {
        this.changeClassName();
        this.setState({ modal: !this.state.modal })
    }
    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className="modal">
                    <NavLink exact to='/' onClick={() => this.handleModal()}>Home</NavLink>
                    <NavLink exact to='/about' onClick={() => this.handleModal()}>About</NavLink>
                </div>
            )
        }
    }
    renderMainLinks = () => {
        return (
                    <div className="navbar-brand">
                            <div className="image is-flex self-centered">
                                <img src={logo} alt="logo" className="logo-image"/>
                            </div>
                        <div id="wrapper" onClick={() => this.handleModal()}>
                            <div className={this.state.buttonClassName}>
                                <span className="line top"></span>
                                <span className="line middle"></span>
                                <span className="line bottom"></span>
                            </div>
                        </div>
                        <div className="navbar-menu" id='navbarMenuHeroC'>
                            <div className="navbar-end is-flex">
                                <NavLink exact to='/' className='black' activeClassName='white'>Home</NavLink>
                                <NavLink exact to='/about' className='black' activeClassName='white'>About</NavLink>
                            </div>
                        </div>
                    </div>
        )
    }
    render() {
        return (
            <>
            {this.renderMainLinks()}
            {this.renderNavModal()}
            </>
        )
    }
}