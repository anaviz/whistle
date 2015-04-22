function EventService() {
	return {
		getEvents: function (value) {
			//var filter = value ? value : this.getFilter();
			//TODO: use filter
			return Events.find({},
				{sort: {createdAt: -1}});
		},

		getFilter: function() {
			return {
				//TODO: add location filter etc
				created_at: {
					$gte: new Date(this.currentDate.getTime - 86400000).toISOString(),
					$lt: this.currentDate.toISOString()
				}
			};
		},

		setLocation: function() {

		}
	}
};
Meteor.eventService = new EventService();