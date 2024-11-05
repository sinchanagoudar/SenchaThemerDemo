Ext.define('SenchaThemerDemo.view.main.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    height: '600',
    width: '100%',
    scrollable: true, 

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'mainlist',
                    flex: 1,
                    margin: '0 10 0 0'
                },
                {
                    xtype: 'gridlist',
                    flex: 1,
                    margin: '0 10 0 0'
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 1,
            items: [
                {
                    xtype: 'user', 
                    flex: 1,
                    margin: '10 10 0 0'
                },
                {
                    xtype: 'faq', 
                    flex: 1,
                    margin: '10 10 0 0'
                }
            ]
        }
    ]
});
