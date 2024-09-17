import React, { Component } from "react";
import "../HamburgerMenu/HamburgerMenu.css";

class HamburgerMenu extends Component {
    render() {
        return (
            <div className="off-screen-menu to-change-frame">
                <img
                    src="../Pictures/Utilities/ProfilePic.svg"
                    alt=""
                    id="off-screen-menu-profile"
                />
                <a
                    href=""
                    id="off-screen-menu-logout"
                    className="to-change-text"
                >
                    Log out
                </a>
                <a
                    href="../WebPages/Authorization.html"
                    id="off-screen-menu-login"
                    className="to-change-text"
                >
                    Login
                </a>
                <a
                    href="../WebPages/Admin.html"
                    id="ham-admin"
                    className="to-change-text"
                >
                    Admin panel
                </a>
                <a
                    href="#projects-frame"
                    id="ham-projects"
                    className="to-change-text"
                >
                    Projects
                </a>
                <a href="#firm-frame" id="ham-about" className="to-change-text">
                    About
                </a>
                <a
                    href="../WebPages/News.html"
                    id="ham-news"
                    className="to-change-text"
                >
                    News
                </a>
                <a href="#team-frame" id="ham-team" className="to-change-text">
                    Team
                </a>
                <a
                    href="#above-footer-frame"
                    id="ham-contact"
                    className="to-change-text"
                >
                    Contact
                </a>
                <a
                    href=""
                    className="header-content-nav-rectangle to-change-text"
                >
                    Get Template
                </a>
            </div>
        );
    }
}

export default HamburgerMenu;
