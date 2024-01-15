import React from 'react';
import "../component/Footer.css";
import footerLogo from "../img/footer-logo.png";
import googlePLay from "../img/twitter.png";
import appleStore from "../img/instagram.png";
import facebook from "../img/facebook.png";
import instagram from "../img/apple store.png";
import twitter from "../img/google play.png";

function Footer() {
    return (
        <div className="FBGImg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-1"></div>
                    <div className="col-xl-5">
                        <img src={footerLogo} alt="" className="FooterLogo"/>
                        <p className="address">Address : Jl. Ring Road Utara, Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
                        <a href="tel: +62 812 234 6789" className="tell">+62 812 234 6789</a>
                        <a href="https://buangin@services.id" className="mail">buangin@services.id</a>
                    </div>
                    <div className="col-xl-1 px-0">
                        <p className="footerTitle FMTop">Company</p>
                        <a href="#" className="footerLink">About</a>
                        <a href="#" className="footerLink">Careers</a>
                        <a href="#" className="footerLink">Mobile</a>
                    </div>
                    <div className="col-xl-1 px-0">
                        <p className="footerTitle FMTop">Contact</p>
                        <a href="#" className="footerLink">Help/FAQ</a>
                        <a href="#" className="footerLink">Press</a>
                        <a href="#" className="footerLink">Affilates</a>
                    </div>
                    <div className="col-xl-1 px-0">
                        <p className="footerTitle FMTop">More</p>
                        <a href="#" className="footerLink">Airlinefees</a>
                        <a href="#" className="footerLink">Airline</a>
                        <a href="#" className="footerLink">Low fare tips</a>
                    </div>
                    <div className="col-xl-3">
                        <p className="rightTitle">Discover our app</p>

                        <div className="google-apple">
                            <a href="https://play.google.com/store/games?device=windows" className="">
                                <img src={googlePLay} alt="" className="googlePlay"/>
                            </a>
                            <a href="https://www.apple.com/store?cid=oas-us-domains-applestore.com" className="">
                                <img src={appleStore} alt="" className="appleStore"/>
                            </a>
                        </div>
                        <div className="local">
                            <a href="https://www.facebook.com/" className="">
                                <img src={facebook} alt="" className="facebook"/>
                            </a>
                            <a href="https://www.instagram.com" className="">
                                <img src={instagram} alt="" className="instagram"/>
                            </a>
                            <a href="https://www.twitter.com" className="">
                                <img src={twitter} alt="" className="twitter"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;