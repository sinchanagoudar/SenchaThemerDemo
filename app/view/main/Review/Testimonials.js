Ext.define('SenchaThemerDemo.view.main.Review.Testimonials', {
    extend: 'Ext.container.Container',
    xtype: 'testimonials',
    cls: 'testimonials',

    requires: [
        'Ext.Component',
        'Ext.Button',
        'Ext.slider.Single'
    ],

    margin: '20 0 0 0',

    layout: 'fit',

    items: [
        {
            xtype: 'component',
            html: `
                <svg xmlns="http://www.w3.org/2000/svg" style="display: none;"> 
                    <symbol viewBox="0 0 43.763 23.214">
                        <g id="arrow-left" transform="translate(2.886 2.823)">
                            <line id="Line_183" data-name="Line 183" x1="38.495" transform="translate(0.382 8.862)" fill="none"
                                stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" />
                            <line id="Line_184" data-name="Line 184" y1="8.205" x2="9.256" transform="translate(0.382 0)"
                                fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" />
                            <line id="Line_185" data-name="Line 185" x2="10" y2="9" transform="translate(-0.062 8.566)" fill="none"
                                stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" />
                        </g>
                    </symbol>
                    <symbol id="arrow" viewBox="0 0 400.004 400.004" style="enable-background:new 0 0 400.004 400.004;" xml:space="preserve">
                        <g>
                            <path d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
                            c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
                            c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
                            C400.004,190.438,392.251,182.686,382.688,182.686z" />
                        </g>
                    </symbol>
                </svg>
                
                <section class="half-color-box">
                    <div class="container spacer por">
                        <div class="text-white text-center ml-3">
                            <h1 class="bold">What Clients Say</h1>
                            <p class="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, at!
                            </p>
                        </div>
                        <div class="test-arrowbox">
                            <div class="swiper-button-prev-test">
                                <svg fill="#ffffff" height="34" class="arrow left">
                                    <use xlink:href="#arrow" />
                                </svg>
                            </div>
                            <div class="swiper-button-next-test">
                                <div class="arrow-right">
                                    <svg fill="#ffffff" height="60" width="60" class="arrow">
                                        <use xlink:href="#arrow" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-container swiper-testimonial">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="review-box">
                                      <div class="media">
    <img class="mr-3" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="Generic placeholder image" style="height: 50px; width: 50px;">
    <div class="media-body">
        <h5>Amanda Jackson</h5>
        <p class="user-post">CEO, NRD Group</p>
    </div>
</div>

                                        <p class="read">
                                            It has survived not only five centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the race.
                                        </p>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="review-box">
                                        <div class="media">
                                            <img class="mr-3" src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt="Generic placeholder image" style="height: 50px; width: 50px;">
                                            <div class="media-body">
                                                <h5>Sinchan Goudar</h5>
                                                <p class="user-post">CEO, NRD Group</p>
                                            </div>
                                        </div>
                                        <p class="read">
                                            It has survived not only five centuries, but also the leap into electronic typesetting,
                                            remaining essentially unchanged. It was popularised in the 1960s with the race.
                                        </p>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="review-box">
                                        <div class="media">
                                            <img class="mr-3" src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png" alt="Generic placeholder image" style="height: 50px; width: 50px;">
                                            <div class="media-body">
                                                <h5>John Doe</h5>
                                                <p class="user-post">Founder, Example Inc.</p>
                                            </div>
                                        </div>
                                        <p class="read">
                                            The quick brown fox jumps over the lazy dog. It's a classic example of a sentence that uses every letter of the alphabet.
                                            it was very nice experience.
                                        </p>
                                    </div>
                                </div>
                                <!-- New testimonials added here -->
                                <div class="swiper-slide">
                                    <div class="review-box">
                                        <div class="media">
                                            <img class="mr-3" src="https://picsum.photos/50/50" alt="Generic placeholder image">
                                            <div class="media-body">
                                                <h5>Jane Smith</h5>
                                                <p class="user-post">Manager, ABC Corp.</p>
                                            </div>
                                        </div>
                                        <p class="read">
                                            The service provided by this company is exceptional. They really go the extra mile to meet customer needs.
                                            I was satiesfied with the service. The team was very supportive.
                                        </p>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="review-box">
                                        <div class="media">
                                            <img class="mr-3" src="https://picsum.photos/50/50" alt="Generic placeholder image">
                                            <div class="media-body">
                                                <h5>Michael Williams</h5>
                                                <p class="user-post">Director, XYZ Ltd.</p>
                                            </div>
                                        </div>
                                        <p class="read">
                                            I’ve been using this service for over a year now, and it has never disappointed me. Highly recommend it!
                                            Amazing service by the company, the service they gave was very impressive.
                                        </p>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="review-box">
                                        <div class="media">
                                            <img class="mr-3" src="https://picsum.photos/50/50" alt="Generic placeholder image">
                                            <div class="media-body">
                                                <h5>Emily Davis</h5>
                                                <p class="user-post">CTO, LMN Technologies</p>
                                            </div>
                                        </div>
                                        <p class="read">
                                            Excellent customer support and an amazing product. I will definitely continue to use and recommend this service.
                                            Really thankfull to the company for their exceptional service.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </section>
            `
        }
    ],
    listeners: {
        afterrender: function () {
            debugger;  // This will allow you to debug the execution flow.
            console.log('Component rendered!');

            // Initialize Swiper once the component is rendered
            var swiper = new Swiper('.swiper-container.swiper-testimonial', {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next-test',
                    prevEl: '.swiper-button-prev-test',
                },
            });
        }
    }
});


