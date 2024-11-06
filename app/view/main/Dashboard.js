Ext.define('SenchaThemerDemo.view.main.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    width: '100%',
    height: 700,
    scrollable: 'y',

    defaults: {
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        flex: 1,
        height: 300,
    },

    items: [
        {
            items: [
                {
                    xtype: 'mainlist',
                    flex: 2,
                    margin: '0 10 0 0'
                },
                {
                    xtype: 'chartItem',
                    flex: 1,
                    margin: '0 10 0 0'
                }
            ]
        },
        {
            items: [
                {
                    xtype: 'user',
                    flex: 1,
                    margin: '0 10 0 0'
                },
            ]
        }
    ]
});
