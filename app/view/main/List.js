Ext.define('SenchaThemerDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'SenchaThemerDemo.store.Personnel'
    ],
    title: 'User list',
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
    },

    listeners: {
        itemclick: function (grid, record) {
            var editWindow = Ext.create('Ext.window.Window', {
                title: 'Edit Person Details',
                modal: true,
                layout: 'fit',
                width: 400,
                height: 300,
                items: [{
                    xtype: 'form',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First Name',
                            name: 'firstName',
                            value: record.get('firstName'),
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Last Name',
                            name: 'lastName',
                            value: record.get('lastName'),
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'ID',
                            name: 'id',
                            value: record.get('id'),
                            readOnly: true 
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Title',
                            name: 'title',
                            value: record.get('title')
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Address',
                            name: 'address',
                            value: record.get('address')
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Company',
                            name: 'company',
                            value: record.get('company')
                        }
                    ]
                }],
                buttons: [{
                    text: 'Save',
                    handler: function (btn) {
                        var form = btn.up('window').down('form').getForm();
                        if (form.isValid()) {
                            record.set(form.getValues());
                            btn.up('window').close();
                        } else {
                            Ext.Msg.alert('Invalid Data', 'Please correct form errors.');
                        }
                    }
                }, {
                    text: 'Close',
                    handler: function (btn) {
                        btn.up('window').close();
                    }
                }]
            }).show();
        }
    }
});
