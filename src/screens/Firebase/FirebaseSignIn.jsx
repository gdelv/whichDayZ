import React, { Component } from "react"
import './Firebase.scss'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAToTdC6sGDAasB7Hyv-bggticBmOwmfhs",
  authDomain: "org.reactjs.native.example.whichday"
})

export default class FirebaseSignIn extends Component {
  constructor(props) {
    super(props) 
  
  state = { 
    isSignedIn: false,
    user: '' 
  }
}
  uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  setUser = user => this.setState({ user })

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      this.setUser(user)
      console.log("user", user.displayName)
      console.log(this.state.user)
    })
  }

  

  render() {
    return (
      <div className="container has-text-centered is-centered">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            {/* <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          </span>
        ) : (
          <>
          <p class='title is-size-2'>Welcome!</p>
          <p class='subtitle is-size-2'>Please Sign Up/Sign In Below</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </>
        )}
      </div>
    )
  }
}
