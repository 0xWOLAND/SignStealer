import React, { Component } from "react";
import "./UserInput.css";
import Btn from "./Btn.js";
export default class UserInput extends Component {
        render() {
                return (
                        <div id="buttons">
                                <Btn letter="A" sign="nose" />
                        </div>
                );
        }
}
