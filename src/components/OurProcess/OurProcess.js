import React, { Component } from "react";
import Left from "../../img/OurProcess/Left.svg";
import Middle from "../../img/OurProcess/Middle.svg";
import Right from "../../img/OurProcess/Right.svg";
import "../OurProcess/OurProcess.css";

class OurProcess extends Component {
    getItemById = (id) => {
        const { processes } = this.props;
        return processes.find((item) => item.id === id);
    };

    render() {
        const item1 = this.getItemById(1);
        const item2 = this.getItemById(2);
        const item3 = this.getItemById(3);

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
                                    {item1.header}
                                </span>
                                <span
                                    id="our-process-content-desc-left"
                                    className="to-change-text"
                                >
                                    {item1.description}
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
                                    {item2.header}
                                </span>
                                <span
                                    id="our-process-content-desc-middle"
                                    className="to-change-text"
                                >
                                    {item2.description}
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
                                    {item3.header}
                                </span>
                                <span
                                    id="our-process-content-desc-right"
                                    className="to-change-text"
                                >
                                    {item3.description}
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
