Ext.define('SenchaThemerDemo.view.main.FAQ', {
    extend: 'Ext.panel.Panel',
    xtype: 'faq',

    title: 'Frequently Asked Questions',
    width: '100%',
    height: 400,
    layout: 'accordion',

    // Enable scrolling for the panel
    scrollable: true,

    items: [
        {
            title: 'What is Ext JS?',
            html: 'Ext JS is a JavaScript framework for building data-intensive, cross-platform web applications using JavaScript, CSS, and HTML.',
            collapsible: true,
            collapsed: true 
        },
        {
            title: 'How do I install Ext JS?',
            html: 'You can install Ext JS using npm or by downloading the framework from the Sencha website.',
            collapsible: true,
            collapsed: true
        },
        {
            title: 'What are the main components of Ext JS?',
            html: 'Ext JS includes a wide range of components like grids, forms, trees, and charts to create modern web applications.',
            collapsible: true,
            collapsed: true 
        },
        {
            title: 'Is Ext JS free to use?',
            html: 'Ext JS is a commercial framework, but it offers a free version called Ext Gantt that can be used for project management applications.',
            collapsible: true,
            collapsed: true 
        },
        {
            title: 'Where can I find support for Ext JS?',
            html: 'You can find support through the Sencha forums, documentation, and paid support options on their website.',
            collapsible: true,
            collapsed: true 
        }
    ],

    initComponent: function() {
        this.callParent(arguments);
    }
});
