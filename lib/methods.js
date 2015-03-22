
Meteor.methods({
	addEvent: function (title) {
		//if (! Meteor.userId()) {
		//	throw new Meteor.Error("not-authorized");
		//}
		var userId = Meteor.userId() ? Meteor.userId() : "Anonymous";
		var userName = Meteor.user() ? Meteor.user().username : "Anonymous";

		Events.insert({
			title: title,
			createdAt: new Date(),
			owner: userId,
			username: userName,
			stars: [],
			upVotes: [],
			downVotes: []
		});
	},

	deleteEvent: function (eventId) { // todo: how do we allow this with anonymous accounts?
		//var event = Events.findOne(eventId);
		//if (event.owner !== Meteor.userId()) {
		//	throw new Meteor.Error("not-authorized");
		//}
		//Events.remove(eventId);
	},

	starEvent: function (eventId) { // todo: how do we allow this with anonymous accounts?
		//if (! Meteor.userId()) {
		//	throw new Meteor.Error("not-authorized");
		//}

		//var event = Events.findOne(eventId);
		//if(_.contains(event.stars, Meteor.userId())) {
		//	Events.update(eventId, {$pull: {stars: Meteor.userId()}});
		//} else {
		//	Events.update(eventId, {$push: {stars: Meteor.userId()}});
		//}
	},

	upVoteEvent: function (eventId) { // todo: how do we allow this with anonymous accounts?
		//if (! Meteor.userId()) {
		//	throw new Meteor.Error("not-authorized");
		//}
		//
		//var event = Events.findOne(eventId);
		//if(_.contains(event.upVotes, Meteor.userId())) {
		//	Events.update(eventId, {$pull: {upVotes: Meteor.userId()}});
		//} else {
		//	Events.update(eventId, {$push: {upVotes: Meteor.userId()}});
		//}
	},

	downVoteEvent: function (eventId) { // todo: how do we allow this with anonymous accounts?
		//if (! Meteor.userId()) {
		//	throw new Meteor.Error("not-authorized");
		//}
		//
		//var event = Events.findOne(eventId);
		//if(_.contains(event.downVotes, Meteor.userId())) {
		//	Events.update(eventId, {$pull: {downVotes: Meteor.userId()}});
		//} else {
		//	Events.update(eventId, {$push: {downVotes: Meteor.userId()}});
		//}
	}
});