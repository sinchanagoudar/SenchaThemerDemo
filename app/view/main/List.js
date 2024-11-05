Ext.define('SenchaThemerDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'SenchaThemerDemo.store.Personnel'
    ],
    title: 'Infinite Grid',
    height: 300,
    store: {
        type: 'bufferforum'
    },
    scrollable: true,
    features: {
        ftype: 'grouping'
    },
    plugins: {
        gridfilters: true
    },

    columns: {
        defaults: {
            filter: {
                type: 'string'
            }
        },
        items: [{
            text: 'First Name',
            width: 150,
            dataIndex: 'firstName'
        }, {
            text: 'Last Name',
            width: 150,
            dataIndex: 'lastName'
        }, {
            text: 'Id',
            width: 50,
            dataIndex: 'id',
            filter: {
                type: 'number'
            }
        }, {
            text: 'Title',
            flex: 1,
            dataIndex: 'title'
        }, {
            text: 'Address',
            flex: 1,
            dataIndex: 'address'
        }, {
            text: 'Company',
            flex: 1,
            dataIndex: 'company'
        }]
    }
});
