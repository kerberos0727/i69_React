import React from 'react';
import '../../assets/css/style.css'

const Userinfo = () => {
    return (
        <div style={{ marginTop: 80 }}>
            <div class="header-control h-c-g">
                <i class="fa fa-angle-left gold-icon" aria-hidden="true"></i>
                <div style={{ flex: 1 }}>
                    <h5 style={{ width: '20%' }}>TRESASURE</h5>
                </div>

                <img src={require('../../assets/images/login/logo-right.jpg')} />
            </div>

            <div class="row m-0 p-0 ">
                <div class="user-img-parent-div col-lg-7 col-12 px-0">
                    <div id="carouselExampleIndicators" class="carousel user-info-slider slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" id="aniimated-thumbnials">
                            <div class="carousel-item active">
                                <img src={require('../../assets/images/login/dummy-01.jpg')} class="d-block w-100" alt="..." onclick="gallery(this)" />
                            </div>
                            <div class="carousel-item">
                                <img src={require('../../assets/images/login/login-bg.jpg')} class="d-block w-100" alt="..." onclick="gallery(this)" />
                            </div>
                            <div class="carousel-item">
                                <img src={require('../../assets/images/login/login-bg-2.png')} class="d-block w-100" alt="..." onclick="gallery(this)" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>

                </div>
                <div class="tab-content col-lg-5 col-12 px-0" id="nav-tabContent" >
                    <nav class="about-intrest">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                                aria-controls="nav-home" aria-selected="true">ABOUT</a>
                            <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                                aria-controls="nav-profile" aria-selected="false">INTERESTS</a>
                        </div>
                    </nav>
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="about-tab">
                            <h3>Treasure, 18</h3>
                            <p>Top Modal </p>
                            <p>Modal</p>
                            <button class="mt-3 global-btn-2"><i class="fas fa-comment-dots" aria-hidden="true"></i> <span>SEND A MESSAGE</span> </button>
                            <div class="user-info-text mt-4">
                                <span class="gold-color font-weight-bold">About</span>
                                <p>I'm an English modal, singel, and actress :)</p>
                                <div class="user-badge mt-3 ">
                                    <button class="global-btn-3">American Beauty</button>
                                    <button class="global-btn-3">Actress</button>
                                    <button class="global-btn-3">69 Lover</button>
                                </div>
                                <span class="gold-color font-weight-bold mt-3">Political Views</span>
                                <p>Conservative</p>
                                <span class="gold-color font-weight-bold mt-3">Ethnicity</span>
                                <p>White</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="about-tab">
                            <h3>Treasure, 18</h3>
                            <p>Top Modal </p>
                            <p>Modal</p>
                            <button class="mt-3 global-btn-2"><i class="fas fa-comment-dots" aria-hidden="true"></i> <span>SEND A MESSAGE</span> </button>
                            <div class="user-info-text mt-4">
                                <span class="gold-color font-weight-bold">About</span>
                                <p>I'm an English modal, singel, and actress :)</p>
                                <div class="user-badge mt-3 ">
                                    <button class="global-btn-3">American Beauty</button>
                                    <button class="global-btn-3">Actress</button>
                                    <button class="global-btn-3">69 Lover</button>
                                </div>
                                <span class="gold-color font-weight-bold mt-3">Political Views</span>
                                <p>Conservative</p>
                                <span class="gold-color font-weight-bold mt-3">Ethnicity</span>
                                <p>White</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userinfo;