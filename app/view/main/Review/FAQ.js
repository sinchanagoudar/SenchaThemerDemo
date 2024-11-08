Ext.define('SenchaThemerDemo.view.main.Review.FAQ', {
    extend: 'Ext.panel.Panel',
    xtype: 'faq',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: '100%',
    height: 630,

    items: [
        {
            xtype: 'tabpanel',
            flex: 1,
            items: [
                {
                    title: 'FAQ',
                    xtype: 'faqs'
                },
                {
                    title: 'Testimonials',
                    xtype: 'testimonials'
                    // xtype: 'svgdefs'
                }
            ]
        }
    ]
}); 