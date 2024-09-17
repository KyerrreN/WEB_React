import React, { Component } from "react";
import "../FirstExample/FirstExample.css";

class FirstExample extends Component {
    render() {
        return (
            <div className="container">
                <div className="first-example-frame">
                    <div className="first-example-content">
                        <span className="first-example-content-name">
                            Reeding House
                        </span>
                        <span className="first-example-content-desc">
                            Modern, eco-friendly, minimalist design.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstExample;
