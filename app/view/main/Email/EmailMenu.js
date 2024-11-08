Ext.define('SenchaThemerDemo.view.main.Email.EmailMenu', {
    extend: 'Ext.container.Container',
    xtype: 'emailmenu',
    margin: '4 4 0 0',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'menu',
                    cls: 'navigation-email',
                    floating: false,
                    border: false,
                    width: 175,
                    iconCls: 'fas fa-envelope',
                    title: 'Email',
                    items: [
                        {
                            iconCls: 'x-fa fa-edit',
                            text: 'Compose'
                        },
                        {
                            iconCls: 'x-fa fa-inbox',
                            text: 'Inbox'
                        },
                        {
                            iconCls: 'x-fa fa-check-circle',
                            text: 'Sent Mail'
                        },
                        {
                            iconCls: 'x-fa fa-exclamation-circle',
                            text: 'Spam'
                        },
                        {
                            iconCls: 'x-fa fa-trash-alt',
                            text: 'Trash'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    cls: 'navigation-friends-container',
                    items: [
                        {
                            xtype: 'menu',
                            border: false,
                            cls: 'navigation-Friends',
                            floating: false,
                            width: 175,
                            iconCls: 'fas fa-users',
                            manageHeight: false,
                            title: 'Friends',
                            items: [
                                {
                                    text: 'Torres Tras',
                                },
                                {
                                    text: 'John Dea',
                                },
                                {
                                    text: 'Hines Moon'
                                },
                                {
                                    text: 'Mike Mak'
                                },
                                {
                                    text: 'Molina Wilkroson'
                                },
                                {
                                    text: 'Jonny Dipp'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
