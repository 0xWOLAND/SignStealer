import React, { Component } from "react";
import "./Btn.css";

export default class Btn extends Component {
        constructor(props) {
                super(props);
                this.render = this.render.bind(this);
                this.btnClicked = this.btnClicked.bind(this);
        }
        btnClicked() {
                
                document.getElementById("letters").innerText += this.props.letter
        }
        render() {
                return (
                        <div id="ele_container" onClick={this.btnClicked}>
                                <div className="ele">
                                        <h1>{this.props.letter}</h1>
                                </div>
                                <h3 id="sign">{this.props.sign}</h3>
                        </div>
                );
        }
}
