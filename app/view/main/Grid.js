Ext.define('SenchaThemerDemo.view.main.Grid', {
    extend: 'Ext.panel.Panel',
    xtype: 'gridlist',

    requires: [
        'SenchaThemerDemo.store.Personnel',
        'Ext.chart.theme.Muted'
    ],

    title:'Car production by largest manufacturers',
    tbar: [
        '->',
        {
            text: 'Preview',
            platformConfig: {
                desktop: {
                    text: 'Download'
                }
            },
            handler: function() {
                var chart = this.lookup('chart');
                if (Ext.isIE8) {
                    Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
                    return;
                }
                if (Ext.os.is.Desktop) {
                    chart.download({
                        format: 'pdf',
                        pdf: {
                            format: 'A5',
                            orientation: 'landscape',
                            border: '1cm'
                        },
                        // filename: 'Car production by largest manufacturers'
                    });
                } else {
                    chart.preview();
                }
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        downloadServerUrl: '//svg.sencha.io',

        width: '100%',
        height: 300,

        legend: {
            type: 'sprite',
            docked: 'bottom',
            marker: {
                type: 'square'
            },
            border: {
                radius: 0
            }
        },
        store: {
            type: 'cars'
        },
        theme: 'Muted',

        captions: {
            title: 'Car production by largest manufacturers',
            credits: 'Source: International Organization of Motor Vehicle Manufacturers'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            fields: ['to', 'gm', 'vw', 'hy', 'fo'],
            renderer: function(axis, label, layoutContext) {
                return layoutContext.renderer(label) + '%';
            }
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'year',
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            stacked: true,
            fullStack: true,

            title: ['Toyota', 'GM', 'Volkswagen', 'Hyundai', 'Ford'],

            xField: 'year',
            yField: ['to', 'gm', 'vw', 'hy', 'fo'],

            style: {
                minGapWidth: 30
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                trackMouse: false,
                renderer: function(tooltip, record, item) {
                    var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
                        manufacturer = item.series.getTitle()[fieldIndex],
                        percent = record.get(item.field) / (
                            record.get('to') + record.get('gm') +
                            record.get('vw') + record.get('hy') +
                            record.get('fo')
                        ) * 100;

                    tooltip.setHtml(manufacturer + ' in ' + record.get('year') + ': ' + percent.toFixed(1) + '%');
                }
            }
        }]
    }]
});
