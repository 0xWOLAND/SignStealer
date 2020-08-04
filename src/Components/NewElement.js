import React, { Component } from "react";
import "./NewElement.css";

export default class NewElement extends Component {
        constructor(props) {
                super(props);
                this.render = this.render.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handleChange = this.handleChange.bind(this);
                this.state = { value: "" };
        }

        handleChange(e) {
                this.setState({ value: e.target.value });
        }
        handleSubmit(props) {
                console.log(this.state.value);
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
                                                        Button
                                                </button>
                                        </div>
                                </div>
                        </div>
                );
        }
}
