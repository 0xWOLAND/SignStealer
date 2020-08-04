import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./NewElement.css";
import Btn from "./Btn";
import "./Btn.css";
export default class NewElement extends Component {
        constructor(props) {
                super(props);
                this.render = this.render.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.getString = this.getString.bind(this);
                this.doesExist = this.doesExist.bind(this);
                this.state = { value: "", num: 1 };
        }

        getString(n) {
                var x = n - 1,
                        r26 = x.toString(26),
                        baseCharCode = "A".charCodeAt(0);

                var arr = r26.split(""),
                        len = arr.length;

                var newArr = arr.map(function (val, i) {
                        val = parseInt(val, 26);

                        if (i === 0 && len > 1) {
                                val = val - 1;
                        }

                        return String.fromCharCode(baseCharCode + val);
                });
                return newArr.join("");
        }

        handleChange(e) {
                this.setState({ value: e.target.value });
        }
        doesExist(str) {
                var children = document.getElementById("buttons").childNodes;
                for (var i = 0; i < children.length; i++) {
                        let elem = children[i];
                        if (str === elem.childNodes[1].innerText) {
                                return true;
                        }
                }
                return false;
        }
        handleSubmit(props) {
                let letter = this.getString(this.state.num);
                let sign = this.state.value;
                if (this.doesExist(sign)) {
                        alert("You have already added this sign!");
                } else {
                        var elem = document.createElement("div");
                        elem.id = "ele_container";
                        elem.onclick = function () {
                                document.getElementById(
                                        "letters"
                                ).innerText += letter;
                        };
                        var letterDiv = document.createElement("div");
                        letterDiv.className = "ele";
                        var letterH1 = document.createElement("h1");
                        letterH1.innerText = letter;
                        letterDiv.append(letterH1);
                        var signH3 = document.createElement("h3");
                        signH3.id = "sign";
                        if (sign === "") {
                                letterDiv.className += " empty";
                        }
                        signH3.innerText = sign;

                        elem.append(letterDiv);
                        elem.append(signH3);

                        document.getElementById("buttons").append(elem);
                        let tmp = this.state.num + 1;
                        this.setState({ num: tmp });
                }
        }

        render() {
                return (
                        <div id="new_element_main">
                                <div class="input-group mb-3">
                                        <input
                                                type="text"
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                                class="form-control"
                                                placeholder=""
                                                aria-label=""
                                                aria-describedby="basic-addon1"
                                        />
                                        <div class="input-group-postpend">
                                                <button
                                                        class="btn btn-outline-secondary"
                                                        type="submit"
                                                        onClick={
                                                                this
                                                                        .handleSubmit
                                                        }
                                                >
                                                        Add
                                                </button>
                                        </div>
                                </div>
                        </div>
                );
        }
}
