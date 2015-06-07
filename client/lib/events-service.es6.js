class EventService {
	constructor() {
		this.firstLoaded = true;
		this.windowRange = {};
		this.location = {};
		this.windowRangeChanged = new Meteor.event();
		this.eventsChanged = new Meteor.event();
	}

	getEvents (value) {
		var filter = value ? value : this.getFilter();
		//TODO: use filter

		this.events = Events.find({},
			{sort: {createdAt: -1}});



		return this.events;
	}

	initilize () {
		this.events.observeChanges({
			added: this.onEventsAdded.bind(this),
			changed: this.onEventsChanged.bind(this),
			removed: this.onEventsRemoved.bind(this)
		});
	}

	getEventElements (value) {
		var filter = value ? value : this.getFilter();
		//TODO: use filter

		return this.getEvents(filter).fetch();
	}

	setEvents (events) {
		if(this.events !== events) {
			this.events = events;
			this.eventsChanged.trigger(events);
		}
	}

	getFilter () {
		return {
			//TODO: add location filter etc
			//created_at: {
			//	$gte: new Date(this.currentDate.getTime - 86400000).toISOString(),
			//	$lt: this.currentDate.toISOString()
			//}
		};
	}

	setLocation (location) {
		//TODO
	}

	setWindowRange (windowRange) {
		if(this.windowRange !== windowRange) {
			this.windowRange = windowRange;
			this.windowRangeChanged.trigger(windowRange);
		}
	}

	getWindowRange (windowRange) {
		return this.windowRange;
	}

	getWindowRangeStart (windowRange) {
		return this.windowRange.start;
	}

	getWindowRangeEnd (windowRange) {
		return this.windowRange.end;
	}

	onEventsAdded (document, element) {
		this.eventsChanged.trigger(element);
	}

	onEventsChanged (newDocument, oldDocument, newElement, oldElement) {

	}

	onEventsRemoved (document, element) {

	}
};

Meteor.eventService = new EventService();