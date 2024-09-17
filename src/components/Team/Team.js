import React, { Component } from "react";
import "../Team/Team.css";

import StephenCollier from "../../img/Team/StephenCollier.svg";
import FerrisWonder from "../../img/Team/FerrisWonder.svg";
import NikoFerry from "../../img/Team/NikoFerry.svg";
import NolanPeters from "../../img/Team/NolanPeters.svg";
import AriaStone from "../../img/Team/AriaStone.svg";

class Team extends Component {
    render() {
        return (
            <div className="container">
                <div id="team-frame" className="to-change-frame">
                    <div className="team-content">
                        <div className="team-content-text">
                            <span className="team-content-text-header to-change-text">
                                Meet our team
                            </span>
                            <span className="team-content-text-desc to-change-text">
                                Wishbone's multitalented team comprises
                                visionary architects, experienced engineers, and
                                skilled project managers dedicated to design
                                excellence.
                            </span>
                            <button className="team-content-text-button">
                                <span className="team-content-text-button-text to-change-text">
                                    See team
                                </span>
                            </button>
                        </div>

                        <div className="team-content-people">
                            <div className="team-content-people-first">
                                <div className="team-content-people-frame">
                                    <img src={StephenCollier} alt="" />

                                    <div className="team-content-people-frame-text">
                                        <span
                                            className="team-content-people-frame-text-name to-change-text"
                                            id="team-content-people-frame-text-name-first"
                                        >
                                            Stephen Collier
                                        </span>
                                        <span
                                            className="team-content-people-frame-text-position to-change-text"
                                            id="team-content-people-frame-text-position-first"
                                        >
                                            Senior Partner
                                        </span>
                                    </div>
                                </div>

                                <div className="team-content-people-frame">
                                    <img src={FerrisWonder} alt="" />

                                    <div className="team-content-people-frame-text">
                                        <span
                                            className="team-content-people-frame-text-name to-change-text"
                                            id="team-content-people-frame-text-name-second"
                                        >
                                            Ferris Wonder
                                        </span>
                                        <span
                                            className="team-content-people-frame-text-position to-change-text"
                                            id="team-content-people-frame-text-position-second"
                                        >
                                            Associate Partner
                                        </span>
                                    </div>
                                </div>

                                <div className="team-content-people-frame">
                                    <img src={NikoFerry} alt="" />

                                    <div className="team-content-people-frame-text">
                                        <span
                                            className="team-content-people-frame-text-name to-change-text"
                                            id="team-content-people-frame-text-name-third"
                                        >
                                            Niko Ferry
                                        </span>
                                        <span
                                            className="team-content-people-frame-text-position to-change-text"
                                            id="team-content-people-frame-text-position-third"
                                        >
                                            Partner
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="team-content-people-first">
                                <div
                                    className="team-content-people-frame"
                                    id="team-content-people-frame-adaptive"
                                >
                                    <img src={NolanPeters} alt="" />

                                    <div className="team-content-people-frame-text">
                                        <span
                                            className="team-content-people-frame-text-name to-change-text"
                                            id="team-content-people-frame-text-name-fourth"
                                        >
                                            Nolan Peters
                                        </span>
                                        <span
                                            className="team-content-people-frame-text-position to-change-text"
                                            id="team-content-people-frame-text-position-fourth"
                                        >
                                            Associate
                                        </span>
                                    </div>
                                </div>

                                <div className="team-content-people-frame">
                                    <img src={AriaStone} alt="" />

                                    <div className="team-content-people-frame-text">
                                        <span
                                            className="team-content-people-frame-text-name to-change-text"
                                            id="team-content-people-frame-text-name-fivth"
                                        >
                                            Aria Stone
                                        </span>
                                        <span
                                            className="team-content-people-frame-text-position to-change-text"
                                            id="team-content-people-frame-text-position-fivth"
                                        >
                                            Senior Partner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
