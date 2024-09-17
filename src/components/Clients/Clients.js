import React, { Component } from "react";
import HillPlayes from "../../img/Clients/HillPlayes.svg";
import Riksgransen from "../../img/Clients/Riksgransen.svg";
import StudioCai from "../../img/Clients/StudioCai.svg";
import ChillIndustries from "../../img/Clients/ChillIndustries.svg";
import "../../css/Clients/Clients.css";

class Clients extends Component {
    render() {
        return (
            <div className="container">
                <div className="clients-frame to-change-frame">
                    <div className="clients-content">
                        <div className="clients-content-desc">
                            <span id="clients-content-desc-name">
                                prior clients
                            </span>
                            <span id="clients-content-desc-header">
                                Happy customers.
                            </span>
                            <span id="clients-content-desc-text">
                                Wishbone's client-centric approach earns rave
                                reviews. Customers laud the firm's collaborative
                                spirit and ability to actualize architectural
                                visions.
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
