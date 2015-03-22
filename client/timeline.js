var TimelineService = {

	timeline: null,

	currentDate: new Date().getDate(),

	options: {
		height: '30px',
		zoomMax: 31536000000,
		zoomMin: 3600000
	},

	getFilter: function() {
		return {
			created_at: {
				$gte: TimelineService.currentDate.toISOString(),
				$lt: ISODate("2010-05-01T00:00:00.000Z")
			}
		};
	}
};

Template.timeline.helpers({
	events: function () {
		// use filter
		return Events.find(
			TimelineService.getfilter(),
			{sort: {createdAt: -1}});
	}
});

Template.timeline.updateTimeline = function () {

};

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	TimelineService.timeline = new vis.Timeline(timeNavigator, items, TimelineService.options);
};