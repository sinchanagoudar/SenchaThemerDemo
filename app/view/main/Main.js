Ext.define('SenchaThemerDemo.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'SenchaThemerDemo.view.main.MainController',
        'SenchaThemerDemo.view.main.MainModel',
        'Ext.tree.Panel',
        'SenchaThemerDemo.store.Navigation'
    ],

    controller: 'main',
    viewModel: 'main',

    height: '100%',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            height: 50,
            padding: '0 0 20 20',
            items: [
                {
                    xtype: 'image',
                    src: 'https://examples.sencha.com/img/logo.png',
                    height: 30,
                    alt: 'Company Logo',
                    margin: '20 20 0 0'
                },
                {
                    html: 'Sencha Themer Explorer',
                    margin: '20 0 0 0'
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Change Theme',
                    iconCls: 'fas fa-exchange-alt',
                    menu: {

                        items: [
                            { text: 'Custom' },
                            { text: 'Basic Material' },
                            { text: 'Dark' },
                        ],
                        listeners: {
                            click: 'onChangeTheme'
                        },
                    }
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
                    xtype: 'treepanel',
                    width: 200,
                    title: 'Sencha',
                    cls: 'Navigation-sidebar',
                    rootVisible: false,
                    collapsible: true,
                    split: true,
                    collapseDirection: 'left',
                    store: {
                        type: 'navigation'
                    },
                    listeners: {
                        itemclick: 'menuItemClick'
                    }
                },
                {
                    xtype: 'container',
                    scrollable: 'y',
                    flex: 1,
                    margin: '0 0 0 6px',
                    itemId: 'maincontent',
                    listeners: {
                        render: function (container) {
                            container.add({
                                xtype: 'dashboard'
                            });
                        }
                    }
                }
            ]
        }
    ]
});
