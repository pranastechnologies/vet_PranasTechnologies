Ext.define("DEV.view.station",{
	extend:"Ext.Container",
	xtype:'Station',

	config:{
		style: 'background-color:#c4e1ed;',
        layout: 'vbox', //  add a layout
		scrollable:true,
		items:[
		{
                xtype: 'toolbar',
                docked: 'top',
                title: 'Station Information',
                minHeight: '60px',
                items: [
                    {
						ui:'back',
                        xtype: 'button',
						text:'back',
						style: {
							'text-align':'right'
						},
						handler:function()
						{
							Ext.Msg.alert(" Currently Unavailable !");
						}
                    },
					{
                        xtype: 'button',
                       	iconCls: 'refresh',
    					iconMask: true,
						style: {
							'position':'absolute',
							'right':'0',
							'top':'13px'
						},
						handler:function()
						{
							Ext.Msg.alert(" Currently Unavailable !");
						}
                    },
                ],          
            },

		{
			xtype:'panel',
			html:[
						"<div class=container><div class=inner-container><div class=station-cont><div class=st-count>17/19</div>",
						"River Street , Clerkenwell<br><span>1.2 miles east of current location</span></div>",
						"</div><div class=clear></div><div class=inner-container><div class=loc-dtl-img><div class=loc-img-lft>",
						"<div class=cyk-cont>17</div><div class=cycle-img></div></div><div class=loc-img-ryt><div class=cyk-cont>2</div>",
						"<div class=park-img></div></div><div class=clear></div><div class=data-cont>",
						"Data published by TFL 3 minutes ago<br><span>Last checked 30s ago<span></div></div><div class=rt-plan>",
						"<div class=rt-pl-ico>Route Planning</div><div class=rt-fav-ico>Add to favourites</div>",
						"</div><div class=clear></div></div></div>"
                    ].join(""),
		},
		
		]
	},
});