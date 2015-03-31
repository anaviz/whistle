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

	this.getFilter = function() {
		return {
			// add location filter
			created_at: {
				$gte: new Date(this.currentDate.getTime - 86400000).toISOString(),
				$lt: this.currentDate.toISOString()
			}
		};
	};

	this.events = function () {
		return Events.find({},
			{sort: {createdAt: -1}});
	};
}();

Template.timeline.updateTimeline = function () {

};

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	var items = TimelineService.events().fetch();
	TimelineService.timeline = new vis.Timeline(timeNavigator, items, TimelineService.options);
};