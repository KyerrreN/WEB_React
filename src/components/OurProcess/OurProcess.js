import React, { Component } from "react";
import Left from "../../img/OurProcess/Left.svg";
import Middle from "../../img/OurProcess/Middle.svg";
import Right from "../../img/OurProcess/Right.svg";
import "../../css/OurProcess/OurProcess.css";

class OurProcess extends Component {
    render() {
        return (
            <div className="container">
                <div className="our-process-frame to-change-frame">
                    <div className="our-process-content">
                        <div className="our-process-content-text">
                            <span className="our-process-content-text-header to-change-text">
                                Our process
                            </span>
                            <span className="our-process-content-text-desc to-change-text">
                                How we do what we do.
                            </span>
                        </div>

                        <div className="our-process-content-desc">
                            <div className="our-process-content-desc-frame">
                                <img
                                    src={Left}
                                    alt=""
                                    className="to-change-logo"
                                />
                                <span
                                    id="our-process-content-desc-sketching"
                                    className="to-change-text"
                                >
                                    Sketching
                                </span>
                                <span
                                    id="our-process-content-desc-left"
                                    className="to-change-text"
                                >
                                    Wishbone's design process starts with
                                    detailed sketching, capturing concepts and
                                    iterating ideas on paper before
                                    construction.
                                </span>
                            </div>

                            <div className="our-process-content-desc-frame">
                                <img
                                    src={Middle}
                                    alt=""
                                    className="to-change-logo"
                                />
                                <span
                                    id="our-process-content-desc-finalizing"
                                    className="to-change-text"
                                >
                                    Finalizing
                                </span>
                                <span
                                    id="our-process-content-desc-middle"
                                    className="to-change-text"
                                >
                                    Wishbone carefully finalizes plans, ensuring
                                    every design element aligns with client
                                    vision and sustainability goals.
                                </span>
                            </div>

                            <div className="our-process-content-desc-frame">
                                <img
                                    src={Right}
                                    alt=""
                                    className="to-change-logo"
                                />
                                <span
                                    id="our-process-content-desc-building"
                                    className="to-change-text"
                                >
                                    Building
                                </span>
                                <span
                                    id="our-process-content-desc-right"
                                    className="to-change-text"
                                >
                                    Wishbone expertly oversees construction,
                                    translating designs into sustainable,
                                    functional buildings.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurProcess;
