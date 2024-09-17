import React, { Component } from "react";
import ProfilePic from "../../img/Utilities/ProfilePic.svg";
import Logo from "../../img/Header/IMAGE.svg";
import "../Header/Header.css";

class Header extends Component {
    render() {
        return (
            <header className="container">
                <div className="header-frame">
                    <div className="header-content">
                        <img
                            src={Logo}
                            alt="Wishbone + Partners Logo"
                            className="to-change-logo"
                        />

                        <nav className="header-content-nav">
                            <img
                                src={ProfilePic}
                                alt=""
                                id="header-content-nav-profile"
                            />
                            <a
                                href="#projects-frame"
                                className="header-content-nav-projects"
                            >
                                Projects
                            </a>
                            <a
                                href="#firm-frame"
                                className="header-content-nav-about"
                            >
                                About
                            </a>
                            <a
                                href="#team-frame"
                                className="header-content-nav-team"
                            >
                                Team
                            </a>
                            <a
                                href="#above-footer-frame"
                                className="header-content-nav-contact"
                            >
                                Contact
                            </a>
                            <div className="header-content-nav-rectangle">
                                <span className="header-content-nav-rectangle-text">
                                    Get template
                                </span>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
