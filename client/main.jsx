import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Formsy from 'formsy-react';

import MyAppForm from '../imports/ui/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<MyAppForm/>, document.getElementById('render-target'));
});