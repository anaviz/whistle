//todo: have new-event-form as a global element to new-event.js

Template.newEvent.rendered = function() {
	var newEventForm = this.find(".new-event");
	newEventForm.classList.add("hidden");
};


Template.newEvent.events({

	"click .underlay": function (event) {
		var newEventForm = Template.instance().find(".new-event");
		newEventForm.classList.add("hidden");
	},

	"click .add-event-button": function (event) {
		var newEventForm = Template.instance().find(".new-event");
		newEventForm.classList.remove("hidden");
	},

	"click .cancel-button": function (event) {
		var newEventForm = Template.instance().find(".new-event");
		//newEventForm.title.value = "";
		newEventForm.classList.add("hidden");
	},

	"submit .new-event-form": function (event) {
		var title = event.target.title.value;

		Meteor.call("addEvent", title);

		// Clear form
		event.target.title.value = "";

		//Close form
		var newEventForm = Template.instance().find(".new-event");
		newEventForm.classList.add("hidden");

		// Prevent default form submit
		return false;
	}
});