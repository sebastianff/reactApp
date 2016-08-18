import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Formsy from 'formsy-react';

import Main from '../imports/ui/App.jsx';
import UsersList from '../imports/ui/Users.jsx';

Meteor.startup(() => {
  //ReactDOM.render(<Main/>, document.getElementById('render-target'));
  ReactDOM.render(<UsersList/>, document.getElementById('render-target'));
});