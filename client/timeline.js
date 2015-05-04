var timelineController = new function() {
	this.eventService = Meteor.eventService;

	this.timelineOptions = {
		width: "100%",
		height: '150px',
		zoomMax: 31536000000, // 1 year
		zoomMin: 60000, // 1 minute
		max: new Date().getTime(), // now
		min: new Date(1420066800000), // 01/01/2015
		showCurrentTime: false,
		end: Meteor.eventService.getWindowRangeEnd(), // WindowRange. If undefined the end will be the last of the events passed
		start: Meteor.eventService.getWindowRangeStart() // WindowRange. If undefined the start will be the first of the events passed
	};

	this.createTimeline = function (container) {
		var items = this.eventService.getEvents().fetch();
		this.timelineObject = new vis.Timeline(container, items, this.timelineOptions);
		this.timelineObject.on('rangechanged', this.timelineOnWindowRangeChanged.bind(this));
	};

	this.setTimelineRange = function (windowRange) {
		this.timelineObject.setWindow(windowRange.start, windowRange.end);
	};

	this.timelineOnWindowRangeChanged =  function (range) {
		this.eventService.setWindowRange(range);
	};

	this.timelineOnWindowRangeChanged =  function (range) {
		this.eventService.setWindowRange(range);
	};

	this.setEvents =  function (events) {
		this.timelineObject.setItems(events);
	};

	this.eventService.windowRangeChanged.add(this.setTimelineRange, this);
	this.eventService.eventsChanged.add(this.setEvents, this);
}();

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	timelineController.createTimeline(timeNavigator);
};