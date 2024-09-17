import React, { Component } from "react";
import "../../css/Projects/Projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="container">
                <div id="projects-frame" className="to-change-frame">
                    <div className="projects-content">
                        <div className="projects-text">
                            <span className="projects-text-header to-change-text">
                                Featured projects
                            </span>
                            <span className="projects-text-desc to-change-text">
                                Some of the latest and greatest projects from us
                                here at Wishbone+Partners.
                            </span>
                        </div>

                        <div className="projects-examples">
                            <div className="projects-examples-first projects-examples-pictures"></div>
                            <div className="projects-examples-second projects-examples-pictures"></div>
                            <div className="projects-examples-third projects-examples-pictures"></div>
                        </div>

                        <div className="projects-content-button">
                            <a
                                href="../WebPages/Projects.html"
                                className="projects-content-button-text to-change-text"
                            >
                                View all projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
