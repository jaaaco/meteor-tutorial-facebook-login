import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1719858061604657',
    secret: '2e0d73892c36fda9512e66897049c209'
});

Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});