import {FlowRouter} from 'meteor/kadira:flow-router';
import ReactDOM from 'react-dom';
import React from 'react';
import UsersList from '../imports/ui/Users.jsx';
import Main from '../imports/ui/App.jsx';
import {mount} from 'react-mounter';

FlowRouter.route('/usersList', {
    action: function() {
        mount(UsersList);
	}
});

FlowRouter.route('/', {
    action: function() {
        mount(Main);
	}
});



