Ext.define('DEV.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
				items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Find Bike Locations '
                },
				xtype:'homePanel',
			},
			
        ]
    }
});
