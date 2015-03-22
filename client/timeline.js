var TimelineService = new function() {

	this.timeline = null;

	this.currentDate = new Date();

	this.options = {
		width: "100%",
		height: '150px',
		zoomMax: 31536000000, // 1 year
		zoomMin: 60000, // 1 day
		max: this.currentDate,
		min: new Date(2015, 22, 03),
		showCurrentTime: false,
		end: this.currentDate.getTime(),
		start: this.currentDate.getTime() - 86400000 //default: current time minus 1day
	};

	this.getFilter = function() {
		return {
			created_at: {
				$gte: Date(this.options.start).toISOString(),
				$lt: Date(this.options.end).toISOString()
			}
		};
	}
}();

Template.timeline.helpers({
	events: function () {
		// use filter
		return Events.find(
			TimelineService.getFilter(),
			{sort: {createdAt: -1}});
	}
});

Template.timeline.updateTimeline = function () {

};

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	var items  = this.data;
	TimelineService.timeline = new vis.Timeline(timeNavigator, items, TimelineService.options);
};