import React, { Component } from "react";
import "../Wrapper/Wrapper.css";
import Header from "../Header/Header.js";
import ModalWindow from "../ModalWindow/ModalWindow.js";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.js";
import HamburgerNavigation from "../HamburgerNavigation/HamburgerNavigation.js";
import Main from "../Main/Main.js";
import FirmInfo from "../FirmInfo/FirmInfo.js";
import FirstExample from "../FirstExample/FirstExample.js";
import OurProcess from "../OurProcess/OurProcess.js";
import SecondExample from "../SecondExample/SecondExample.js";
import Clients from "../Clients/Clients.js";
import ThirdExample from "../ThirdExample/ThirdExample.js";
import Projects from "../Projects/Projects.js";
import Team from "../Team/Team.js";
import AboveFooter from "../AboveFooter/AboveFooter.js";
import Footer from "../Footer/Footer.js";

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <ModalWindow />
                <HamburgerMenu />
                <HamburgerNavigation />
                <Header />
                <Main
                    companyName="Wishbone+Partners"
                    companyHeader="The home of beautiful architecture."
                />
                <FirmInfo />
                <FirstExample />
                <OurProcess />
                <SecondExample />
                <Clients />
                <ThirdExample />
                <Projects />
                <Team />
                <AboveFooter />
                <Footer />
            </div>
        );
    }
}

export default Wrapper;
