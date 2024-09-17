import React, { Component } from "react";
import "../../css/Wrapper/Wrapper.css";
import Header from "../Header/Header.js";

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
            </div>
        );
    }
}

export default Wrapper;
