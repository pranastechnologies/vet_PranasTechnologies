Ext.define('DEV.store.StoreList', {
    extend:'Ext.data.Store',
    requires:['Ext.data.reader.Json','Ext.data.proxy.JsonP'],
    config:{
        model:'CustomList.model.ModelList',
        autoLoad:true,
		storeId:'Tracker',
        proxy:{
            type:'jsonp',
       url:'http://query.yahooapis.com/v1/public/yql?q=use%20%22store%3A%2F%2FQIerPnRAHNxOuRNfV55Z02%22%20as%20tfl%3B%20select%20*%20from%20tfl&format=json',

            reader:{
                type:'json',
                rootProperty:'query.results.items.s',
				useSimpleAccessors:true
                }
        }
    }
});