import React, { Component } from "react";
import "../../css/HamburgerNavigation/HamburgerNavigation.css";

class HamburgerNavigation extends Component {
    render() {
        return (
            <nav class="container to-change-frame">
                <div class="ham-menu">
                    <span class="to-change-line"></span>
                    <span class="to-change-line"></span>
                    <span class="to-change-line"></span>
                </div>
            </nav>
        );
    }
}

export default HamburgerNavigation;
