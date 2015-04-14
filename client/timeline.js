var TimelineService = new function() {

	this.timeline = null;

	this.currentDate = new Date();

	this.options = {
		width: "100%",
		height: '150px',
		zoomMax: 31536000000, // 1 year
		zoomMin: 60000, // 1 minute
		max: this.currentDate.getTime(),
		min: new Date(1420066800000), //01/01/2015
		showCurrentTime: false
		//end: this.currentDate.getTime(), //end of the events shown
		//start: this.currentDate.getTime() - 86400000 //start of the events shown //default: current time minus 1day
	};

	this.createTimeline = function (container) {
		var items = Meteor.eventService.getEvents().fetch();
		this.timeline = new vis.Timeline(container, items, this.options);
		this.timeline.on('rangechanged', this.timelineOnRangechanged.bind(this));
	};

	this.timelineOnRangechanged = function(range) {
		console.log("update map");
		// TODO: TRIGGER CHANGE
	}


}();

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	TimelineService.createTimeline(timeNavigator);
};