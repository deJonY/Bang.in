import React from 'react';
import "../section/Section2.css";
import productImg1 from "../img/Magobox-mini-Fullset.png";
import productImg2 from "../img/Composting-Ecobali.png";
import productImg3 from "../img/Composting-tools-2.png";
import productImg4 from "../img/Mesin-Conveyor-Belt.png";
import productImg5 from "../img/Home-Biogas.png";
import productImg6 from "../img/Flip-2in1-1.png";
import light from "../img/Ellipse 29.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import logo1 from "../img/15636900098394-20230620111943 1.png";
import logo2 from "../img/Jogja_Istimewa_Wordmark (1) 1.png";
import logo3 from "../img/logo_master (1).png";

function Section2() {
    return (
        <div className="container center">
            <p className="S2-Title1">Top Selling</p>
            <p className="S2-Title2">Waste Processing Product</p>

            <div className="row productCard">
                <div className="col-xl-4 product1">
                    <img src={productImg1} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Magokits Pack</p>
                        <p className="price">Rp. 150.000</p>
                    </div>
                </div>
                <div className="col-xl-4 product1">
                    <img src={productImg2} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Composing Tools</p>
                        <p className="price">Rp. 1.550.000</p>
                    </div>
                </div>
                <div className="col-xl-4 product1">
                    <img src={productImg3} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Composter Full Pack</p>
                        <p className="price">Rp. 300.000</p>
                    </div>
                </div>
            </div>
            <div className="row productCard">
                <div className="col-xl-4 product2">
                    <img src={productImg4} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Magokits Pack</p>
                        <p className="price">Rp. 150.000</p>
                    </div>
                </div>
                <div className="col-xl-4 product2">
                    <img src={productImg5} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Composing Tools</p>
                        <p className="price">Rp. 1.550.000</p>
                    </div>
                </div>
                <div className="col-xl-4 product2">
                    <img src={productImg6} alt="" className="productImg"/>

                    <div className="name-price">
                        <p className="productName">Composter Full Pack</p>
                        <p className="price">Rp. 300.000</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-1"/>
                <div className="col-xl-4 textLeft">
                    <p className="S2-Title3">Testimonial</p>
                    <p className="S2-Title4">What people say about us.</p>

                    <img src={light} alt="" className="GreenLight"/>
                </div>
                <div className="col-xl-7">
                    <OwlCarousel className="owl-theme"
                                 keyParams="option"
                                 itemScope={true}
                                 items={1}
                                 loop={true}
                                 nav={false}
                                 dots={true}
                                 autoplay={true}
                                 autoplaySpeed={100}
                                 margin={10}>
                        <div className='item'>
                            <div className="texts1">
                                <div className="contexts">
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="user">
                                    <p className="userName">Mike taylor</p>
                                    <p className="userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>

                            <div className="dup-texts1">
                                <div className="dup-contexts">
                                    <p className="dup-context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="dup-user">
                                    <p className="dup-userName">Mike taylor</p>
                                    <p className="dup-userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="texts1">
                                <div className="contexts">
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="user">
                                    <p className="userName">Mike taylor</p>
                                    <p className="userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>

                            <div className="dup-texts1">
                                <div className="dup-contexts">
                                    <p className="dup-context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="dup-user">
                                    <p className="dup-userName">Mike taylor</p>
                                    <p className="dup-userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="texts1">
                                <div className="contexts">
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                    <p className="context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="user">
                                    <p className="userName">Mike taylor</p>
                                    <p className="userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>

                            <div className="dup-texts1">
                                <div className="dup-contexts">
                                    <p className="dup-context">“On the Windows talking painted pasture yet its express parties
                                        use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                </div>
                                <div className="dup-user">
                                    <p className="dup-userName">Mike taylor</p>
                                    <p className="dup-userLocation">Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="logos">
                <img src={logo3} alt="" className="logoType"/>
                <img src={logo1} alt="" className="logoType"/>
                <img src={logo2} alt="" className="logoType"/>
            </div>
        </div>
    );
}

export default Section2;