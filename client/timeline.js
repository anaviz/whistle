function TimelineController() {
	return {
		timeline: null,

		currentDate: new Date(),

		options: {
			width: "100%",
			height: '150px',
			zoomMax: 31536000000, // 1 year
			zoomMin: 60000, // 1 minute
			max: new Date().getTime(), // now
			min: new Date(1420066800000), //01/01/2015
			showCurrentTime: false
			//end: this.currentDate.getTime(), //end of the events shown
			//start: this.currentDate.getTime() - 86400000 //start of the events shown //default: current time minus 1day
		},

		createTimeline: function (container) {
			var items = Meteor.eventService.getEvents().fetch();
			this.timeline = new vis.Timeline(container, items, this.options);
			this.timeline.on('rangechanged', this.timelineOnRangechanged.bind(this));
		},

		timelineOnRangechanged: function (range) {
			console.log("update map");
			// TODO: TRIGGER CHANGE
		}
	};
};
var TimelineController = new TimelineController();

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	TimelineController.createTimeline(timeNavigator);
};