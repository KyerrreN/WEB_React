import React, { Component } from "react";
import "../FirstExample/FirstExample.css";

class FirstExample extends Component {
    render() {
        const { productName, productDescription } = this.props;

        return (
            <div className="container">
                <div className="first-example-frame">
                    <div className="first-example-content">
                        <span className="first-example-content-name">
                            {productName}
                        </span>
                        <span className="first-example-content-desc">
                            {productDescription}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstExample;
