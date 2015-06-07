Meteor.eventService = new function EventService() {
	this.firstLoaded = true;
	this.windowRange = {};
	this.location = {};
	this.windowRangeChanged = new Meteor.event();
	this.eventsChanged = new Meteor.event();


	this.getEvents = function (value) {
		var filter = value ? value : this.getFilter();
		//TODO: use filter

		this.events = Events.find({},
			{sort: {createdAt: -1}});



		return this.events;
	};

	this.initilize = function() {
		this.events.observeChanges({
			added: this.onEventsAdded.bind(this),
			changed: this.onEventsChanged.bind(this),
			removed: this.onEventsRemoved.bind(this)
		});
	};

	this.getEventElements = function (value) {
		var filter = value ? value : this.getFilter();
		//TODO: use filter

		return this.getEvents(filter).fetch();
	};

	this.setEvents = function (events) {
		if(this.events !== events) {
			this.events = events;
			this.eventsChanged.trigger(events);
		}
	};

	this.getFilter = function() {
		return {
			//TODO: add location filter etc
			//created_at: {
			//	$gte: new Date(this.currentDate.getTime - 86400000).toISOString(),
			//	$lt: this.currentDate.toISOString()
			//}
		};
	};

	this.setLocation = function(location) {
		//TODO
	};

	this.setWindowRange = function(windowRange) {
		if(this.windowRange !== windowRange) {
			this.windowRange = windowRange;
			this.windowRangeChanged.trigger(windowRange);
		}
	};

	this.getWindowRange = function(windowRange) {
		return this.windowRange;
	};

	this.getWindowRangeStart = function(windowRange) {
		return this.windowRange.start;
	};

	this.getWindowRangeEnd = function(windowRange) {
		return this.windowRange.end;
	};

	this.onEventsAdded = function(document, element) {
		this.eventsChanged.trigger(element);
	};

	this.onEventsChanged = function(newDocument, oldDocument, newElement, oldElement) {

	};

	this.onEventsRemoved = function(document, element) {

	};
};