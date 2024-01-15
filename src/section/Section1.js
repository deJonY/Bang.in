import React from 'react';
import "../section/Section1.css";
import service1 from "../img/icon1.png";
import service2 from "../img/Vector (74).png";
import service3 from "../img/Vector (75).png";

function Section1() {
    return (
        <div className="container">
            <div className="client">
                <div className="number-text">
                    <p className="num">200+</p>
                    <p className="work">Member</p>
                </div>
                <div className="number-text">
                    <p className="num">20</p>
                    <p className="work">Waste Bank</p>
                </div>
                <div className="number-text">
                    <p className="num">50</p>
                    <p className="work">Products</p>
                </div>
                <div className="number-text">
                    <p className="num">150</p>
                    <p className="work">Course Education</p>
                </div>
            </div>

            <div className="service">
                <p className="S-Title1">Category</p>
                <p className="S-Title2">We Offer Best Service</p>

                <div className="row bigCard">
                    <div className="col-xl-4 miniCard">
                        <div className="logoImg">
                            <img src={service1} alt="" className="serviceImg"/>
                        </div>
                        <p className="serviceTitle">Information & Education</p>
                        <p className="serviceText">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                    <div className="col-xl-4 miniCard">
                        <div className="logoImg">
                            <img src={service2} alt="" className="serviceImg"/>
                        </div>
                        <p className="serviceTitle">Course & Training</p>
                        <p className="serviceText">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                    <div className="col-xl-4 miniCard">
                        <div className="logoImg">
                            <img src={service3} alt="" className="serviceImg"/>
                        </div>
                        <p className="serviceTitle">Waste Recycling</p>
                        <p className="serviceText">Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;