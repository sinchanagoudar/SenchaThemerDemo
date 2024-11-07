Ext.define('SenchaThemerDemo.view.main.FAQ', {
    extend: 'Ext.panel.Panel',
    xtype: 'faq',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    width: '100%',
   height: 550,

    items: [
        {
            xtype: 'tabpanel',
            flex: 1,
            items: [
                {
                    title: 'FAQ',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    scrollable: true,
                    defaults: {
                        xtype: 'panel',
                        collapsible: true,
                        collapsed: false,
                        margin:'10 0 0 0'
                    },
                    items: [
                        {
                            title: 'What is Ext JS?',
                            html: '<div style="padding:15px">Ext JS is a JavaScript framework for building data-intensive, cross-platform web applications using JavaScript, CSS, and HTML.</div>'
                        },
                        {
                            title: 'How do I install Ext JS?',
                            html: '<div style="padding:15px">You can install Ext JS using npm or by downloading the framework from the Sencha website.</div>'
                        },
                        {
                            title: 'What are the main components of Ext JS?',
                            html: '<div style="padding:15px">Ext JS includes a wide range of components like grids, forms, trees, and charts to create modern web applications.</div>'
                        },
                        {
                            title: 'Is Ext JS free to use?',
                            html: '<div style="padding:15px">Ext JS is a commercial framework, but it offers a free version called Ext Gantt that can be used for project management applications.</div>'
                        },
                        {
                            title: 'Where can I find support for Ext JS?',
                            html: '<div style="padding:15px">You can find support through the Sencha forums, documentation, and paid support options on their website.</div>'
                        }
                    ]
                },

                {
                    title: 'Testimonials',
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    scrollable: true,
                    defaults: {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        flex: 1
                    },
                    items: [
                        {
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                       <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="John Doe" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>John Doe</strong>
                                                <p style="margin: 5px 0;">"Exceptional service! I’m beyond thrilled with the outcome."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                        <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Jane Smith" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Jane Smith</strong>
                                                <p style="margin: 5px 0;">"Wonderful experience! I couldn’t be happier with the results."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                        <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/1154642632/photo/close-up-portrait-of-brunette-woman.jpg?s=612x612&w=0&k=20&c=d8W_C2D-2rXlnkyl8EirpHGf-GpM62gBjpDoNryy98U=" alt="Sarah White" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Xavier xmio</strong>
                                                <p style="margin: 5px 0;">"Impressive work! I’m thoroughly pleased with the final outcome."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/1338289824/photo/close-up-image-of-indian-man-with-buzz-cut-hairstyle-to-disguise-receding-hairline-wearing-t.webp?a=1&b=1&s=612x612&w=0&k=20&c=_ZCZV9OPRVboaD2NxLUb7F1XdKdvyNQSYW3eyqUxzUQ=" alt="Michael Lee" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Michael Lee</strong>
                                                <p style="margin: 5px 0;">"Outstanding service! I'm completely satisfied with the results."</p>
                                            </div>
                                        </div>
                                    `
                                },
                            ]
                        },

                        {
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?a=1&b=1&s=612x612&w=0&k=20&c=u5RPl326UFf1oyrM1iLFJtqdQ3K28TdBdSaSPKeCrdc=" alt="Michael Lee" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Xin Moon Lee</strong>
                                                <p style="margin: 5px 0;">"Incredible experience! I'm truly happy with how things turned out."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="Sarah White" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Eminem wink</strong>
                                                <p style="margin: 5px 0;">"Fantastic service! I am extremely pleased with the results."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="Sarah White" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Nicole Kevin</strong>
                                                <p style="margin: 5px 0;">"Superb experience! I am so satisfied with the outcome."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww" alt="Michael Lee" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>park shin Lee</strong>
                                                <p style="margin: 5px 0;">"Unbelievable work! I’m more than happy with the results."</p>
                                            </div>
                                        </div>
                                    `
                                },
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '10 0 10 10',
                                    cls: 'cardPanel',
                                    width: 220,
                                    border: true,
                                    bodyPadding: 10,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/938709362/photo/portrait-of-a-girl.webp?a=1&b=1&s=612x612&w=0&k=20&c=WNAd2QlsKBev4QdNoX7aumAZ--5uC7zJFAGKkSSOltQ=" alt="Michael Lee" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Mahima bae Lee</strong>
                                                <p style="margin: 5px 0;">Incredible service! I’m completely thrilled with the results."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '0 10 10 0',
                                    border: true,
                                    bodyPadding: 15,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=MfdvUjMRNMRgW8DfvlEMiFjm8vcJW_2BC2FFWcm2unI=" alt="Sarah White" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Jonny Dip</strong>
                                                <p style="margin: 5px 0;">"Unmatched experience! I couldn’t be more satisfied with the outcome."</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '0 10 10 0',
                                    border: true,
                                    bodyPadding: 15,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt="Sarah White" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Khloe kim</strong>
                                                <p style="margin: 5px 0;">"I'm extremely satisfied with the results"</p>
                                            </div>
                                        </div>
                                    `
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margin: '0 10 10 0',
                                    border: true,
                                    bodyPadding: 15,
                                    html: `
                                         <div class="testimonial-panel" style="display: flex; align-items: center;">
                                            <img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" alt="Michael Lee" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                                            <div>
                                                <strong>Michael Lee</strong>
                                                <p style="margin: 5px 0;">"Outstanding service! I’m thrilled with the final result!"</p>
                                            </div>
                                        </div>
                                    `
                                },
                            ]
                        }
                    ]
                }
            ],

        },

    ],

    initComponent: function () {
        this.callParent(arguments);
    }
});