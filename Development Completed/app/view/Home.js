Ext.define("DEV.view.Home",{
	extend:'Ext.Panel',
	xtype:'homePanel',
	config:{
		title:'Home',
		iconCls:'home',
		cls:'home',
		scrollable:true,
		styleHtmlContent:true,
		html: [
                        '<h1>Welcome</h1>',
                        "<p>Find your Bike Locations</p>"
                    ].join("")
	}
});