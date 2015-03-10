var map;
var login = 'BobPicky';
var myLat = 42.4084971;
var myLng = -71.1162187; //Default is halligan hall
var myOptions = {
	zoom: 13,
	center: new google.maps.LatLng(myLat, myLng),
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
function init() {
	// Set up map
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	useMyLoc();
}
function useMyLoc () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			myPos = new google.maps.LatLng(myLat, myLng);
			map.panTo(myPos);

			marker = new google.maps.Marker({
				map: map,
				position: myPos,
				title: login,
				icon: new google.maps.MarkerImage('moth.jpg', null, null, null,
			        new google.maps.Size(20, 20));
			});
			infowindow = new google.maps.InfoWindow();
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
			requestLocs();
			google.maps.event.addListener(marker, 'click', function () {
			        console.log("a");
					infowindow.open(map, marker);
			});
		});
	}
}
function requestLocs() {
	request = new XMLHttpRequest();
	request.open("POST", "https://secret-about-box.herokuapp.com/sendLocation",true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = JSON.parse(this.responseText);
			drawOthers(data);
		}
	};
	request.send("login=" + login + "&lat=" + myLat + "&lng=" + myLng);
}
Number.prototype.toRadians = function() {
   return this * Math.PI / 180;
}
function drawOthers(userLocs) {
	if (typeof userLocs["error"] === "undefined") {
		userLocs.forEach(function (val, idx, arr) {
			if (!(val["login"] === login)) {
				lat = val["lat"];
				lng = val["lng"];
				dLat = myLat - lat;
				dLat = dLat.toRadians();
				dLng = myLng - lng;
				dLng = dLng.toRadians();
				a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat.toRadians()) * Math.cos(myLat.toRadians()) * Math.sin(dLng/2) * Math.sin(dLng/2); 
				c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
				distance = 6371 * c * 0.621371;
				marker = new google.maps.Marker({
					map: map,
					position: new google.maps.LatLng(lat, lng),
					title: val["login"] + ": " + distance + " miles away",
				});
				infowindow = new google.maps.InfoWindow({
					content: marker.title,
					disableAutoPan: true
				});
				infowindow.open(map, marker);
				google.maps.event.addListener(marker, 'click', function () {
				    console.log("a");
					infowindow.open(map, marker);
				});
			}
		});
	}
}