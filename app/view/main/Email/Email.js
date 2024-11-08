Ext.define('SenchaThemerDemo.view.main.Email.Email', {
    extend: 'Ext.container.Container',
    xtype: 'email',

    height:620,

    requires: [
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.grid.Panel',
        'Ext.grid.column.Check',
        'Ext.grid.column.Widget',
        'Ext.slider.Widget',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.Progress',
        'Ext.view.Table',
        'Ext.grid.plugin.RowWidget',
        'Ext.XTemplate'
    ],

    itemId: 'emailMainContainer',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'emailmenu',
        },
        {
            xtype: 'container',
            cls: 'grid-container',
            height: 800
        },
        {
            xtype: 'gridpanel',
            flex: 1,
            height: 600,
            width: '100%',
            store: {
                type: 'bufferforum'
            },
            columns: [
                {
                    xtype: 'checkcolumn',
                    text: 'MyCheck'
                },
                {
                    text: 'Id',
                    width: 50,
                    dataIndex: 'id',
                    filter: {
                        type: 'number'
                    }
                },
                {
                    xtype: 'widgetcolumn',
                    text: 'MyWidget',
                    widget: {
                        xtype: 'sliderwidget'
                    }
                },
                {
                    text: 'First Name',
                    width: 150,
                    dataIndex: 'firstName'
                },
                {
                    text: 'Last Name',
                    width: 150,
                    dataIndex: 'lastName'
                },
                
                {
                    text: 'Title',
                    flex: 1,
                    dataIndex: 'title'
                },
                {
                    xtype: 'widgetcolumn',
                    text: 'MyWidget1',
                    widget: {
                        xtype: 'progress'
                    }
                },
                {
                    text: 'Company',
                    flex: 1,
                    dataIndex: 'company'
                },
                {
                    text: 'Address',
                    flex: 1,
                    dataIndex: 'address'
                }, 
            ],
            plugins: [
                {
                    ptype: 'rowwidget',
                    rowBodyTpl: [
                        'rowBodyTpl'
                    ],
                    widget: {
                        xtype: 'component'
                    }
                }
            ]
        }
    ]
 
});
