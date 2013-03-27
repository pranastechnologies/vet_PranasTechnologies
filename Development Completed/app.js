//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'DEV': 'app'
});
function someJSFunction()
{
	
	 var venuePage = Ext.create('DEV.view.station', {
       type: 'slide', 
	   direction:'left',
		  }).show();
}
//</debug>
Ext.application({
    controllers: ["Main"],
    name: 'DEV',
    requires: [
        'Ext.MessageBox',
		'Ext.Carousel'
    ],

    views: ['Main','Home','station','Map'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
		var button = Ext.create('Ext.Button', {
    iconCls: 'locate',
    iconMask: true,
	align:'left',
	handler:function(){
		Ext.Msg.alert("Currently Unavailable !");
	}
});
var List = Ext.create('Ext.Button', {
    iconCls: 'more',
    iconMask: true,
	align:'right',
	cls:'startbutton',
	handler: function(){
		Ext.Viewport.animateActiveItem((
	  	Ext.create('DEV.view.StationList')), {
		  type: 'slide', direction:'left'
		  }).show();
	  }
});

        // Destroy the #appLoadingIndicator element
		var position = new google.maps.LatLng(51.52916347, -0.109970527);
		infowindow = new google.maps.InfoWindow({
                content: '<p id="hook">River Street , Clerkenwell</p><br><button onclick="someJSFunction()">info</button><br />',
				
            }),

            //Tracking Marker Image
            image = new google.maps.MarkerImage(
                'resources/images/point.png',
                new google.maps.Size(32, 31),
                new google.maps.Point(0, 0),
                new google.maps.Point(16, 31)
            ),

            shadow = new google.maps.MarkerImage(
                'resources/images/shadow.png',
                new google.maps.Size(64, 52),
                new google.maps.Point(0, 0),
                new google.maps.Point(-5, 42)
            ),
		Ext.create("Ext.Panel",{
			fullscreen: true,
                layout:'fit',
				store:{
				autoLoad:true,
				fields:['i','n','l','l2','b','e','d'],
					proxy:{
						type:'jsonp',
						url:'http://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FQIerPnRAHNxOuRNfV55Z02%22%20as%20tfl%3B%20select%20*%20from%20tfl&format=json',
						reader:{
							type:'json',
							rootProperty:'query.results.items.s'
						}
					}
				},
                items:[{
                    xtype:'map',
                    useCurrentLocation:false,
					store:'Tracker',
					mapOptions:{
						zoom: 9,
						center: new google.maps.LatLng(51.52916347, -0.109970527),
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						navigationControl: true,
                		navigationControlOptions: {
                    		style: google.maps.NavigationControlStyle.DEFAULT
                		}
					},
					listeners: {
						maprender: function(comp, map) {
							var marker = new google.maps.Marker({
								position: position,
								title : 'River Street , Clerkenwell',
								animation: google.maps.Animation.DROP,
								map: map,
								icon: image
							});
		
							google.maps.event.addListener(marker, 'click', function() {
								infowindow.open(map, marker);
								if (marker.getAnimation() != null) {
									marker.setAnimation(null);
								  } else {
									marker.setAnimation(google.maps.Animation.BOUNCE);
								  }
							});
		
							setTimeout(function() {
								map.panTo(position);
							}, 1000);
						}
		
					}
                },
				{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Find Bike Locations ',
					items:[button,List],
					
                },
				{
					docked:'top',
					cls:'test',
					xtype: 'searchfield',
                    placeHolder: 'Search...',
					itemId:'searchBox'
				},
				{
                    docked: 'bottom',
                    xtype: 'titlebar',
                    title: ''
                }
				]
		});
		var image = 'images/map-icon.png';
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('DEV.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
