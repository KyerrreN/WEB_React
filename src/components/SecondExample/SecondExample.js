import React, { Component } from "react";
import "../SecondExample/SecondExample.css";

class SecondExample extends Component {
    render() {
        const { productName, productDescription } = this.props;

        return (
            <div className="container">
                <div className="second-example-frame">
                    <div className="second-example-content">
                        <span className="second-example-content-header">
                            {productName}
                        </span>

                        <span className="second-example-content-text">
                            {productDescription}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondExample;
