Meteor.subscribe("events");
Meteor.subscribe("userData");

Template.body.helpers({
	events: function () {
		return Events.find({}, {sort: {createdAt: -1}});
	}

	// Use Session to store just-one-time-session info
	//someName: function () {
	//	return Session.get("someName");
	//}
});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});