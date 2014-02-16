smartDocs = 'Study Sencha Docs <a href=\"http://beginsmarter.com/oss/sencha/ext-4.2.1.883/docs/\">here</a>'

Ext.define('Lifecoach.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'Function',
        html: smartDocs,
        width: 150
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Contents',
            html: 'it works!'
        }]
    }]
});
