Ext.define('SenchaThemerDemo.store.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.navigation',

    root: {
        expanded: true,
        children: [
            { id: 'home', text: 'Home', leaf: true, iconCls: 'x-fa fa-home' },
            { id: 'email', text: 'Email', leaf: true, iconCls: 'x-fa fa-envelope' },
            { id: 'settings', text: 'FAQ', leaf: true, iconCls: 'x-fa fa-cog' },
            { id: 'groups', text: 'Groups', leaf: true, iconCls: 'x-fa fa-users-cog' },
            { id: 'notifications', text: 'Notifications', leaf: true, iconCls: 'x-fa fa-bell' },
            { id: 'analytics', text: 'Analytics', leaf: true, iconCls: 'x-fa fa-chart-bar' },
            { id: 'reports', text: 'Reports', leaf: true, iconCls: 'x-fa fa-file-alt' },
            { id: 'calendar', text: 'Calendar', leaf: true, iconCls: 'x-fa fa-calendar-alt' },
            { id: 'tasks', text: 'Tasks', leaf: true, iconCls: 'x-fa fa-tasks' },
            { id: 'projects', text: 'Projects', leaf: true, iconCls: 'x-fa fa-folder-open' },
            { id: 'contacts', text: 'Contacts', leaf: true, iconCls: 'x-fa fa-address-book' },
            { id: 'support', text: 'Support', leaf: true, iconCls: 'x-fa fa-life-ring' },
            { id: 'profile', text: 'Profile', leaf: true, iconCls: 'x-fa fa-user' },
            { id: 'logout', text: 'Logout', leaf: true, iconCls: 'x-fa fa-sign-out-alt' }
        ]
    }
});
