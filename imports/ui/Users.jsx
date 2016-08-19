import React, { Component, PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { Users }from '../collection.js';
import { createContainer } from 'meteor/react-meteor-data';
import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';




export class UsersList extends Component {
  renderUsers() {
    return this.props.users.map((user) => (
      <SingleUser users={user} />
    ));
  }

  render() {
    return(
      <MuiThemeProvider>
      <List>
        {this.renderUsers()}
      </List>
      </MuiThemeProvider>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default class SingleUser extends Component {
  render() {
    return (
      <Card>
        <CardText>
          <h1>Name: {this.props.users.name}</h1>
          <h3>Email: {this.props.users.email}</h3>
          <p>Age: {this.props.users.age}</p>
        </CardText>
        <CardActions>
          <a href="/"><FlatButton label="Back" /></a>
        </CardActions>
      </Card>
    );
  }
}
 
SingleUser.propTypes = {
  user: PropTypes.object.isRequired,
};

export default createContainer(() => {
  return {
    users: Users.find({}).fetch(),
  };
}, UsersList);