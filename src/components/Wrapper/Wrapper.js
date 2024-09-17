import React, { Component } from "react";
import "../../css/Wrapper/Wrapper.css";
import Header from "../Header/Header.js";
import ModalWindow from "../ModalWindow/ModalWindow.js";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.js";
import HamburgerNavigation from "../HamburgerNavigation/HamburgerNavigation.js";

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <ModalWindow />
                <HamburgerMenu />
                <HamburgerNavigation />
                <Header />
            </div>
        );
    }
}

export default Wrapper;
