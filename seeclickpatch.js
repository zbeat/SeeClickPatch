var weatherURL, state, city, placeName, gData, coords, lat, lng, mapWidget, mapWidgetSrc;
$(document).ready(function() {
	weatherURL = $('ul.links li:nth-child(1) a').attr("href"); // weatherURL = 'http://weather.weatherbug.com/NY/Brooklyn-weather/local-forecast/hourly-forecast.html'; // ex. real Patch.com weather code
	state = weatherURL.split('/')[3]; // state = 'VT'; 
	city = weatherURL.split('/')[4].split('-')[0]; // city = 'Ludlow';
	placeName = city + ', ' + state;
	$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + placeName + '&sensor=false',function(data) { //$.get("http://maps.google.com/maps/geo?output=csv&q=" + placeName, function(data) {
		lat = data.results[0].geometry.location.lat; // coords.split(',')[2];
		lng = data.results[0].geometry.location.lng; // coords.split(',')[3];
		mapWidgetSrc = 'http://seeclickfix.com/issues/iframe?token=f4a72ef691cdab12f3f665b8c1b2886c71c3c2df&lat=' + lat + '&lng=' + lng + '&num_results=50&zoom=12';
		mapWidget = '<iframe width="100%" height="400" src="' + mapWidgetSrc + '" scrolling="no" marginheight="0" frameborder="0" marginwidth="0" allowtransparency="true" hspace="0" vspace="0"></iframe>';
		$('.adtech_placement').hide();
		$('.ad_isolation').hide();
		// $('.events').before('<h3 class="section">Debug</h3><b>weatherURL</b>: ' + weatherURL + '<br/><b>placeName</b>: ' + placeName + '<br/><b>state</b>: ' + state + '<br/><b>city</b>: ' + city + '<br/><b>lat</b>: ' + lat + '<br/><b>lng</b>: ' + lng + '<br/><br/>');
		$('.events').before('<h3 class="section"><a href="/seeclickfix">SeeClickFix</a></h3><br/>' + mapWidget + '<br/><a href="' + mapWidgetSrc + '" target="_blank" style="font-weight:normal;">view large map</a><br><br>');
	});
});