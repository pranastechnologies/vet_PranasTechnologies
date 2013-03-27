Ext.define("DEV.view.StationList",{
	extend:"Ext.navigation.View",
	xtype:'Station',
	config:{
		
		Title:"Bike Stations",
		iconCls:'action',
		items:[
		{
			xtype:'list',
			itemTpl:'{n}',
			title:'Bike Stations',
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
			}
		}]
	}
});