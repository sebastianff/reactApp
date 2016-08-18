import React, { Component, PropTypes } from 'react';
import { Mongo } from 'meteor/mongo';
import { Users }from '../collection.js';
import { createContainer } from 'meteor/react-meteor-data';

export class UsersList extends Component {
  renderUsers() {
    return this.props.users.map((user) => (
      <SingleUser users={user} />
    ));
  }

  render() {
    return (
      <div className="container">

        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default class SingleUser extends Component {
  render() {
    return (
      <li>{this.props.users.name} - {this.props.users.email} - {this.props.users.age}</li>
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