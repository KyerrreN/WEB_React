import React, { Component } from "react";
import "../../css/Footer/Footer.css";

import Logo from "../../img/Footer/Wishbone.svg";
import Phone from "../../img/Footer/Phone.svg";
import Email from "../../img/Footer/Email.svg";
import Github from "../../img/Footer/Github.svg";
import GoogleMap from "../../img/Footer/Map.svg";
import Twitter from "../../img/Footer/Twitter.svg";
import Inst from "../../img/Footer/Inst.svg";
import Facebook from "../../img/Footer/FB.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="footer-frame to-change-frame">
                    <div className="footer-content">
                        <div className="footer-content-text">
                            <img src={Logo} alt="" className="to-change-logo" />

                            <div className="footer-content-text-desc">
                                <span className="footer-content-text-desc-powered to-change-text">
                                    Powered by Webflow
                                </span>

                                <span className="footer-content-text-desc-powered to-change-text">
                                    All rights reserved Wishbone+Partners,
                                    Inc.Licensing
                                </span>
                            </div>

                            <div className="footer-content-text-buttons">
                                <button className="footer-content-text-button-language to-change-text to-change-button">
                                    Change language
                                </button>
                                <button className="footer-content-text-button-theme to-change-text to-change-button">
                                    Change theme
                                </button>
                            </div>
                        </div>

                        <div className="footer-content-socials">
                            <a href="tel:+123456789">
                                <img
                                    src={Phone}
                                    alt=""
                                    className="footer-content-socials-custom-pictures to-change-logo"
                                />
                            </a>
                            <a href="mailto:kyerrrenmgt@gmail.com">
                                <img
                                    src={Email}
                                    alt=""
                                    className="footer-content-socials-custom-pictures to-change-logo"
                                />
                            </a>
                            <a href="https://github.com/KyerrreN">
                                <img
                                    src={Github}
                                    alt=""
                                    className="footer-content-socials-custom-pictures to-change-logo"
                                />
                            </a>
                            <a href="https://maps.app.goo.gl/FwnXMK7WkAswXwHa8">
                                <img
                                    src={GoogleMap}
                                    alt=""
                                    className="footer-content-socials-custom-pictures to-change-logo"
                                />
                            </a>
                            <img
                                src={Twitter}
                                alt=""
                                className="to-change-logo"
                            />
                            <img src={Inst} alt="" className="to-change-logo" />
                            <img
                                src={Facebook}
                                alt=""
                                className="to-change-logo"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
