Ext.define('SenchaThemerDemo.view.main.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    requires: [
        'Ext.view.View',
        'Ext.XTemplate',
        'SenchaThemerDemo.store.UserStore'
    ],

    itemId: 'Profile',
    height: 300,
    layout: 'fit',
    title: 'User Details',
    scrollable: true,

    items: [{
        xtype: 'dataview',
        cls: 'profile-dataview',
        padding: 20,
        itemSelector: 'div',
        store: {
            type: 'userstore'
        },
        itemTpl: [
            '<span>',
            '<img class="profile-img" src="{profileImg}"/>',
            '<strong>{username}</strong>',
            '<i class="x-fa fa-mobile icon"></i>',
            '</span>',
            '<span class="active-time"><span><i class="x-fa fa-clock icon clock-icon"></i>{activeTime} ago</span></span><br>',
            '{description}',
            '<span class="activity-icons"><span><i class="x-fa fa-thumbs-up icon"></i><i class="x-fa fa-thumbs-down icon"></i><i class="x-fa fa-wechat icon"></i></span></span>'
        ],
        scrollable: 'y'
    }]
});
