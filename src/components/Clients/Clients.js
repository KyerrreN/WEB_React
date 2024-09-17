import React, { Component } from "react";
import HillPlayes from "../../img/Clients/HillPlayes.svg";
import Riksgransen from "../../img/Clients/Riksgransen.svg";
import StudioCai from "../../img/Clients/StudioCai.svg";
import ChillIndustries from "../../img/Clients/ChillIndustries.svg";
import "../Clients/Clients.css";

class Clients extends Component {
    render() {
        const { header, description } = this.props;

        return (
            <div className="container">
                <div className="clients-frame to-change-frame">
                    <div className="clients-content">
                        <div className="clients-content-desc">
                            <span id="clients-content-desc-name">
                                prior clients
                            </span>
                            <span id="clients-content-desc-header">
                                {header}
                            </span>
                            <span id="clients-content-desc-text">
                                {description}
                            </span>
                        </div>

                        <div className="clients-content-companies">
                            <img src={HillPlayes} alt="HillPlayes Logo" />
                            <img src={Riksgransen} alt="Riksgranses Logo" />
                            <img src={StudioCai} alt="Studio Cai Logo" />
                            <img
                                src={ChillIndustries}
                                alt="Chill Industries Logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clients;
