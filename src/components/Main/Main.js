import React, { Component } from "react";
import "../../css/Main/Main.css";

class Main extends Component {
    render() {
        return (
            <main class="container">
                <div class="main-frame to-change-frame">
                    <div class="main-content">
                        <span class="main-content-company to-change-text">
                            Wishbone+Partners
                        </span>
                        <span class="main-content-header to-change-text">
                            The home of beautiful architecture.
                        </span>
                        <span class="main-content-span to-change-text">
                            We are an architecture firm with a focus on
                            beautiful but functional design. At its heart, we
                            believe design is about usability and accessibility
                            — these are the guiding principles for our work.
                            Read more about our previous projects, our process
                            and our team below.
                        </span>
                        <button class="main-content-button">
                            <span class="main-content-button-text to-change-text">
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
