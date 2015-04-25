Meteor.eventService = new function EventService() {
	this.windowRange = {};
	this.location = {};
	this.windowRangeChanged = new Meteor.event();

	this.getEvents = function (value) {
		//var filter = value ? value : this.getFilter();
		//TODO: use filter
		return Events.find({},
			{sort: {createdAt: -1}});
	};

	this.getFilter = function() {
		return {
			//TODO: add location filter etc
			created_at: {
				$gte: new Date(this.currentDate.getTime - 86400000).toISOString(),
				$lt: this.currentDate.toISOString()
			}
		};
	};

	this.setLocation = function(location) {

	};

	this.setWindowRange = function(windowRange) {
		if(this.windowRange !== windowRange) {
			this.windowRange = windowRange;
			this.windowRangeChanged.trigger();
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
};