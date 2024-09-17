import React, { Component } from "react";
import "../HamburgerNavigation/HamburgerNavigation.css";

class HamburgerNavigation extends Component {
    render() {
        return (
            <nav className="container to-change-frame">
                <div className="ham-menu">
                    <span className="to-change-line"></span>
                    <span className="to-change-line"></span>
                    <span className="to-change-line"></span>
                </div>
            </nav>
        );
    }
}

export default HamburgerNavigation;
