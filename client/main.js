import { Template } from 'meteor/templating';

import './main.html';

Template.login.helpers({
    getEmail() {
        return Meteor.user().emails && Meteor.user().emails[0].address;
    }
});

Template.login.events({
    'click button.log-in'(event) {
        event.preventDefault();
        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }
        });
    },
    'click button.log-out'(event) {
        event.preventDefault();
        Meteor.logout();
    }
});
