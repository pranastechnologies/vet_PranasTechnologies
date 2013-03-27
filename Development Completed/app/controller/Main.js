Ext.define('DEV.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		style: 'background-color:#c4e1ed;',
        refs: {
            blog:'Station'
        },
        control: {
            'Station list':{
				itemtap:'showPost'
			}
        }
    },
    showPost:function(list,index,element,record){
		this.getBlog().push({
			xtype:'panel',
			title:record.get('n'),
			
			
			
			
			
			html:[
						"<div class=container><div class=inner-container><div class=station-cont><div class=st-count>"+record.get('b')+"/"+record.get('d')+"</div>",
						""+record.get('n')+"<br><span>1.2 miles east of current location</span></div>",
						"</div><div class=clear></div><div class=inner-container><div class=loc-dtl-img><div class=loc-img-lft>",
						"<div class=cyk-cont>"+record.get('d')+"</div><div class=cycle-img></div></div><div class=loc-img-ryt><div class=cyk-cont>"+record.get('e')+"</div>",
						"<div class=park-img></div></div><div class=clear></div><div class=data-cont>",
						"Data published by TFL 3 minutes ago<br><span>Last checked 30s ago<span></div></div><div class=rt-plan>",
						"<div class=rt-pl-ico>Route Planning</div><div class=rt-fav-ico>Add to favourites</div>",
						"</div><div class=clear></div></div></div>"
                    ].join(""),
			scrollable:true
		});
	}
});