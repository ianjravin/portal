(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Shop': [
			{
				name: 'Orange County',
				location_latitude: 37.081475648860525, 
				location_longitude: -118.24310302734375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.05079312980657, 
				location_longitude: -118.32275390625,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.2293701171875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.80048816579082, 
				location_longitude: -118.2073974609375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.17344871200958, 
				location_longitude: -118.289794921875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],
			'Cinema': [
			{
				name: 'Orange County',
				location_latitude: 37.081475648860525, 
				location_longitude: -118.24310302734375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.05079312980657, 
				location_longitude: -118.32275390625,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.2293701171875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.80048816579082, 
				location_longitude: -118.2073974609375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.17344871200958, 
				location_longitude: -118.289794921875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],
			'Club': [
			{
				name: 'Orange County',
				location_latitude: 37.081475648860525, 
				location_longitude: -118.24310302734375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.05079312980657, 
				location_longitude: -118.32275390625,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.2293701171875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.80048816579082, 
				location_longitude: -118.2073974609375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.17344871200958, 
				location_longitude: -118.289794921875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],

			'Cafe': [
			{
				name: 'Orange County',
				location_latitude: 37.081475648860525, 
				location_longitude: -118.24310302734375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.05079312980657, 
				location_longitude: -118.32275390625,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.2293701171875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.80048816579082, 
				location_longitude: -118.2073974609375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.17344871200958, 
				location_longitude: -118.289794921875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],

			'Sport': [
			{
				name: 'Orange County',
				location_latitude: 37.081475648860525, 
				location_longitude: -118.24310302734375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.05079312980657, 
				location_longitude: -118.32275390625,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.2293701171875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.80048816579082, 
				location_longitude: -118.2073974609375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.17344871200958, 
				location_longitude: -118.289794921875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],

			'Port': [
			{
				name: 'Orange County',
				location_latitude: 37.208456662000195, 
				location_longitude: -117.322998046875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.131855694734625, 
				location_longitude: -117.00164794921875,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 37.05956083025126, 
				location_longitude: -117.34222412109375,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 37.3461426132468, 
				location_longitude: -118.03436279296875,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.33522435930639, 
				location_longitude: -118.24859619140625,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],


			'Bank': [
			{
				name: 'Orange County',
				location_latitude: 37.302460074782296, 
				location_longitude: -118.0426025390625,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.391981943533544, 
				location_longitude: -118.38592529296875,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 37.37670527881838, 
				location_longitude: -118.575439453125,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.901587303978474, 
				location_longitude: -118.00140380859375,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 36.938916182818595, 
				location_longitude: -117.8338623046875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],


			'Post': [
			{
				name: 'San Francisco County',
				location_latitude: 36.6551995018735, 
				location_longitude: -118.19091796875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.679433365517774, 
				location_longitude: -118.01513671875,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.02229110771148, 
				location_longitude: -118.0096435546875,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],

			'Showplace': [
			{
				name: 'Orange County',
				location_latitude: 37.27405280997905, 
				location_longitude: -119.1522216796875,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.13623498442895, 
				location_longitude: -118.7127685546875,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 36.83127162140714, 
				location_longitude: -118.74298095703125,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 36.98061506528611, 
				location_longitude: -118.34747314453125,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 36.73228075607201, 
				location_longitude: -118.267822265625,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			],

			'Park': [
			{
				name: 'Orange County',
				location_latitude: 38.19286295796692, 
				location_longitude: -119.1741943359375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Diego County',
				location_latitude: 37.844494798834575, 
				location_longitude: -118.12774658203125,
				map_image_url: 'images/marker/img2.png',
				name_point: 'FineLayers',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Francisco County',
				location_latitude: 37.642509774448754, 
				location_longitude: -118.070068359375,
				map_image_url: 'images/marker/img3.png',
				name_point: 'Star Marketing',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'Tulare County',
				location_latitude: 37.39416407012379, 
				location_longitude: -117.9766845703125,
				map_image_url: 'images/marker/img4.png',
				name_point: 'Fine Real Estate',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			},
			{
				name: 'San Luis Obispo County',
				location_latitude: 37.27186719156333, 
				location_longitude: -118.0755615234375,
				map_image_url: 'images/marker/img.png',
				name_point: 'Design Meeting at Lift',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '#'
			}
			]
		};

		function initialize () {
			var mapOptions = {
				zoom: 10,
				center: new google.maps.LatLng(37.16469418870222, -118.2952880859375),
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: false,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: false,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_TOP
				},
				styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'images/marker/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

					
				});
		};

		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};

		function toggleMarkers (category) {
			hideAllMarkers();
			closeInfoBox();

			if ('undefined' === typeof markers[category])
				return false;
			markers[category].forEach(function (marker) {
				marker.setMap(mapObject);
				marker.setAnimation(google.maps.Animation.DROP);

			});
		};
		
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info none" id="marker_info">' +
				'<div class="info" id="info">'+
				'<img src="' + item.map_image_url + '" class="logotype" alt=""/>' +
				'<h2>'+ item.name_point +'<span></span></h2>' +
				'<span>'+ item.description_point +'</span>' +
				'<a href="'+ item.url_point + '" class="more_btn">More info</a>' +
				'<span class="arrow"></span>' +
				'</div>' +
				'</div>',
				disableAutoPan: true,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(40, -210),
				closeBoxMargin: '50px 200px',
				closeBoxURL: '',
				isHidden: false,
				pane: 'floatPane',
				enableEventPropagation: true
			});


		};




