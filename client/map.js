
var initializeMap = function initializeMap(styleArray) {
	var mapOptions = {
		center: { lat: -34.397, lng: 150.644},
		zoom: 8,
		styles: styleArray
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
};

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
	];
	initializeMap(styleArray);
};