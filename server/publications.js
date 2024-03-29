
Meteor.publish("events", function () {
	return Events.find();
});

Meteor.publish("userData", function () {
	if (this.userId) {
		return Meteor.users.find({_id: this.userId}, {profile: 1});
	} else {
		this.ready();
	}
});