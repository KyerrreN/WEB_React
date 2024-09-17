import React, { Component } from "react";
import "../FirmInfo/FirmInfo.css";
import ProfilePic from "../../img/FirmInfo/IMAGE.svg";

class FirmInfo extends Component {
    render() {
        const { name, position } = this.props;

        return (
            <div className="container">
                <div id="firm-frame" className="to-change-frame">
                    <div className="firm-content">
                        <span className="firm-our to-change-text">
                            Our firm
                        </span>

                        <div className="firm-content-desc">
                            <span
                                className="firm-content-desc-text to-change-text"
                                id="firm-content-desc-text-first"
                            >
                                Wishbone Architecture is a leading design firm
                                specializing in innovative and sustainable
                                buildings. Founded in 2010, the firm has quickly
                                established a reputation for creative solutions
                                that push the boundaries of traditional
                                architecture. With a team of highly skilled
                                designers, engineers, and project managers,
                                Wishbone takes on a diverse range of projects.
                            </span>

                            <span
                                className="firm-content-desc-text to-change-text"
                                id="firm-content-desc-text-second"
                            >
                                At the heart of Wishbone's approach is a deep
                                commitment to environmentally-conscious design.
                                The firm utilizes the latest green building
                                techniques and technologies to minimize the
                                carbon footprint of its projects, while also
                                ensuring the highest standards of livability and
                                functionality. This holistic philosophy has
                                earned Wishbone numerous awards and accolades.
                            </span>

                            <span
                                className="firm-content-desc-text to-change-text"
                                id="firm-content-desc-text-third"
                            >
                                Beyond its design expertise, Wishbone is known
                                for its collaborative workflow and
                                client-centric service. The firm works closely
                                with stakeholders throughout the entire project
                                lifecycle, from initial concept to final
                                construction, to exceed expectations. This
                                dedication to transparency has earned Wishbone a
                                loyal client base entrusting the firm with
                                ambitious visions.
                            </span>

                            <div className="firm-content-desc-author">
                                <img src={ProfilePic} alt="Author Picture" />

                                <div className="firm-content-desc-author-cred">
                                    <span className="firm-content-desc-author-cred-name to-change-text">
                                        {name}
                                    </span>
                                    <span className="firm-content-desc-author-cred-position to-change-text">
                                        {position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirmInfo;
