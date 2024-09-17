import React, { Component } from "react";
import "../ModalWindow/ModalWindow.css";

class ModalWindow extends Component {
    render() {
        return (
            <div className="profile" id="profile">
                <div className="profile-frame">
                    <div className="profile-content to-change-frame">
                        <a
                            href="#"
                            id="profile-close"
                            className="to-change-text"
                        >
                            X
                        </a>

                        <img
                            src="../Pictures/Header/IMAGE.svg"
                            alt=""
                            className="to-change-logo"
                        />
                        <h1 className="modal-header to-change-text">
                            Here is your profile information. In case you forgot
                            any of your credentials, you can always look them up
                            here.
                        </h1>

                        <span className="to-change-line"></span>
                        <p className="modal-nickname to-change-text">
                            Nickname
                        </p>
                        <div
                            id="profile-content-nickname"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-first-name to-change-text">
                            First Name
                        </p>
                        <div
                            id="profile-content-first-name"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-last-name to-change-text">
                            Last Name
                        </p>
                        <div
                            id="profile-content-last-name"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-patronymic to-change-text">
                            Patronymic
                        </p>
                        <div
                            id="profile-content-patronymic"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-phone to-change-text">Phone</p>
                        <div
                            id="profile-content-phone"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-birth to-change-text">
                            Date Of Birth
                        </p>
                        <div
                            id="profile-content-birth"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-pass to-change-text">Password</p>
                        <div
                            id="profile-content-password"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                        <p className="modal-role to-change-text">Role</p>
                        <div
                            id="profile-content-role"
                            className="to-change-text"
                        ></div>

                        <span className="to-change-line"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWindow;
