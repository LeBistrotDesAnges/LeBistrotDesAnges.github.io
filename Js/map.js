
		            // When the window has finished loading create our google map below
		            google.maps.event.addDomListener(window, 'load', init);

		            function init() {
		                // Basic options for a simple Google Map
		                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		                var mapOptions = {
		                    // How zoomed in you want the map to start at (always required)
		                    zoom: 15,
		                    scrollwheel: false,
		                    draggable: false,
		                    // The latitude and longitude to center the map (always required)
		                    center: new google.maps.LatLng(49.444975, 1.083788), // New York

		                    // How you would like to style the map. 
		                    // This is where you would paste any style found on Snazzy Maps.
		                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#9d9d9d"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#fff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#BC9B6A"},{"visibility":"on"},{"saturation":"0"},{"lightness":"50"}]}]
		                };

		                // Get the HTML DOM element that will contain your map 
		                // We are using a div with id="map" seen below in the <body>
		                var mapElement = document.getElementById('map');

		                // Create the Google Map using our element and options defined above
		                var map = new google.maps.Map(mapElement, mapOptions);

		                // Let's also add a marker while we're at it
		                var marker = new google.maps.Marker({
		                	position: new google.maps.LatLng(49.444962, 1.083763),
		                	map: map,
		                	title: 'Bistrot des Anges'
		                });
		            }
