define("main",
	["timelineController", "views/react/test"],
	function(TimelineController, testView) {
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

		// Initialize timeline controller
		var timelineController = new TimelineController();
		var timeNavigatorContainer = document.getElementById("time-navigator");
		timelineController.createTimeline(timeNavigatorContainer);

		//new testView(timeNavigatorContainer);
	}
);

Meteor.startup(function(){
	// Shim vis library into require. Must inject "vis" as dep into module definition
	require.config({
		paths: {
			vis: 'client/requireLibraries/vis'
		}
	});

	require(["main"]);
});