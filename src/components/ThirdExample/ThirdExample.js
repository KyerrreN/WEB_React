import React, { Component } from "react";
import "../ThirdExample/ThirdExample.css";

class ThirdExample extends Component {
    render() {
        const { productName, productDescription } = this.props;

        return (
            <div className="container">
                <div className="third-example-frame">
                    <div className="third-example-content">
                        <span className="third-example-content-header">
                            {productName}
                        </span>

                        <span className="third-example-content-text">
                            {productDescription}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThirdExample;
