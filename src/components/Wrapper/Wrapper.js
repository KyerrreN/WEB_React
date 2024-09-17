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
        const processArray = [
            {
                id: 1,
                header: "Sketching",
                description:
                    "Wishbone's design process starts with detailed sketching, capturing concepts and iterating ideas on paper before construction.",
            },
            {
                id: 2,
                header: "Finalizing",
                description:
                    "Wishbone carefully finalizes plans, ensuring every design element aligns with client vision and sustainability goals.",
            },
            {
                id: 3,
                header: "Building",
                description:
                    "Wishbone expertly oversees construction, translating designs into sustainable, functional buildings.",
            },
        ];

        const team = [
            "Stephen Collier",
            "Ferris Wonder",
            "Niko Ferry",
            "Nolan Peters",
            "Aria Stone",
        ];

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
                <FirmInfo name="Stephen Collier" position="Senior Partner" />
                <FirstExample
                    productName="REEDING HOUSE"
                    productDescription="Modern, eco-friendly, minimalist design."
                />
                <OurProcess processes={processArray} />
                <SecondExample
                    productName="THE MARBLE STAIRCASE"
                    productDescription="Elegant marble staircase, architectural centerpiece."
                />
                <Clients
                    header="Happy customers."
                    description="Wishbone's client-centric approach earns rave reviews. Customers laud the firm's collaborative spirit and ability to actualize architectural visions."
                />
                <ThirdExample
                    productName="THE SWIRLING STAIRCASE"
                    productDescription="Sculptural staircase, architectural statement piece."
                />
                <Projects
                    header="Featured projects"
                    desc="Some of the latest and greatest projects from us here at Wishbone+Partners."
                />
                <Team teamNames={team} />
                <AboveFooter
                    header="GET IN TOUCH"
                    desc="Think we would be a good fit for your next project?"
                />
                <Footer />
            </div>
        );
    }
}

export default Wrapper;
