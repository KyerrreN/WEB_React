import React, { Component } from "react";
import "../../css/Main/Main.css";

class Main extends Component {
    render() {
        return (
            <main className="container">
                <div className="main-frame to-change-frame">
                    <div className="main-content">
                        <span className="main-content-company to-change-text">
                            Wishbone+Partners
                        </span>
                        <span className="main-content-header to-change-text">
                            The home of beautiful architecture.
                        </span>
                        <span className="main-content-span to-change-text">
                            We are an architecture firm with a focus on
                            beautiful but functional design. At its heart, we
                            believe design is about usability and accessibility
                            — these are the guiding principles for our work.
                            Read more about our previous projects, our process
                            and our team below.
                        </span>
                        <button className="main-content-button">
                            <span className="main-content-button-text to-change-text">
                                Read more
                            </span>
                        </button>
                    </div>

                    <div id="main-picture"></div>
                </div>
            </main>
        );
    }
}

export default Main;
