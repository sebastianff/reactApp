import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Mongo } from 'meteor/mongo';
import { Users } from '../collection.js';
import { createContainer } from 'meteor/react-meteor-data';
import UsersList from './Users.jsx';


import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const Main = React.createClass({

  getInitialState() {
    return {
      canSubmit: false,
    };
  },

  errorMessages: {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
  	Meteor.call('users.insert', data);
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  render() {
	let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="What is your name?"
              floatingLabelText="Name"
            />
            <FormsyText
              name="email"
              validations="isEmail"
              validationError={wordsError}
              required
              hintText="What is your email?"
              floatingLabelText="Email"
            />
            <FormsySelect
              name="age"
              required
              floatingLabelText="How old are you?"
              menuItems={this.selectFieldItems}
            >
              <MenuItem value={'25'} primaryText="25" />
              <MenuItem value={'25-50'} primaryText="25-50" />
              <MenuItem value={'50+'} primaryText="50+" />
            </FormsySelect>
            <FormsyCheckbox
              name="agree"
              label="Do you agree to disagree?"
              style={switchStyle}
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  },
});

export default Main;