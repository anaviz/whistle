//TODO:
// listen for the onReady on the event collection, then create this.events,
// trigger an onready event for the timeline service to pickup, there is where you create the timeline vis object

var timelineController = new function() {
	this.eventService = Meteor.eventService;

	this.timelineOptions = {
		width: "100%",
		height: '150px',
		zoomMax: 31536000000, // 1 year
		zoomMin: 3600000, // 1 minute
		max: new Date().getTime(), // now
		min: new Date(1420066800000), // 01/01/2015
		showCurrentTime: false,
		end: Meteor.eventService.getWindowRangeEnd(), // WindowRange. If undefined the end will be the last of the events passed
		start: Meteor.eventService.getWindowRangeStart() // WindowRange. If undefined the start will be the first of the events passed
	};

	this.createTimeline = function (container) {
		this.timelineItems = new vis.DataSet(this.eventService.getEventElements());
		this.timelineObject = new vis.Timeline(container, this.timelineItems, this.timelineOptions);
		this.timelineObject.on('rangechanged', this.timelineOnWindowRangeChanged.bind(this));
		//this.eventService.initilize();
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
		this.timelineItems.add(events);
	};

	this.eventService.windowRangeChanged.add(this.setTimelineRange, this);
	this.eventService.eventsChanged.add(this.setEvents, this);
}();

Template.timeline.rendered = function() {
	var timeNavigatorContainer = this.find("#time-navigator");
	timelineController.createTimeline(timeNavigatorContainer);
};