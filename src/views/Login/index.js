import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "../RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// import './style.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from "firebase/app";
import firebaseConfig from '../../common/firebaseConfig';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
class Login extends Component {
  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    error: null,
    errorOpen: false
  };

  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };
  login = e => {
    e.preventDefault();
    const newUserCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    console.log("this.props.newUserCredentials", newUserCredentials);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        // Signed in 
        // ...
        console.log("sadfasdfasdf===>", data.user.uid)
        localStorage.setItem("uid", data.user.uid)

        alert('Login success!')
        this.props.history.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

    //dispath to userActions
  };

  loginWithGoogle = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log("sadfasdfasdf===>", user.uid)
        localStorage.setItem("uid", user.uid)
        firebase.database().ref('users/' + user.uid).set({
          name: user.displayName,
        })
        alert('Login success!')
        this.props.history.push('/')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  loginWithFacebook = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Signed in       
        var user = result.user;
        console.log("sadfasdfasdf===>", user)
        localStorage.setItem("uid", user.uid)
        firebase.database().ref('users/' + user.uid).set({
          name: result.additionalUserInfo.profile.name,
        })
        alert('Login success!')
        this.props.history.push('/')
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  loginWithTwitter = e => {
    e.preventDefault();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    var provider = new firebase.auth.TwitterAuthProvider();
    provider.setCustomParameters({
      'display': 'popup'
    });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = credential.accessToken;
        var secret = credential.secret;

        // The signed-in user info.
        var user = result.user;
        console.log("sadfasdfasdf===>", user)
        localStorage.setItem("uid", user.uid)
        firebase.database().ref('users/' + user.uid).set({
          name: result.additionalUserInfo.profile.name,
        })
        alert('Login success!')
        this.props.history.push('/')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorMessage)
        // ...
      });

    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    return (
      <div class="login-container" style={{ marginTop: 80 }}>
        <div class="div-curve">
          <img src={require('../../assets/images/login/login-bg-3.png')} alt="asdf" class="overlay " />
          <img src={require('../../assets/images/login/logo-black.png')} class="logo" alt="" />
          <h2 class="font-weight-bold">iSixtyNine</h2>
          <span class="span">Connecting Hearts</span>
        </div>
        <div class="pt-5 px-3">
          <button
            class="mt-3 global-btn-2"
            disableRipple
            type="submit"
            onClick={this.loginWithGoogle}
          >
            <i class="fa fa-google"></i>
            <span>LOGIN WITH GOOGLE</span>
          </button>

          <button
            class="mt-3 global-btn-2"
            disableRipple
            type="submit"
            onClick={this.loginWithFacebook}
          >
            <i class="fa fa-facebook"></i>
            <span>LOGIN WITH FACEBOOK</span>
          </button>

          <button
            class="mt-3 global-btn-2"
            disableRipple
            type="submit"
            onClick={this.loginWithTwitter}
          >
            <i class="fa fa-twitter"></i>
            <span>LOGIN WITH TWITTER</span>
          </button>
        </div>
        <p class="footer-text">We don't post anything to Facebook and Linkedin, By signing in, you agree with our <a href="">Term and Conditions</a> and <a href="">Privacy Policy</a></p>
      </div>
    );
  }
}

export default withStyles(register)(Login);
