Ext.define('SenchaThemerDemo.view.main.Email.EmailGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'emailgrid',
    margin: '4 4 0 0',
    height: 600,
    width: '100%',

    store: {
        type: 'bufferforum'
    },

    columns: [
        {
            xtype: 'checkcolumn',
            text: 'MyCheck',
            dataIndex: 'checked'
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
            dataIndex: 'sliderValue',
            widget: {
                xtype: 'sliderwidget',
                minValue: 0,
                maxValue: 100
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
            dataIndex: 'progress',
            widget: {
                xtype: 'progress',
                textTpl: '{value}%'
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
        }
    ],

    plugins: [
        {
            ptype: 'rowwidget',
            widget: {
                xtype: 'component',
                bind: '{record.rowBodyTpl}'
            }
        }
    ]
});
