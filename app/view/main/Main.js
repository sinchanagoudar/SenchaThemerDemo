Ext.define('SenchaThemerDemo.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'SenchaThemerDemo.view.main.MainController',
        'SenchaThemerDemo.view.main.MainModel',
        'Ext.tree.Panel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'toolbar',
        height: 50,
        padding: '0 0 20 20',
        items: [
            {
                xtype: 'image',
                src: 'resources/images/cel_logo.png',
                width: 150,
                height: 50,
                alt: 'Company Logo',
                margin: '0 10 0 0'
            },
            '->',
            {
                xtype: 'button',
                text: 'Change Theme',
                iconCls: 'fas fa-exchange-alt',
                menu: {
                    listeners: {
                        click: 'onChangeTheme'
                    },
                    items: [
                        { text: 'Classic' },
                        { text: 'Neptune' },
                        { text: 'Neptune Touch' },
                        { text: 'Crisp' },
                        { text: 'Crisp Touch' },
                        { text: 'Triton' },
                        { text: 'Light Mode' },
                        { text: 'Dark Mode' }
                    ]
                }
            },
        ]
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        flex: 1,
        items: [{
            xtype: 'treepanel',
            title: ' ',
            width: 130,
            rootVisible: false,
            collapsible: true,
            split: true,
            collapseDirection: 'left',
            store: {
                type: 'tree',
                root: {
                    children: [
                        { id: 'home', text: 'Home', leaf: true, iconCls: 'x-fa fa-home' },
                        { id: 'users', text: 'Email', leaf: true, iconCls: 'x-fa fa-users' },
                        // { id: 'groups', text: 'Groups', leaf: true, iconCls: 'x-fa fa-users-cog' },
                        { id: 'settings', text: 'FAQ', leaf: true, iconCls: 'x-fa fa-cog' }
                    ]
                }

            },
            listeners: {
                itemclick: 'menuItemClick'
            }
        }, {
            xtype: 'container',
            flex: 1,
            itemId: 'maincontent',
            padding: '0 0 0 10',
            listeners: {
                render: function (container) {
                    container.add({
                        xtype: 'dashboard'
                    });
                }
            }
        }]
    }]
});
