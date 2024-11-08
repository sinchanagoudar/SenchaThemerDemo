/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaThemerDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onChangeTheme: function(menu, item){
        var themeName;
 
        if (item.text == 'Basic Material') {
            themeName = 'material'
        }
        else if (item.text == 'Custom') {
            themeName = 'custom'
        }

        localStorage.setItem('tag', themeName);
        window.location.reload();
    },

    editRecord: function (grid, record) {
        var editWindow = Ext.create('Ext.window.Window', {
            title: 'Edit Person Details',
            modal: true,
            layout: 'fit',
            width: 450,
            height: 450,
            items: [{
                xtype: 'form',
                bodyPadding: 50,
                items: [
                    {
                        xtype: 'textfield',
                        labelAlign: 'left',
                        fieldLabel: 'First Name',
                        name: 'firstName',
                        value: record.get('firstName'),
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        labelAlign: 'left',
                        fieldLabel: 'Last Name',
                        name: 'lastName',
                        value: record.get('lastName'),
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'ID',
                        labelAlign: 'left',
                        name: 'id',
                        value: record.get('id'),
                        readOnly: true 
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Title',
                        labelAlign: 'left',
                        name: 'title',
                        value: record.get('title')
                    },
                    {
                        xtype: 'textfield',
                        labelAlign: 'left',
                        fieldLabel: 'Address',
                        name: 'address',
                        value: record.get('address')
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Company',
                        labelAlign: 'left',
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
    },

    menuItemClick: function (view, record) {
        var selectedId = record.get('id'),
            mainContentContainer = Ext.ComponentQuery.query('#maincontent')[0];

        if (!mainContentContainer) {
            console.error('Main content container not found');
            return;
        }

        mainContentContainer.removeAll();
        switch (selectedId) {
            case 'home':
                mainContentContainer.add({
                    xtype: 'dashboard',
                });
                break;
            case 'email':
                mainContentContainer.add({
                    xtype: 'email',
                });
                break;
            case 'groups':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            case 'settings':
                mainContentContainer.add({
                    xtype: 'faq',
                });
                break;
            case 'notifications':
                mainContentContainer.add({
                    xtype: 'notifications',
                });
                break;
            case 'analytics':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            case 'reports':
                mainContentContainer.add({
                    xtype: 'notifications',
                });
                break;
            case 'calendar':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            case 'tasks':
                mainContentContainer.add({
                    xtype: 'notifications',
                });
                break;
            case 'projects':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            case 'contacts':
                mainContentContainer.add({
                    xtype: 'notifications',
                });
                break;
            case 'support':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            case 'profile':
                mainContentContainer.add({
                    xtype: 'notifications',
                });
                break;
            case 'logout':
                mainContentContainer.add({
                    xtype: 'groups',
                });
                break;
            default:
                break;
        }
    },
    onPreview: function() {
        var chart;

        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');

            return;
        }

        chart = this.lookup('chart');

        chart.preview();
    },

    onRefresh: function() {
        var chart = this.lookup('chart');

        chart.getStore().refreshData();
    },

    onDataRender: function(v) {
        return v + '%';
    },

    onAxisLabelRender: function(axis, label, layoutContext) {
        return layoutContext.renderer(label) + '%';
    },

    onMultiAxisLabelRender: function(axis, label, layoutContext) {
        return label === 'Jan' ? '' : label;
    },

    onSeriesLabelRender: function(tooltip, record, item) {
        tooltip.setHtml(record.get('month') + ': ' + record.get(item.field) + '%');
    }
});
