import React, { Component } from "react";
import "../AboveFooter/AboveFooter.css";

class AboveFooter extends Component {
    render() {
        return (
            <div className="container">
                <div id="above-footer-frame" className="to-change-frame">
                    <div className="above-footer-content">
                        <div className="above-footer-content-text">
                            <span className="above-footer-content-text-header to-change-text">
                                Get in touch
                            </span>
                            <span className="above-footer-content-text-desc to-change-text">
                                Think we would be a good fit for your next
                                project?
                            </span>
                        </div>

                        <div className="above-footer-content-button">
                            <a
                                href="../WebPages/Location.html"
                                className="above-footer-content-button-text to-change-text"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboveFooter;
