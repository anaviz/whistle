var TimelineService = {

	timeline: null,

	currentDate: new Date().getDate(),

	options: {
		height: '30px',
		zoomMax: 31536000000,
		zoomMin: 3600000
	},

	timeNavigator: {
		offset: 1, // number of days/weeks/months...
		scale: "day", //day, week, month, year
		scrolledPosition: 50, //percent
		scrolledDate: this.currentDate
	},

	getFilter: function() {
		return "do filter";
	}
};

Template.timeline.helpers({
	events: function () {
		// use filter
		return Events.find({
			created_at: {
				$gte: TimelineService.currentDate.toISOString(),
				$lt: ISODate("2010-05-01T00:00:00.000Z")
			}},
			{sort: {createdAt: -1}});
	}
});

Template.timeline.updateTimeline = function () {

};

Template.timeline.rendered = function() {
	var timeNavigator = this.find("#time-navigator");
	TimelineService.timeline = new vis.Timeline(timeNavigator, items, TimelineService.options);
};