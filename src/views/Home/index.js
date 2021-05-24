import React from 'react';
import './style.css';

const Home = () => {

    return (
        <div class="chat1">
            <div>
                <div class="head">
                    <div class="head-logo">
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
        </div>
    );
}

export default Home;