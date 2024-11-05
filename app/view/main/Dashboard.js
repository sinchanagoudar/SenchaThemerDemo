Ext.define('SenchaThemerDemo.view.main.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    width: '100%',
    height: 550,
    // scrollable: true,

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
                    margin: '0 10 0 0'
                },
                // {
                //     xtype: 'faq',
                //     flex: 1,
                //     margin: '10 10 0 0'
                // }
            ]
        }
    ]
});
