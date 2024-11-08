Ext.define('SenchaThemerDemo.view.main.Grid', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartItem',

    controller: 'main',
    margin: '20 0 0 0',
    title: 'User browser analytics',

    requires: [
        'SenchaThemerDemo.store.Personnel',
        'Ext.chart.theme.Muted'
    ],

    items: [{
        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 270,
        legend: {
            docked: 'bottom'
        },

        store: {
            type: 'cars'
        },

        insetPadding: 20,
        interactions: ['rotate'],
        captions: {
            credits: {
                align: 'left'
            }
        },

        axes: [
            {
                type: 'numeric',
                position: 'radial',
                grid: true,
                majorTickSteps: 4,
                renderer: 'onAxisLabelRender'
            },
            {
                type: 'category',
                position: 'angular',
                grid: true
            }
        ],

        series: ['IE', 'Firefox', 'Chrome', 'Safari'].map(browser => ({
            type: 'radar',
            title: browser,
            angleField: 'month',
            radiusField: `data${['IE', 'Firefox', 'Chrome', 'Safari'].indexOf(browser) + 1}`,
            style: { opacity: 0.40 }
        }))
    }]
});
