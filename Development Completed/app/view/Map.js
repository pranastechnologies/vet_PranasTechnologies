Ext.define("DEV.view.Map",{
	extend:'Ext.Panel',
	xtype:'gmap',
	config: {
		title:'Map',
		iconCls:'map',
		cls:'map',
        useCurrentLocation: true,
        listeners: [
            {
                fn: 'onMapMaprender',
                event: 'maprender'
            }
        ]
    },
	onMapMaprender: function(map, gmap, options) {
        this.initializePlaces();
    },

    initializePlaces: function() {

        //Set Marker on Current Position
        var geo = this.getGeo();
        var currentPosition = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());
        this.createMarker(currentPosition);

        //request set for Places Services
        var request = {
            location: currentPosition,
            radius: 500,
            types: ['store']
        };


        this.getMap().zoom = 15;

        // Call PlacesService
        var service = new google.maps.places.PlacesService(this.getMap());
        service.nearbySearch(request, this.callbackPlaces); 



    },

    callbackPlaces: function(results, status) {

        if (status == google.maps.places.PlacesServiceStatus.OK) {  

            for (var i = 0; i < results.length; i++) {
                addMarker(results[i]);
            }
        }
    },

    createMarker: function(position) {
        //Here Position = Google Map LatLng

        var infoWindow = new google.maps.InfoWindow();

        var marker = new google.maps.Marker({
            map: this.getMap(),
            position: position
        });

        google.maps.event.addListener(marker, "click", function() {    
            infoWindow.setContent("Lng: " + marker.position.lng() + "\n Lat: " + marker.position.lat());
            infoWindow.open(this.getMap(), marker);
        }); 
    },

    addMarker: function() {
        //Here Place = google.maps.places

        var infoWindow = new google.maps.InfoWindow();

        var marker = new google.maps.Marker({
            map: this.getMap(),
            position: place.geometry.location
        });


        google.maps.event.addListener(marker, "click", function() {    
            infoWindow.setContent("Lng: " + marker.position.lng() + "\n Lat: " + marker.position.lat());
            infoWindow.open(this.getMap(), marker);
        }); 
    }

});