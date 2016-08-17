import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Formsy from 'formsy-react';

import Main from '../imports/ui/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<Main/>, document.getElementById('render-target'));
});