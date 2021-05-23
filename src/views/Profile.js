import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./RegistrationStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
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
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import firebase from "firebase/app";
import firebaseConfig from '../common/firebaseConfig';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";
import 'firebase/storage'

class Profile extends Component {
  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    uname: '',
    age: '',
    gender: '',
    politics: '',
    ethnicity: '',
    religiousBeliefs: '',
    zodiacSign: '',
    height: '',
    familyPlans: '',
    image_url: null,
    upload_file: '',
    error: null,
    errorOpen: false
  };

  componentDidMount() {
    const uid = localStorage.getItem('uid')
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
    firebase.database()
      .ref(`users/${uid}`).on('value', (snapshot) => {
        console.log(snapshot.val());
        let data = snapshot.val()
        this.setState({
          age: data.age,
          gender: data.gender,
          politics: data.politics,
          ethnicity: data.ethnicity,
          religiousBeliefs: data.religiousBeliefs,
          zodiacSign: data.zodiacSign,
          height: data.height,
          familyPlans: data.familyPlans,
          image_url: data.photos,
          uname: data.name
        })

      })
  }

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

  imageSelect = (event) => {
    this.setState({
      image_url: URL.createObjectURL(event.target.files[0]),
      upload_file: event.target.files[0]
    })
  }

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

  updateProfile = e => {
    e.preventDefault();

    const uid = localStorage.getItem('uid')
    if (this.state.upload_file != '') {
      const storage = firebase.storage()
      const uploadTask = storage.ref(`${uid}/${this.state.upload_file.name}`).put(this.state.upload_file)
      uploadTask.on('state_changed',
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot)
        }, (err) => {
          //catches the errors
          console.log(err)
        }, () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage.ref(uid).child(this.state.upload_file.name).getDownloadURL()
            .then(fireBaseUrl => {
              this.setState({
                image_url: fireBaseUrl
              })
              firebase.database().ref('users/' + uid).set({
                name: this.state.uname,
                photos: fireBaseUrl,
                age: this.state.age,
                gender: this.state.gender,
                politics: this.state.politics,
                ethnicity: this.state.ethnicity,
                religiousBeliefs: this.state.religiousBeliefs,
                zodiacSign: this.state.zodiacSign,
                height: this.state.height,
                familyPlans: this.state.familyPlans,
              })
              alert('Update success!')
            })
        })
    } else {
      firebase.database().ref('users/' + uid).set({
        name: this.state.uname,
        photos: this.state.image_url,
        age: this.state.age,
        gender: this.state.gender,
        politics: this.state.politics,
        ethnicity: this.state.ethnicity,
        religiousBeliefs: this.state.religiousBeliefs,
        zodiacSign: this.state.zodiacSign,
        height: this.state.height,
        familyPlans: this.state.familyPlans,
      })
      alert('Update success!')
    }


    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        {/* <CssBaseline /> */}

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            {
              this.state.image_url == null ? <PeopleAltIcon className={classes.icon} /> :
                <img src={this.state.image_url} className={classes.icon}></img>
            }
          </Avatar>
          <div>
            <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={this.imageSelect} />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            {/* <input type="file" onChange={this.imageSelect} /> */}
            {/* <img src={this.state.file} /> */}
          </div>
          <form
            className={classes.form}
            onSubmit={() => this.submitRegistration}
          >
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="uname" className={classes.labels}>
                User Name
              </InputLabel>
              <Input
                name="uname"
                type="uname"
                value={this.state.uname}
                autoComplete="uname"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("uname")}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="gender" className={classes.labels}>
                Gender
              </InputLabel>
              <Input
                name="gender"
                type="gender"
                value={this.state.gender}
                autoComplete="gender"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("gender")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="age" className={classes.labels}>
                Age
              </InputLabel>
              <Input
                name="age"
                type="age"
                value={this.state.age}
                autoComplete="age"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("age")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="politics" className={classes.labels}>
                Politics
              </InputLabel>
              <Input
                name="politics"
                type="politics"
                value={this.state.politics}
                autoComplete="politics"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("politics")}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="ethnicity" className={classes.labels}>
                Ethnicity
              </InputLabel>
              <Input
                name="ethnicity"
                type="ethnicity"
                value={this.state.ethnicity}
                autoComplete="ethnicity"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("ethnicity")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="religiousBeliefs" className={classes.labels}>
                ReligiousBeliefs
              </InputLabel>
              <Input
                name="religiousBeliefs"
                type="religiousBeliefs"
                value={this.state.religiousBeliefs}
                autoComplete="religiousBeliefs"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("religiousBeliefs")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="zodiacSign" className={classes.labels}>
                ZodiacSign
              </InputLabel>
              <Input
                name="zodiacSign"
                type="zodiacSign"
                value={this.state.zodiacSign}
                autoComplete="zodiacSign"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("zodiacSign")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="height" className={classes.labels}>
                Height
              </InputLabel>
              <Input
                name="height"
                type="height"
                value={this.state.height}
                autoComplete="height"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("height")}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="familyPlans" className={classes.labels}>
                FamilyPlans
              </InputLabel>
              <Input
                name="familyPlans"
                type="familyPlans"
                value={this.state.familyPlans}
                autoComplete="familyPlans"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("familyPlans")}
              />
            </FormControl>
            <Button
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.updateProfile}
            >
              Update Profile
            </Button>
          </form>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }
}

export default withStyles(register)(Profile);
