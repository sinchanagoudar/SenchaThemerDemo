Ext.define('SenchaThemerDemo.view.main.FAQ', {
    extend: 'Ext.container.Container',
    xtype: 'faq',

    title: 'Frequently Asked Questions',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: true,

    defaults: {
        xtype: 'panel',
        collapsible: true,
        collapsed: false
    },

    items: [
        {   
            title: 'What is Ext JS?',
            html: '<div style="padding:15px">Ext JS is a JavaScript framework for building data-intensive, cross-platform web applications using JavaScript, CSS, and HTML.</div>',
        },
        {
            title: 'How do I install Ext JS?',
            html: '<div style="padding:15px">You can install Ext JS using npm or by downloading the framework from the Sencha website.</div>',
        },
        {
            title: 'What are the main components of Ext JS?',
            html: '<div style="padding:15px">Ext JS includes a wide range of components like grids, forms, trees, and charts to create modern web applications.</div>',
        },
        {
            title: 'Is Ext JS free to use?',
            html: '<div style="padding:15px">Ext JS is a commercial framework, but it offers a free version called Ext Gantt that can be used for project management applications.</div>',
        },
        {
            title: 'Where can I find support for Ext JS?',
            html: '<div style="padding:15px">You can find support through the Sencha forums, documentation, and paid support options on their website.</div>',
        }
    ],

    initComponent: function () {
        this.callParent(arguments);
    }
});
