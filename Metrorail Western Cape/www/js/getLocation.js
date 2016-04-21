$(document).ready(function() {
	if(navigator.geolocation) {		
		initialise();
	} else {
		$("#map").html("Your device does not support location or it is not enabled.");
	}
});

function initialise() {
	var geolocation = navigator.geolocation;
	geolocation.getCurrentPosition(getLocation, errorHandler);
    //alert("done");
    //alert($("#map").data("lat"));
	//$("#map").html(latitude);    
}

function errorHandler(error) {	
	var errorMessage;
	switch(error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            errorMessage = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "An unknown error occurred."
            break;
    }

    $("#map").html(errorMessage);
}

function getLocation(position) {
    var lat = position.coords.latitude;
    var longitude = position.coords.longitude;
    var mapProp = {
        center:new google.maps.LatLng(lat,longitude),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map($("#map")[0], mapProp);
}