Ext.define('SenchaThemerDemo.view.main.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',

    defaults: {
        frame: true,
    },

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [
        {
            xtype:'mainlist',
            flex: 1,
            margin: '0 10 0 0',
        },
        {
            xtype:'gridlist',
            flex: 1,
            margin: '0 10 0 0',
        }
    ]

});
