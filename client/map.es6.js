class MapController {
	constructor () {
		this.eventService = Meteor.eventService;
	}

	initializeMap (styleArray) {
		var mapOptions = {
			center: { lat: -34.397, lng: 150.644},
			zoom: 8,
			styles: styleArray
		};
		L.mapbox.accessToken = 'pk.eyJ1IjoiYW5hdml6IiwiYSI6IkNjX0l5OUkifQ.7vSwFzl2PMBGzccEGWWkBQ'; //Mapbox
		this.map = L.mapbox.map('map-canvas', 'anaviz.m3c3nh5d'); //Mapbox
		//this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //GoogleMaps
		this.map.on("moveend", this.onMapChanged.bind(this)); //Mapbox
		this.map.on("resize", this.onMapChanged.bind(this)); //Mapbox
	}

	onMapChanged (e) {
		this.eventService.setLocation(this.map.getBounds()); //Mapbox
	}
};
var mapController = new MapController();

Template.map.rendered = function() {
	var styleArray = [
		{
			featureType: "all",
			stylers: [
				{ saturation: -80 }
			]
		},{
			featureType: "road.arterial",
			elementType: "geometry",
			stylers: [
				{ hue: "#00ffee" },
				{ saturation: 50 }
			]
		},		{
			featureType: "road",
			elementType: "all",
			stylers: [
				{ visibility: "off" }
			]
		}
	];  //GoogleMaps
	mapController.initializeMap(styleArray);
};