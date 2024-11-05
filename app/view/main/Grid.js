Ext.define('SenchaThemerDemo.view.main.Grid', {
    extend: 'Ext.panel.Panel',
    xtype: 'chartItem',

    controller: 'main',

    requires: [
        'SenchaThemerDemo.store.Personnel',
        'Ext.chart.theme.Muted'
    ],

    title: 'User browser analytics',

    items: [{

        xtype: 'polar',
        reference: 'chart',
        width: '100%',
        height: 200,
        legend: {
            docked: 'right'
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
        axes: [{
            type: 'numeric',
            position: 'radial',
            grid: true,
            majorTickSteps: 4,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'angular',
            grid: true
        }],
        series: [{
            type: 'radar',
            title: 'IE',
            angleField: 'month',
            radiusField: 'data1',
            style: {
                opacity: 0.40
            }
        }, {
            type: 'radar',
            title: 'Firefox',
            angleField: 'month',
            radiusField: 'data2',
            style: {
                opacity: 0.40
            }
        }, {
            type: 'radar',
            title: 'Chrome',
            angleField: 'month',
            radiusField: 'data3',
            style: {
                opacity: 0.40
            }
        }, {
            type: 'radar',
            title: 'Safari',
            angleField: 'month',
            radiusField: 'data4',
            style: {
                opacity: 0.40
            }
        }]
    }]
});
