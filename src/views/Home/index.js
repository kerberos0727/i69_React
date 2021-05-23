import React from 'react';
import './style.css';

const Home = () => {

    return (
        <div class="chat1">
            <div>
                <div class="head">
                    <div class="head-logo">
                        <div class="dropdown dropleft float-right">
                            <img
                                src={require('../../assets/images/home/img7.jpg')}
                                alt="" data-toggle="dropdown"
                            />
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Link 1</a>
                                <a class="dropdown-item" href="#">Link 2</a>
                                <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </div>
                        {/* <span class="svg-icon svg-icon-primary svg-icon-2x">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg_first" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999) " />
                                </g>
                            </svg>
                        </span> */}
                        <div style={{ textAlign: 'center' }}>
                            <font>SEARCH RESULTS</font>
                        </div>

                    </div>
                    <div id="head-a" class="head-a">
                        <a href="#">RANDOM</a>
                        <a href="#">POPULAR</a>
                        <a href="#">MOST ACTIVE</a>
                    </div>
                </div>

                <div class="contants">
                    <div class="">
                        <img src={require('../../assets/images/home/chart_coins.png')} alt="" class="main_img" />
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img8.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img9.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img10.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img8.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img9.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                    <div class="">
                        <img src={require('../../assets/images/home/img10.jpg')} alt="" />
                        <div class="contants-text-bg">
                            <font>CSS Template</font>
                        </div>
                    </div>
                </div>
                <div class="space"></div>

            </div>
            {/* <div class="footer">
                <div class="footer_body">
                    <div class="footer_container">
                        <div>
                            <span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgs" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" class="svg_text" fill-rule="nonzero" opacity="0.3" />
                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" class="svg_text" fill-rule="nonzero" />
                                </g>
                            </svg></span>
                        </div>
                        <div>
                            <span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgs" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <polygon class="svg_text" opacity="0.3" points="5 15 3 21.5 9.5 19.5" />
                                    <path d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M8.5,13 C9.32842712,13 10,12.3284271 10,11.5 C10,10.6715729 9.32842712,10 8.5,10 C7.67157288,10 7,10.6715729 7,11.5 C7,12.3284271 7.67157288,13 8.5,13 Z M13.5,13 C14.3284271,13 15,12.3284271 15,11.5 C15,10.6715729 14.3284271,10 13.5,10 C12.6715729,10 12,10.6715729 12,11.5 C12,12.3284271 12.6715729,13 13.5,13 Z M18.5,13 C19.3284271,13 20,12.3284271 20,11.5 C20,10.6715729 19.3284271,10 18.5,10 C17.6715729,10 17,10.6715729 17,11.5 C17,12.3284271 17.6715729,13 18.5,13 Z" class="svg_text" />
                                </g>
                            </svg></span>
                        </div>
                        <div>
                            <span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svgs" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" class="svg_text" fill-rule="nonzero" opacity="0.3" />
                                    <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" class="svg_text" fill-rule="nonzero" />
                                </g>
                            </svg></span>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home;