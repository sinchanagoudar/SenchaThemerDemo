Ext.define('SenchaThemerDemo.view.main.Review.FAQS', {
    extend: 'Ext.panel.Panel',
    xtype: 'faqs',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: true,
    defaults: {
        xtype: 'panel',
        collapsible: true,
        collapsed: false,
        margin: '10 0 0 0',
        layout: {
            type: 'hbox',
            align: 'stretch'
        }
    },
    items: [
        {
            title: 'What is Ext JS?',
            collapsed: true,
            items: [
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">What is Ext JS?</div>',
                        '<div class="card-content">Ext JS is a JavaScript framework for building data-intensive, cross-platform web applications using JavaScript, CSS, and HTML.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">Why use Ext JS?</div>',
                        '<div class="card-content">Ext JS provides a robust set of components, making it easy to build complex user interfaces with less effort.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">How do I install Ext JS?</div>',
                        '<div class="card-content">You can install Ext JS using npm or by downloading the framework from the Sencha website.</div>',
                        '</div>',
                        '</div>'
                    )
                }
            ]
        },
        {
            title: 'Main Components of Ext JS',
            collapsed: false,
            items: [
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">What components are available?</div>',
                        '<div class="card-content">Ext JS offers components such as grids, forms, trees, and charts for data-centric applications.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">What are grids in Ext JS?</div>',
                        '<div class="card-content">Grids are data tables with options for sorting, filtering, and grouping, including pivot grids.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">What are forms in Ext JS?</div>',
                        '<div class="card-content">Forms enable data input with support for validation and complex field layouts.</div>',
                        '</div>',
                        '</div>'
                    )
                }
            ]
        },
        {
            title: 'Support Options',
            collapsed: false,
            items: [
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">Documentation</div>',
                        '<div class="card-content">Ext JS provides extensive documentation on its API and components.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">Community Support</div>',
                        '<div class="card-content">The Sencha community forum is available for sharing tips and asking questions.</div>',
                        '</div>',
                        '</div>'
                    )
                },
                {
                    xtype: 'dataview',
                    flex: 1,
                    itemSelector: 'div.card',
                    tpl: new Ext.XTemplate(
                        '<div class="dataview-container">',
                        '<div class="card">',
                        '<div class="card-title">Paid Support</div>',
                        '<div class="card-content">Sencha offers paid support packages with dedicated help and consultation for Sencha products.</div>',
                        '</div>',
                        '</div>'
                    )
                }
            ]
        }
    ]
});
